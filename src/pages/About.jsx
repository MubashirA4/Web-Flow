import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Globe, ChevronRight } from 'lucide-react'
import natashaImg from '../assets/images/natasha.png'

const AboutPage = () => {
    return (
        <div className="pt-20 bg-white dark:bg-fintech-900 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-black/5 dark:border-white/5">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-fintech-yellow/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 rounded-full bg-fintech-yellow/10 border border-fintech-yellow/20 text-fintech-yellow text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Our Journey
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Building the future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">digital finance.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
                        >
                            PrimePay was founded on the idea that financial technology should be invisible. We're on a mission to empower businesses by removing the complexity of global payments.
                        </motion.p>
                    </div>
                    <div className="flex-1 relative">
                        <motion.div 
                             initial={{ opacity: 0, scale: 0.8 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ type: "spring", duration: 1.5 }}
                             className="bg-gray-50 dark:bg-fintech-800 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white dark:bg-fintech-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">12M+</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase">Users Worldwide</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-fintech-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">$4B+</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase">Processed Yearly</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-fintech-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">99.9%</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase">System Uptime</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-fintech-900 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">150+</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase">Countries Served</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">Values that drive us</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium">We believe in security, speed, and absolute transparency in every transaction.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Trust First", color: "text-blue-500", bg: "bg-blue-500/10", desc: "Security isn't an option, it's our foundation. Your money is protected by bank-grade protocols." },
                            { icon: Zap, title: "Pure Speed", color: "text-fintech-yellow", bg: "bg-fintech-yellow/10", desc: "Why wait for days? Get your payouts instantly with our smart clearing technology." },
                            { icon: Users, title: "Human Centric", color: "text-purple-500", bg: "bg-purple-500/10", desc: "Built by people, for people. Our support team is always just a click away." },
                            { icon: Globe, title: "Global Scale", color: "text-green-500", bg: "bg-green-500/10", desc: "Boundary-less finance. We enable local payments on a global level effortlessly." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-gray-50 dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                                    <item.icon className={item.color} />
                                </div>
                                <h4 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-tight">{item.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50 dark:bg-fintech-800/10 border-y border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-16">Meet our visionary team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { name: "John Smith", role: "CEO & Founder", img: natashaImg }, // Using existing assets
                            { name: "Jessica Jobs", role: "Product Head", img: natashaImg },
                            { name: "Alex Rivera", role: "Tech Lead", img: natashaImg },
                            { name: "Natasha Wick", role: "Lead Designer", img: natashaImg }
                        ].map((person, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative mb-6 overflow-hidden rounded-[2rem] border-4 border-white dark:border-fintech-800 shadow-xl">
                                    <img src={person.img} alt={person.name} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{person.name}</h4>
                                <p className="text-fintech-yellow font-bold uppercase tracking-widest text-[10px] mt-1">{person.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-fintech-yellow p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-fintech-900 mb-8 relative z-10 leading-tight">
                            Want to join the <br /> financial revolution?
                        </h2>
                        <Link to="/get-started" className="inline-flex items-center space-x-3 px-10 py-5 bg-fintech-900 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl relative z-10 group/btn">
                            <span>Get Started Now</span>
                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage