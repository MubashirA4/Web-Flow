import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronRight, HelpCircleIcon } from 'lucide-react';

const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

    const tiers = [
        {
            name: "Basic",
            price: billingCycle === 'monthly' ? 10 : 96,
            desc: "Ideal for early stage startups and small business teams.",
            features: ["Modern Dashboards", "Easy to Customize", "Basic API Access", "Standard Support", "5% transaction fees"],
            button: "Start Free Trial",
            popular: false
        },
        {
            name: "Pro",
            price: billingCycle === 'monthly' ? 19 : 180,
            desc: "Perfect for scaling companies needing advanced automation.",
            features: ["All Basic Features", "Automated Workflows", "24/7 Priority Support", "Batch Payments", "No transaction fees", "Custom domain"],
            button: "Upgrade to Pro",
            popular: true
        },
        {
            name: "Enterprise",
            price: billingCycle === 'monthly' ? 35 : 340,
            desc: "Bespoke solutions for global corporations and large teams.",
            features: ["Dedicated Manager", "Full API Access", "White-label Branding", "Volume Discounts", "Unlimited Users", "Custom Contracts"],
            button: "Contact Sales",
            popular: false
        }
    ]

    const faqs = [
        { q: "Is there a free trial available?", a: "Yes, every plan comes with a 14-day free trial. No credit card required to start." },
        { q: "Can I switch between plans later?", a: "Absolutely! You can upgrade or downgrade your plan at any time through your dashboard." },
        { q: "What's the difference between monthly and yearly billing?", a: "Yearly billing saves you roughly 20% compared to paying month-to-month." },
        { q: "Are there any hidden transaction fees?", a: "Only the Basic plan has a 5% fee. Pro and Enterprise have 0% transaction fees." }
    ]

    return (
        <div className="pt-20 bg-white dark:bg-fintech-900 transition-colors duration-500 min-h-screen">
            {/* Header */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-3 py-1 rounded-full bg-fintech-yellow/10 border border-fintech-yellow/20 text-fintech-yellow text-[10px] font-black uppercase tracking-widest mb-6"
                >
                    Transparent Pricing
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8 tracking-tighter"
                >
                    Choose a plan that <br /> 
                    works for <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">your scale.</span>
                </motion.h1>
                
                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className={`text-sm font-bold uppercase transition-colors ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>Monthly</span>
                    <button 
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-14 h-7 bg-gray-200 dark:bg-fintech-800 rounded-full p-1 relative flex items-center transition-colors"
                    >
                        <motion.div 
                            animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                            className="w-5 h-5 bg-fintech-yellow rounded-full shadow-lg"
                        />
                    </button>
                    <span className={`text-sm font-bold uppercase transition-colors ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>Yearly</span>
                    {billingCycle === 'yearly' && (
                        <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">Save 20%</span>
                    )}
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pt-20 pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                    {tiers.map((tier, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-[3rem] p-10 relative transition-all duration-500 ${tier.popular ? 'bg-white dark:bg-gradient-to-b dark:from-fintech-800 dark:to-fintech-900 border-2 border-fintech-yellow shadow-2xl scale-105 z-10' : 'bg-gray-50 dark:bg-fintech-800/40 border border-black/5 dark:border-white/5 opacity-90'}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 inset-x-0 mx-auto -translate-y-1/2 w-max px-6 py-2 rounded-full bg-fintech-yellow text-fintech-900 text-[10px] font-black uppercase tracking-widest shadow-xl">Best Value</div>
                            )}
                            <h4 className={`text-2xl font-black mb-2 tracking-tighter ${tier.popular ? 'text-fintech-yellow' : 'text-gray-900 dark:text-white'}`}>{tier.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-10 leading-relaxed">{tier.desc}</p>
                            
                            <div className="flex items-baseline gap-2 mb-10">
                                <span className={`text-6xl font-black transition-colors ${tier.popular ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>${tier.price}</span>
                                <span className="text-gray-400 font-bold uppercase text-xs">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                            </div>

                            <ul className="space-y-6 mb-12">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-4 text-sm font-bold group">
                                        <IoIosCheckmarkCircle className={`text-xl transition-all ${tier.popular ? 'text-fintech-yellow scale-110' : 'text-fintech-yellow/50 group-hover:text-fintech-yellow'}`} />
                                        <span className="text-gray-600 dark:text-gray-300 transition-colors uppercase tracking-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link 
                                to="/" 
                                className={`block w-full py-5 rounded-2xl text-center font-black transition-all hover:scale-[1.02] shadow-xl ${tier.popular ? 'bg-fintech-yellow text-fintech-900 hover:bg-gray-900 hover:text-white dark:hover:bg-white' : 'bg-white dark:bg-fintech-900 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-fintech-900'}`}
                            >
                                {tier.button}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Comparison Table Small */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-fintech-800/10 border-y border-black/5 dark:border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-16 text-center">Compare every detail.</h2>
                    <div className="overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-fintech-900 shadow-xl">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-fintech-800/50">
                                <tr>
                                    <th className="p-6 text-xs font-black uppercase text-gray-400">Feature</th>
                                    <th className="p-6 text-xs font-black uppercase text-gray-400">Basic</th>
                                    <th className="p-6 text-xs font-black uppercase text-gray-400">Pro</th>
                                    <th className="p-6 text-xs font-black uppercase text-gray-400">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5 dark:divide-white/5 text-[13px] font-bold">
                                {['Integrations', 'API Rate Limit', 'Team Seats', 'Reporting', 'Security'].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-fintech-800/20 transition-colors">
                                        <td className="p-6 text-gray-900 dark:text-white">{row}</td>
                                        <td className="p-6 text-gray-500">10+</td>
                                        <td className="p-6 text-gray-900 dark:text-white">Unlimited</td>
                                        <td className="p-6 text-gray-900 dark:text-white font-black">Custom</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <HelpCircleIcon className="w-12 h-12 text-fintech-yellow mx-auto mb-6" />
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white">Questions? We have answers.</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-fintech-900 shadow-sm transition-all">
                                <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-gray-900 dark:text-white group-open:bg-gray-50 dark:group-open:bg-fintech-800/40">
                                    {faq.q}
                                    <ChevronDown className="w-5 h-5 transition-transform duration-500 group-open:rotate-180" />
                                </summary>
                                <div className="p-6 text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed bg-white dark:bg-fintech-900">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">Ready to grow?</h2>
                 <Link to="/get-started" className="inline-flex items-center space-x-3 px-10 py-5 bg-fintech-yellow text-fintech-900 rounded-2xl font-black shadow-xl shadow-fintech-glow/20 hover:scale-105 transition-all group">
                    <span>Unlock Enterprise Access</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </Link>
            </section>
        </div>
    )
}

export default PricingPage