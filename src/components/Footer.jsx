import logoImg from '../assets/images/Logo.png';
import React from 'react'
import { Link } from 'react-router-dom';
import { Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="mt-24 bg-white dark:bg-fintech-900 border-t border-black/5 dark:border-white/5 pt-16 relative overflow-hidden transition-colors duration-500">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-fintech-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Newsletter Rectangle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 dark:bg-fintech-800 border border-white/5 rounded-3xl p-10 md:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-4">
              Ready to transform <br />
              <span className="text-fintech-yellow">your finances?</span>
            </h2>
            <p className="text-gray-400 font-medium max-w-sm mx-auto lg:mx-0">Join 20,000+ users who are already scaling with PrimePay.</p>
          </div>
          <div className="flex-1 w-full flex bg-white/5 p-2 rounded-2xl border border-white/10 shadow-inner backdrop-blur-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none outline-none text-white px-6 placeholder-gray-500 font-medium"
            />
            <button className="px-8 py-4 bg-fintech-yellow text-fintech-900 font-black rounded-xl hover:bg-white transition-all duration-300 flex items-center space-x-2 group">
              <span>Join Now</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center group">
              <img src={logoImg} alt="PrimePay Logo" className="h-10 w-auto transform group-hover:scale-105 transition-all duration-500 filter dark:brightness-110" />
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed font-medium">
              Empowering businesses globally with frictionless payments and enterprise-grade security. Scale your revenue without scaling your headaches.
            </p>
            <div className="flex items-center gap-5">
              {[FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <Link key={i} to="/" className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-fintech-yellow hover:text-fintech-900 transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-black mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-5">
              <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold flex items-center group">About Us <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/features" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold flex items-center group">Features <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/pricing" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold flex items-center group">Pricing Plan <span className="ml-3 bg-fintech-yellow/20 text-fintech-yellow px-2 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-tighter">OFFER</span></Link></li>
              <li><Link to="/blog" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold flex items-center group">Articles <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-black mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-5">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold">Help Center</Link></li>
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold">API Documentation</Link></li>
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-fintech-yellow transition-colors font-semibold">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-black mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-fintech-yellow shrink-0 mt-1" />
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">1700 W Blancke St, Киев Port South USA, America</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-fintech-yellow shrink-0" />
                <a href="tel:+3255456789" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold">+3255 456 789</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-fintech-yellow shrink-0" />
                <a href="mailto:mail@primpay.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold">mail@primpay.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/5 dark:border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-medium">Copyright © {new Date().getFullYear()} <span className="text-gray-900 dark:text-white font-black">PrimePay Inc.</span> All rights reserved.</p>
          <div className="flex items-center space-x-8 text-sm font-bold text-gray-500">
            <Link to="/" className="hover:text-fintech-yellow transition-colors">Cookie Settings</Link>
            <Link to="/" className="hover:text-fintech-yellow transition-colors">Safety Center</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer