import React from 'react'
import { Link } from 'react-router-dom' 

const Landing = () => {
  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fintech-yellow/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left pt-10">
          <div className="inline-block px-4 py-2 rounded-full border border-fintech-yellow/30 bg-fintech-yellow/10 text-fintech-yellow text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(255,193,115,0.2)]">
            🚀 The #1 Payment Solution
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Seamless & Secure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">
              Online Payments
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            A simple yet modern solution to manage your app. Send, receive, and track your transactions with enterprise-grade security and zero friction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="" className="w-full sm:w-auto px-8 py-4 bg-fintech-yellow text-fintech-900 font-bold rounded-xl shadow-xl shadow-fintech-glow hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Get Started for Free
            </Link>
            <Link to="" className="w-full sm:w-auto px-8 py-4 bg-fintech-800 text-white font-semibold rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 text-lg">
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Right Content - Mockup */}
        <div className="flex-1 relative mt-12 lg:mt-0 flex justify-center items-center">
          {/* Advanced Breathtaking Glow Setup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-fintech-yellow via-orange-500 to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 animate-float transform hover:scale-105 transition-transform duration-700">
            <img 
               src="/assets/mobile screen.svg" 
               alt="App Mockup" 
               className="w-full max-w-[280px] sm:max-w-xs mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-[3rem] border border-white/10" 
            />
          </div>
        </div>
      </div>

      {/* Feature Cards Below */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-fintech-800/40 p-8 rounded-2xl border border-white/5 hover:border-fintech-yellow/30 transition-colors duration-300 group">
            <div className="w-14 h-14 bg-fintech-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <img src="/assets/account.svg" alt="Account" className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Create an Account</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Instantly set up your business profile with minimal paperwork. Start processing payments globally within minutes.</p>
          </div>

          <div className="bg-fintech-800/40 p-8 rounded-2xl border border-white/5 hover:border-fintech-yellow/30 transition-colors duration-300 group">
            <div className="w-14 h-14 bg-fintech-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <img src="/assets/bank.svg" alt="Bank" className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Attach Bank Accounts</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Securely link your existing bank accounts with our Plaid integration for seamless deposits and automated accounting.</p>
          </div>

          <div className="bg-fintech-800/40 p-8 rounded-2xl border border-white/5 hover:border-fintech-yellow/30 transition-colors duration-300 group">
            <div className="w-14 h-14 bg-fintech-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <img src="/assets/cash.svg" alt="Cash" className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Send & Receive Money</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Transfer funds instantly to vendors or get paid dynamically using custom payment links and smart invoicing.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing