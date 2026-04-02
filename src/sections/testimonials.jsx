import awardImg from '../assets/images/award.svg';
import award2Img from '../assets/images/award2.svg';
import natashaImg from '../assets/images/natasha.png';
import React from 'react'
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="py-24 relative overflow-hidden bg-white dark:bg-fintech-900 transition-colors duration-500">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-fintech-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
                    <div className="flex-1">
                        <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
                            "Say goodbye to clutter and <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">
                                bounce rates."
                            </span>
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg transition-colors duration-500 font-medium">
                            Join thousands of happy teams who have streamlined their financial operations with PrimePay's intuitive platform.
                        </p>
                    </div>

                    <div className="flex-2 flex flex-col md:flex-row gap-6">
                        {/* Rating 1 */}
                        <div className="bg-gray-50 dark:bg-gradient-to-r dark:from-fintech-800 dark:to-fintech-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex-1 shadow-lg dark:shadow-xl transition-all duration-500">
                            <img src={awardImg} alt="Award" className="w-12 h-12 mb-4 dark:brightness-0 dark:invert opacity-80" />
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors duration-500">4.8/5</h2>
                            <div className="flex text-fintech-yellow space-x-1 mb-3">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-tighter">On the iOS App Store</p>
                        </div>
                        {/* Rating 2 */}
                        <div className="bg-gray-50 dark:bg-gradient-to-r dark:from-fintech-800 dark:to-fintech-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex-1 shadow-lg dark:shadow-xl transition-all duration-500">
                            <img src={award2Img} alt="Award" className="w-12 h-12 mb-4 dark:brightness-0 dark:invert opacity-80" />
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors duration-500">4.9/5</h2>
                            <div className="flex text-fintech-yellow space-x-1 mb-3">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-tighter">On the Android Play Store</p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 dark:bg-fintech-800/40 p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 transition-all duration-500 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <img src={natashaImg} alt="Nattasha" className="w-14 h-14 rounded-full border-2 border-fintech-yellow/20" />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-bold transition-colors">Nattasha</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Designer</p>
                                </div>
                            </div>
                            <div className="flex text-fintech-yellow text-sm">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm italic font-medium transition-colors">
                            "Our team was able to teach themselves PrimePay in a day. It's like using a shared email inbox but way more robust looking. PrimePay was the modern solution we were looking for."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 dark:bg-fintech-800/40 p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 transition-all duration-500 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                                    <span className="text-blue-600 dark:text-white font-bold text-xl">JC</span>
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-bold transition-colors">Joe Cook</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Developer</p>
                                </div>
                            </div>
                            <div className="flex text-fintech-yellow text-sm">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm italic font-medium transition-colors">
                            "Integrating their payments API was a breeze. We literally shaved weeks off our development cycle. The documentation is incredibly clean and support is always there."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 dark:bg-fintech-800/40 p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 transition-all duration-500 shadow-lg max-md:hidden lg:block">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <img src={natashaImg} alt="Jessica" className="w-14 h-14 rounded-full border-2 border-fintech-yellow/20" />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-bold transition-colors">Jessica Jobs</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Product Designer</p>
                                </div>
                            </div>
                            <div className="flex text-fintech-yellow text-sm">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm italic font-medium transition-colors">
                            "The user interface is completely unmatched. Our bounce rates dropped significantly when we switched over to PrimePay's embedded checkout. Highly recommended."
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials