import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Payment = () => {
    return (
        <div className="py-24">
            
            {/* Credit Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Credit is the Fastest <br /> 
                            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">Banking Solution.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            Experience next-generation virtual cards with intelligent spending limits explicitly designed for modern remote teams.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> All your transactions</p>
                                <p className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Receipt capturing</p>
                                <p className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Experience Smart App</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Control Your Budget</p>
                                <p className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-xl" /> Find Your Expenses</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-fintech-yellow/10 blur-3xl rounded-full translate-y-10 scale-90"></div>
                        <div className="relative group">
                            <img src="/assets/Sim1.png" alt="Credit Card Large" className="w-[85%] mx-auto drop-shadow-2xl rounded-3xl" />
                            <div className="absolute -bottom-12 -right-4 w-[60%] shadow-2xl rounded-2xl group-hover:scale-105 transition-transform duration-500">
                                <img src="/assets/sim2.png" alt="Credit Card Small" className="w-full drop-shadow-2xl rounded-2xl border-2 border-white/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Our payment services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">worldwide</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    {/* Basic Tier */}
                    <div className="bg-fintech-800/40 border border-white/5 rounded-3xl p-8 hover:border-fintech-yellow/30 transition-all duration-300">
                        <div className="text-white text-center mb-8 pb-8 border-b border-white/10">
                            <h4 className="text-xl font-bold mb-2">Basic</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-extrabold text-white">$10</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Modern Design</li>
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Easy to Customize</li>
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Basic Support</li>
                            <li className="flex items-center gap-3 text-gray-500"><IoIosCheckmarkCircle className="opacity-30" /> No transaction fees</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white hover:text-fintech-900 transition-colors">
                            Get Started
                        </Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="bg-gradient-to-b from-fintech-800 to-fintech-900 border-2 border-fintech-yellow/30 rounded-3xl p-10 transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,193,115,0.15)] relative">
                        <div className="absolute top-0 inset-x-0 mx-auto -translate-y-1/2 w-max px-4 py-1 rounded-full bg-fintech-yellow text-fintech-900 text-xs font-bold uppercase tracking-wider">Most Popular</div>
                        <div className="text-white text-center mb-8 pb-8 border-b border-white/10">
                            <h4 className="text-xl font-bold mb-2 text-fintech-yellow">Pro</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-6xl font-extrabold text-white">$19</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> All Basic Features</li>
                            <li className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> Automated Workflows</li>
                            <li className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> 24/7 Priority Support</li>
                            <li className="flex items-center gap-3 text-white"><IoIosCheckmarkCircle className="text-fintech-yellow text-lg" /> No transaction fees</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl bg-fintech-yellow text-fintech-900 font-bold hover:bg-white transition-colors shadow-lg shadow-fintech-yellow/20">
                            Get Started
                        </Link>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="bg-fintech-800/40 border border-white/5 rounded-3xl p-8 hover:border-fintech-yellow/30 transition-all duration-300">
                        <div className="text-white text-center mb-8 pb-8 border-b border-white/10">
                            <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-extrabold text-white">$35</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Dedicated Account Manager</li>
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Custom API Access</li>
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> White-label Branding</li>
                            <li className="flex items-center gap-3 text-gray-300"><IoIosCheckmarkCircle className="text-fintech-yellow" /> Volume Discounts</li>
                        </ul>
                        <Link to="/" className="block w-full text-center py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white hover:text-fintech-900 transition-colors">
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
