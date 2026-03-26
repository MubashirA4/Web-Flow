const fs = require('fs');
const path = require('path');

const walk = function(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
};

const updateFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove all css imports
    content = content.replace(/^import\s+['"].*\.css['"];?\s*$/gm, '');

    // 2. Fix image imports and references
    // Find all image imports like: import ImageName from '../assets/Image.png'
    const imgImportRegex = /^import\s+([a-zA-Z0-9_]+)\s+from\s+['"]([^'"]+\.(?:png|jpg|jpeg|svg|gif|mp4))['"];?\s*$/gm;
    let match;
    const imgMap = {};

    while ((match = imgImportRegex.exec(content)) !== null) {
        const varName = match[1];
        const importPath = match[2];
        const fileName = path.basename(importPath);
        imgMap[varName] = `/assets/${fileName}`;
    }

    // Remove the imports
    content = content.replace(imgImportRegex, '');

    // Replace the variable usage with string
    // e.g. <img src={ImageName} /> to <img src={'/assets/Image.png'} />
    for (const [varName, newPath] of Object.entries(imgMap)) {
        const usageRegex = new RegExp(`\\{\\s*${varName}\\s*\\}`, 'g');
        content = content.replace(usageRegex, `"${newPath}"`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
};

const srcFiles = walk('./src');
srcFiles.forEach(updateFile);
console.log('Fixed imports in ' + srcFiles.length + ' files.');
