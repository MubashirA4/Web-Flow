import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <header className="max-w-7xl mx-auto backdrop-blur-md bg-fintech-800/60 border border-white/5 shadow-2xl shadow-fintech-900/50 rounded-2xl flex items-center justify-between px-8 py-4 transition-all duration-300">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center group">
                        <img src="/assets/Logo.png" alt="PrimePay Logo" className="h-8 md:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                </div>
                
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <li><Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
                        <li><Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Features</Link></li>
                        <li><Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link></li>
                        <li><Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-5">
                    <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block">Log In</Link>
                    <Link to="/" className="px-5 py-2.5 text-sm font-semibold text-fintech-900 bg-fintech-yellow hover:bg-white transition-colors duration-300 rounded-xl shadow-lg shadow-fintech-glow">
                        Get Started
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header