import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, Lock, Smartphone, Globe2, 
  CreditCard, Sparkles, RefreshCw, Zap, 
  ShieldCheck, Inbox, Wallet, Layers 
} from 'lucide-react'
import mobileScreenImg from '../assets/images/mobile_screen.svg'

const FeaturesPage = () => {
    const mainFeatures = [
        { icon: ShieldCheck, title: "Enterprise Security", desc: "Military-grade encryption for every transaction you process.", color: "text-blue-500", bg: "bg-blue-500/10" },
        { icon: Zap, title: "Instant Payouts", desc: "Access your funds in seconds, not days, with smart clearing.", color: "text-fintech-yellow", bg: "bg-fintech-yellow/10" },
        { icon: Smartphone, title: "Mobile First", desc: "Manage everything from the palm of your hand anywhere.", color: "text-purple-500", bg: "bg-purple-500/10" }
    ]

    return (
        <div className="pt-20 bg-white dark:bg-fintech-900 transition-colors duration-500 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-fintech-yellow/5 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-fintech-yellow/30 bg-fintech-yellow/10 text-fintech-yellow text-[10px] font-black uppercase tracking-widest mb-8"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Platform Capabilities</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8 tracking-tighter"
                    >
                        Powerful tools for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">modern commerce.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Everything you need to accept payments and manage your finances globally in one beautifully designed dashboard.
                    </motion.p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: BarChart3, title: "Advanced Analytics", desc: "Gain deep insights into your cash flow with real-time reporting and forecasting." },
                        { icon: CreditCard, title: "Smart Cards", desc: "Create virtual or physical cards with intelligent spending limits for your team." },
                        { icon: Globe2, title: "Global Reach", desc: "Accept payments in 135+ currencies including local payment methods." },
                        { icon: Wallet, title: "Multi-Wallet", desc: "Hold and exchange multiple currencies at interbank rates without fees." },
                        { icon: Inbox, title: "Smart Invoicing", desc: "Send professional invoices that get paid faster with built-in payment links." },
                        { icon: RefreshCw, title: "Automated Billing", desc: "Set up subscriptions and recurring payments with custom billing cycles." }
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 transition-all duration-300 group shadow-lg dark:shadow-none shadow-black/5"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-fintech-900 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-fintech-yellow transition-all duration-300">
                                <feature.icon className="w-7 h-7 text-gray-900 group-hover:text-fintech-900 transition-colors" />
                            </div>
                            <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">{feature.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Split Showcase Section */}
            <section className="py-32 bg-gray-50 dark:bg-fintech-800/10 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-fintech-yellow/5 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24 relative z-10">
                    <div className="flex-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={mobileScreenImg} alt="Mobile UI" className="w-full max-w-sm mx-auto animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
                            Control everything <br /> 
                            from a single <span className="text-fintech-yellow">unified app.</span>
                        </h2>
                        <div className="space-y-12">
                            {mainFeatures.map((f, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className={`w-14 h-14 shrink-0 rounded-2xl ${f.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <f.icon className={`w-6 h-6 ${f.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-tight">{f.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-[15px] font-medium leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Developers / Integrations */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <Layers className="w-12 h-12 text-fintech-yellow mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">API built for developers.</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 font-medium max-w-2xl mx-auto">Integrate PrimePay into your tech stack in minutes with our robust SDKs and comprehensive documentation.</p>
                    <div className="bg-gray-900 dark:bg-black rounded-[2rem] p-8 md:p-12 text-left font-mono text-sm leading-relaxed shadow-2xl relative overflow-hidden group">
                        <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <span className="text-gray-600 text-xs ml-4">npm install @primepay/sdk</span>
                        </div>
                        <p className="text-blue-400">import <span className="text-white">PrimePay</span> from <span className="text-green-400">'@primepay/sdk'</span>;</p>
                        <p className="text-gray-500 mt-2">// Initialize with your secret key</p>
                        <p className="text-white"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-orange-400">PrimePay</span>(<span className="text-green-400">'sk_test_51Mz...'</span>);</p>
                        <p className="text-gray-500 mt-4">// Create a checkout session instantly</p>
                        <p className="text-purple-400">await <span className="text-white">client.</span><span className="text-blue-400">checkout</span>.<span className="text-blue-400">create</span>({'{'} </p>
                        <p className="pl-6 text-white text-opacity-80">amount: <span className="text-orange-400">499.00</span>,</p>
                        <p className="pl-6 text-white text-opacity-80">currency: <span className="text-green-400">'usd'</span>,</p>
                        <p className="pl-6 text-white text-opacity-80">payment_methods: [<span className="text-green-400">'card'</span>, <span className="text-green-400">'apple_pay'</span>]</p>
                        <p className="text-purple-400">{'}'});</p>
                        
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="px-5 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">Copy Code</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesPage