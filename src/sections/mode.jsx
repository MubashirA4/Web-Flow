import mobileImg from '../assets/images/Mobile.png';
import mobile1Img from '../assets/images/Mobile1.png';
import mobile2Img from '../assets/images/Mobile_2.png';
import mobile3Img from '../assets/images/Mobile_3.png';
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Mode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="py-24 overflow-hidden relative border-t border-b border-black/5 dark:border-white/5 bg-gray-50 dark:bg-fintech-900 transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fintech-700/10 dark:bg-fintech-700/30 rounded-[100%] blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-500">
              Feels great in low-light <br /> 
              Mood for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">Eye Protection</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-500">
              Toggle between themes dynamically to save battery life and reduce visual strain during nighttime trading.
            </p>
        </div>

        {/* Device showcase */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-16 relative">
          <img src={mobile2Img} alt="Light UI" className={`w-[120px] md:w-[220px] rounded-[2rem] shadow-2xl rotate-[-5deg] hover:rotate-0 transition-all duration-500 ${theme === 'dark' ? 'opacity-40 grayscale-[0.5]' : 'opacity-100 scale-110 z-20'}`} />
          <img src={mobile1Img} alt="Main UI" className="w-[150px] md:w-[280px] rounded-[2rem] shadow-[0_0_50px_rgba(255,193,115,0.2)] z-10 hover:-translate-y-4 transition-transform duration-500" />
          <img src={mobile3Img} alt="Dark UI" className={`w-[120px] md:w-[220px] rounded-[2rem] shadow-2xl rotate-[5deg] hover:rotate-0 transition-all duration-500 ${theme === 'light' ? 'opacity-40 grayscale-[0.5]' : 'opacity-100 scale-110 z-20'}`} />
        </div>

        {/* Toggle UI */}
        <div className="bg-white dark:bg-fintech-800/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center shadow-2xl max-w-xs mx-auto w-full relative z-20 transition-all duration-500">
            <button 
              onClick={() => theme === 'light' && toggleTheme()}
              className={`flex-1 text-center py-3 font-semibold rounded-full transition-all duration-500 ${theme === 'dark' ? 'text-white bg-fintech-900 border border-white/5 shadow-inner' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Dark Mode
            </button>
            <button 
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`flex-1 text-center py-3 font-semibold rounded-full transition-all duration-500 ${theme === 'light' ? 'text-gray-900 bg-gray-100 border border-black/5 shadow-inner' : 'text-gray-500 hover:text-white'}`}
            >
              Light Mode
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default Mode