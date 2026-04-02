import mobileScreenImg from '../assets/images/mobile_screen.svg';
import React from 'react'
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion'
import { Rocket, Box, Banknote, CreditCard, ChevronRight, Play } from 'lucide-react'

const Landing = () => {
  return (
    <div className="relative w-full pt-32 pb-16 overflow-hidden bg-white dark:bg-fintech-900 transition-colors duration-500">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fintech-yellow/10 dark:bg-fintech-yellow/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left pt-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-fintech-yellow/30 bg-fintech-yellow/10 text-fintech-yellow text-xs font-bold mb-8 shadow-lg shadow-fintech-yellow/5 uppercase tracking-wider backdrop-blur-md">
            <Rocket className="w-4 h-4 mr-2" />
            The #1 Payment Solution
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.95] mb-8 tracking-tighter">
            Seamless & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow via-orange-400 to-orange-600">
              Secure Online
            </span> <br className="hidden md:block" />
            Payments
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            A simple yet modern solution to manage your app. Send, receive, and track your transactions with enterprise-grade security and zero friction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <Link to="/get-started" className="group w-full sm:w-auto px-10 py-5 bg-fintech-yellow text-fintech-900 font-black rounded-xl shadow-xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-400 text-lg flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/" className="group w-full sm:w-auto px-10 py-5 bg-transparent text-gray-900 dark:text-white font-bold rounded-xl border border-black/10 dark:border-white/10 hover:border-fintech-yellow/50 transition-all duration-400 text-lg flex items-center justify-center space-x-3">
              <div className="p-1.5 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-fintech-yellow/10 transition-colors">
                 <Play className="w-4 h-4" />
              </div>
              <span>Book a Demo</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative mt-12 lg:mt-0 flex justify-center items-center perspective-1000"
        >
          {/* Glow Setup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-fintech-yellow via-orange-500 to-purple-600 rounded-full blur-[80px] opacity-20 dark:opacity-40 animate-pulse mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 animate-float transform transition-all duration-700 hover:scale-[1.02] hover:rotate-2 group">
            <img 
               src={mobileScreenImg} 
               alt="App Mockup" 
               className="w-full max-w-[220px] sm:max-w-[300px] mx-auto drop-shadow-2xl rounded-3xl border-4 border-white/5 dark:border-white/10 dark:brightness-105 transition-all duration-500 group-hover:border-fintech-yellow/20" 
            />
          </div>
        </motion.div>
      </div>

      {/* Feature Cards Below */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            { icon: <Box className="w-6 h-6" />, title: "Create an Account", desc: "Instantly set up your business profile with minimal paperwork. Start processing payments globally within minutes." },
            { icon: <CreditCard className="w-6 h-6" />, title: "Attach Bank Accounts", desc: "Securely link your existing bank accounts with our Plaid integration for seamless deposits and automated accounting." },
            { icon: <Banknote className="w-6 h-6" />, title: "Send & Receive Money", desc: "Transfer funds instantly to vendors or get paid dynamically using custom payment links and smart invoicing." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/5 dark:bg-fintech-800/40 p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-fintech-yellow/40 hover:bg-white dark:hover:bg-fintech-800 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white dark:bg-fintech-900 rounded-xl flex items-center justify-center mb-6 shadow-lg border border-black/5 dark:border-white/5 group-hover:scale-110 group-hover:bg-fintech-yellow group-hover:text-fintech-900 transition-all duration-500 text-fintech-yellow">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{card.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Landing;