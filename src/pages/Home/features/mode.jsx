import React from 'react'
import { Link } from 'react-router-dom'

const Mode = () => {
  return (
    <div className="py-24 overflow-hidden relative border-t border-b border-white/5 bg-fintech-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fintech-700/30 rounded-[100%] blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Feels great in low-light <br /> 
              Mood for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">Eye Protection</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Toggle between themes dynamically to save battery life and reduce visual strain during nighttime trading.
            </p>
        </div>

        {/* Device showcase */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-16 relative">
          <img src="/assets/Mobile 2.png" alt="Light UI" className="w-[120px] md:w-[220px] rounded-[2rem] shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 opacity-60 hover:opacity-100" />
          <img src="/assets/Mobile1.png" alt="Main UI" className="w-[150px] md:w-[280px] rounded-[2rem] shadow-[0_0_50px_rgba(255,193,115,0.2)] z-10 hover:-translate-y-4 transition-transform duration-500" />
          <img src="/assets/Mobile 3.png" alt="Dark UI" className="w-[120px] md:w-[220px] rounded-[2rem] shadow-2xl rotate-[5deg] hover:rotate-0 transition-transform duration-500 opacity-60 hover:opacity-100" />
        </div>

        {/* Toggle UI */}
        <div className="bg-fintech-800/80 backdrop-blur-md border border-white/10 rounded-full p-2 flex items-center shadow-2xl max-w-xs mx-auto w-full relative z-20">
            <Link to="/" className="flex-1 text-center py-3 text-white font-semibold rounded-full bg-fintech-900 border border-white/5 shadow-inner transition-colors">
              Dark Mode
            </Link>
            <Link to="/" className="flex-1 text-center py-3 text-gray-400 font-medium rounded-full hover:text-white transition-colors">
              Light Mode
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Mode