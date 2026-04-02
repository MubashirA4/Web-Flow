import logoImg from '../assets/images/Logo.png';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 ${scrolled ? 'py-4' : 'py-6'}`}
        >
            <div className={`max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-8 rounded-2xl border transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-fintech-900/90 shadow-xl border-black/5 dark:border-white/10 backdrop-blur-xl' : 'bg-white/80 dark:bg-fintech-800/40 border-black/5 dark:border-white/10 backdrop-blur-md shadow-lg'}`}>
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center group">
                        <img src={logoImg} alt="PrimePay Logo" className="h-8 md:h-10 w-auto transform group-hover:scale-105 transition-all duration-500 filter dark:brightness-110" />
                    </Link>
                </div>
                
                <nav className="hidden lg:block">
                    <ul className="flex items-center space-x-10">
                        <li><Link to="/about" className="text-[15px] font-bold text-gray-600 dark:text-gray-300 hover:text-fintech-yellow transition-all duration-300">About Us</Link></li>
                        <li><Link to="/features" className="text-[15px] font-bold text-gray-600 dark:text-gray-300 hover:text-fintech-yellow transition-all duration-300">Features</Link></li>
                        <li><Link to="/pricing" className="text-[15px] font-bold text-gray-600 dark:text-gray-300 hover:text-fintech-yellow transition-all duration-300">Pricing</Link></li>
                        <li><Link to="/blog" className="text-[15px] font-bold text-gray-600 dark:text-gray-300 hover:text-fintech-yellow transition-all duration-300">Blog</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center space-x-6 mr-2">
                        <Link to="/login" className="text-[15px] font-bold text-gray-600 dark:text-gray-300 hover:text-fintech-yellow transition-all duration-300">Log In</Link>
                    </div>
                    <ThemeToggle />
                    <Link to="/get-started" className="hidden sm:flex items-center space-x-1 px-6 py-3 text-sm font-bold text-fintech-900 bg-fintech-yellow hover:bg-white dark:hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 rounded-2xl shadow-lg shadow-fintech-glow/20 group">
                        <span>Get Started</span>
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-28 left-6 right-6 p-6 rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-fintech-800/90 border border-black/5 dark:border-white/5 shadow-2xl"
                    >
                        <nav>
                            <ul className="space-y-6">
                                <li><Link onClick={() => setIsMenuOpen(false)} to="/about" className="block text-lg font-bold text-gray-600 dark:text-gray-300">About Us</Link></li>
                                <li><Link onClick={() => setIsMenuOpen(false)} to="/features" className="block text-lg font-bold text-gray-600 dark:text-gray-300">Features</Link></li>
                                <li><Link onClick={() => setIsMenuOpen(false)} to="/pricing" className="block text-lg font-bold text-gray-600 dark:text-gray-300">Pricing</Link></li>
                                <li><Link onClick={() => setIsMenuOpen(false)} to="/blog" className="block text-lg font-bold text-gray-600 dark:text-gray-300">Blog</Link></li>
                                <li className="pt-4 border-t border-black/5 dark:border-white/5">
                                    <Link onClick={() => setIsMenuOpen(false)} to="/login" className="block text-lg font-bold text-gray-600 dark:text-gray-300">Log In</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setIsMenuOpen(false)} to="/get-started" className="flex items-center justify-center space-x-2 w-full py-4 text-center font-bold text-fintech-900 bg-fintech-yellow rounded-2xl">
                                        <span>Get Started</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header