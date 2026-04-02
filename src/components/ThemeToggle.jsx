import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-fintech-yellow" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </button>
    );
};

export default ThemeToggle;
