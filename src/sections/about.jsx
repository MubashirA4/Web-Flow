import mobileImg from '../assets/images/Mobile.png';
import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";
import { PiArrowRightThin } from "react-icons/pi";

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative bg-white dark:bg-fintech-900 transition-colors duration-500">
      <section className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        
        {/* Left Content */}
        <div className="flex-1">
          <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
            Send and receive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">
              payments easily
            </span>
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-xl transition-colors duration-500 font-medium">
            Simplify your financial operations with our streamlined platform. 
            Experience lightning-fast transactions, comprehensive tracking, and 
            bank-level security all in one place.
          </p>
          <div className="w-24 h-1 bg-fintech-yellow/50 rounded-full mb-10"></div>
          
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 shadow-xl hover:shadow-2xl dark:shadow-none transition-all duration-300 w-max cursor-pointer group">
            <IoMdPlayCircle className="text-fintech-yellow group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,193,115,0.4)]" size={60} />
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold flex flex-col transition-colors">
                See how it works
                <span className="text-fintech-yellow flex items-center gap-2 text-sm mt-1 uppercase tracking-wider font-bold">
                  Play Video <PiArrowRightThin className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </h4>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative z-10 w-full max-w-[250px] shrink-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 transition-transform duration-500">
            <img src={mobileImg} alt="Mobile App Interface" className="w-full h-auto rounded-[2.5rem]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-3xl bg-gray-50 dark:bg-gradient-to-r dark:from-fintech-800 dark:to-fintech-900 border border-black/5 dark:border-white/5 shadow-xl dark:shadow-2xl relative overflow-hidden transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fintech-yellow/5 rounded-full blur-3xl"></div>
        
        <div className="text-center relative z-10 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-8 md:pb-0">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-colors">12k<span className="text-fintech-yellow">+</span></h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">Active Users</p>
        </div>
        <div className="text-center relative z-10 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-8 md:pb-0">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-colors">$10<span className="text-fintech-yellow">M</span></h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">Transactions</p>
        </div>
        <div className="text-center relative z-10">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-colors">1k<span className="text-fintech-yellow">+</span></h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">5-Star Reviews</p>
        </div>
      </div>
      
      <div className="mt-24 border-b border-black/5 dark:border-white/10 w-full"></div>
    </div>
  )
}
