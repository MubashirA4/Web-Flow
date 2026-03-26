import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24 bg-fintech-800/20 border-t border-white/5 pt-20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-fintech-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Newsletter Rectangle */}
        <div className="bg-gradient-to-r from-fintech-800 to-fintech-900 border border-white/5 rounded-3xl p-10 md:p-14 mb-20 shadow-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight flex-1">
                Take control of your <br className="hidden md:block"/>
                <span className="text-fintech-yellow">personal finances today</span>
            </h2>
            <div className="flex-1 w-full flex bg-fintech-900 p-2 rounded-2xl border border-white/10 shadow-inner">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent border-none outline-none text-white px-4 placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-fintech-yellow text-fintech-900 font-bold rounded-xl hover:bg-white transition-colors">
                    Subscribe
                </button>
            </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center group mb-2">
                  <img src="/assets/Logo.png" alt="PrimePay Logo" className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Empowering businesses globally with frictionless payments and enterprise-grade security. Scale your revenue without scaling your headaches.
              </p>
              <div className="flex items-center gap-4 text-gray-400 mt-2">
                <Link to="/" className="hover:text-fintech-yellow transition-colors"><FaInstagram size={20} /></Link>
                <Link to="/" className="hover:text-fintech-yellow transition-colors"><FaFacebook size={20} /></Link>
                <Link to="/" className="hover:text-fintech-yellow transition-colors"><FaTwitter size={20} /></Link>
                <Link to="/" className="hover:text-fintech-yellow transition-colors"><FaLinkedin size={20} /></Link>
                <Link to="/" className="hover:text-fintech-yellow transition-colors"><FaYoutube size={20} /></Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Menu</h4>
              <ul className="space-y-4">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Pricing <span className="bg-fintech-yellow/20 text-fintech-yellow px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">Offer</span></Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">How it Work</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Utility pages</h4>
              <ul className="space-y-4">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Style guide</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Password Protected</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">404 Not Found</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Licenses</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Address</h4>
              <ul className="space-y-4 mb-6">
                  <li className="text-gray-400 text-sm leading-relaxed">1700 W Blancke St, kiyev port south USA, America</li>
                  <li><a href="tel:+3255456789" className="text-gray-400 hover:text-white transition-colors text-sm">+3255 456 789</a></li>
                  <li><a href="mailto:mail@primpay.com" className="text-fintech-yellow hover:text-white transition-colors text-sm">mail@primpay.com</a></li>
              </ul>
              <Link to="/" className="inline-block px-6 py-2 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-fintech-900 transition-colors">
                GET A QUOTE
              </Link>
            </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">Copyright © <span className="text-white">PrimePay</span></p>
          <p className="text-gray-500 text-sm">Designed & Migrated with Premium Aesthetics</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer