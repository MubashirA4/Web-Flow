import sim1Img from '../assets/images/Sim1.png';
import sim2Img from '../assets/images/sim2.png';
import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Payment = () => {
    return (
        <div className="py-24 bg-white dark:bg-fintech-900 transition-colors duration-500">
            
            {/* Credit Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
                            Credit is the Fastest <br /> 
                            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">Banking Solution.</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-medium transition-colors">
                            Experience next-generation virtual cards with intelligent spending limits explicitly designed for modern remote teams.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="flex items-center gap-3 text-gray-700 dark:text-white font-bold transition-colors"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> All your transactions</p>
                                <p className="flex items-center gap-3 text-gray-700 dark:text-white font-bold transition-colors"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Receipt capturing</p>
                                <p className="flex items-center gap-3 text-gray-700 dark:text-white font-bold transition-colors"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Experience Smart App</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="flex items-center gap-3 text-gray-700 dark:text-white font-bold transition-colors"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Control Your Budget</p>
                                <p className="flex items-center gap-3 text-gray-700 dark:text-white font-bold transition-colors"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Find Your Expenses</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-fintech-yellow/10 blur-3xl rounded-full translate-y-10 scale-90"></div>
                        <div className="relative group">
                            <img src={sim1Img} alt="Credit Card Large" className="w-[85%] mx-auto drop-shadow-2xl rounded-3xl" />
                            <div className="absolute -bottom-12 -right-4 w-[60%] shadow-2xl rounded-2xl group-hover:scale-105 transition-transform duration-500">
                                <img src={sim2Img} alt="Credit Card Small" className="w-full drop-shadow-2xl rounded-2xl border-2 border-white/5 dark:border-white/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight transition-colors">
                        Our payment services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">worldwide</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    {/* Basic Tier */}
                    <div className="bg-gray-50 dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 rounded-3xl p-8 hover:border-fintech-yellow/30 transition-all duration-300 shadow-lg dark:shadow-none">
                        <div className="text-center mb-8 pb-8 border-b border-black/5 dark:border-white/10">
                            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Basic</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-black text-gray-900 dark:text-white transition-colors">$10</span>
                                <span className="text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Modern Design</li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Easy to Customize</li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Basic Support</li>
                            <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500"><IoIosCheckmarkCircle className="opacity-30" /> No transaction fees</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-fintech-900 transition-all duration-300">
                            Get Started
                        </Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="bg-white dark:bg-gradient-to-b dark:from-fintech-800 dark:to-fintech-900 border-2 border-fintech-yellow rounded-3xl p-10 transform md:-translate-y-4 shadow-2xl relative transition-all duration-500">
                        <div className="absolute top-0 inset-x-0 mx-auto -translate-y-1/2 w-max px-4 py-1 rounded-full bg-fintech-yellow text-fintech-900 text-xs font-black uppercase tracking-wider">Most Popular</div>
                        <div className="text-center mb-8 pb-8 border-b border-black/5 dark:border-white/10">
                            <h4 className="text-xl font-bold mb-2 text-fintech-yellow uppercase tracking-tighter">Pro</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-6xl font-black text-gray-900 dark:text-white transition-colors">$19</span>
                                <span className="text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-900 dark:text-white font-bold"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> All Basic Features</li>
                            <li className="flex items-center gap-3 text-gray-900 dark:text-white font-bold"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> Automated Workflows</li>
                            <li className="flex items-center gap-3 text-gray-900 dark:text-white font-bold"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> 24/7 Priority Support</li>
                            <li className="flex items-center gap-3 text-gray-900 dark:text-white font-bold"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> No transaction fees</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl bg-fintech-yellow text-fintech-900 font-black hover:bg-gray-900 hover:text-white dark:hover:bg-white transition-all duration-300 shadow-xl shadow-fintech-glow/20">
                            Get Started
                        </Link>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="bg-gray-50 dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 rounded-3xl p-8 hover:border-fintech-yellow/30 transition-all duration-300 shadow-lg dark:shadow-none">
                        <div className="text-center mb-8 pb-8 border-b border-black/5 dark:border-white/10">
                            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Enterprise</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-black text-gray-900 dark:text-white transition-colors">$35</span>
                                <span className="text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Dedicated Account Manager</li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Custom API Access</li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> White-label Branding</li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Volume Discounts</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-fintech-900 transition-all duration-300">
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
