import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, ArrowRight, TrendingUp, Sparkles, Send } from 'lucide-react'
import merchant2Img from '../assets/images/merchant2.png'

const BlogPage = () => {
    const categories = ["All Posts", "Finance", "Payments", "Security", "Crypto", "Strategy"];
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const posts = [
        {
            id: 1,
            title: "The future of global payments in 2026",
            excerpt: "How borderless finance is changing the way we think about international business and money transfer global scale today.",
            category: "Payments",
            date: "May 12, 2026",
            author: "John Smith",
            img: merchant2Img
        },
        {
            id: 2,
            title: "Securing your digital wallet with biometrics",
            excerpt: "Learn how modern biometric encryption is making digital fraud a thing of the past for everyday mobile users.",
            category: "Security",
            date: "May 10, 2026",
            author: "Alex Rivera",
            img: merchant2Img
        },
        {
            id: 3,
            title: "Why crypto isn't ready for retail yet",
            excerpt: "An in-depth look at the remaining barriers between cryptocurrency and everyday consumer purchases in 2026.",
            category: "Crypto",
            date: "May 08, 2026",
            author: "Jessica Jobs",
            img: merchant2Img
        },
        {
            id: 4,
            title: "How to scale your startup's cashflow",
            excerpt: "Practical strategies for maintaining a healthy burn rate while aggressively expanding your company globally.",
            category: "Strategy",
            date: "May 05, 2026",
            author: "Natasha Wick",
            img: merchant2Img
        },
        {
            id: 5,
            title: "Is traditional banking dead?",
            excerpt: "Comparing the agility of fintech vs the reliability of legacy banks in the modern digital age of finance.",
            category: "Finance",
            date: "May 02, 2026",
            author: "John Smith",
            img: merchant2Img
        },
        {
            id: 6,
            title: "Understanding ISO 20022 compliance",
            excerpt: "A simplified guide to the new global standard for electronic data interchange between financial institutions.",
            category: "Security",
            date: "Apr 28, 2026",
            author: "Alex Rivera",
            img: merchant2Img
        }
    ]

    return (
        <div className="pt-20 bg-white dark:bg-fintech-900 transition-colors duration-500 min-h-screen">
            {/* Header / Featured Post */}
            <section className="py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative group rounded-[3.5rem] overflow-hidden bg-gray-900 shadow-2xl h-[450px] md:h-[550px] flex items-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10"></div>
                        <img src={merchant2Img} alt="Featured" className="absolute top-0 right-0 w-[60%] h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />

                        <div className="relative z-20 px-10 md:px-20 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-fintech-yellow/10 border border-fintech-yellow/20 text-fintech-yellow text-[10px] font-black uppercase tracking-widest mb-6"
                            >
                                <TrendingUp className="w-3 h-3" />
                                <span>Featured Post</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight"
                            >
                                The era of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">Invisible Payments.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-lg mb-10 font-medium"
                            >
                                Explore how biometrics and decentralized ledgers are removing friction from our daily transactions.
                            </motion.p>
                            <Link to="/blog/featured" className="inline-flex items-center space-x-3 px-8 py-4 bg-fintech-yellow text-fintech-900 rounded-2xl font-black shadow-xl shadow-fintech-glow/20 hover:scale-105 transition-all">
                                <span>Read Full Article</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="pb-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-black/5 dark:border-white/5 pb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-tight transition-all ${activeCategory === cat ? 'bg-fintech-yellow text-fintech-900 shadow-lg shadow-fintech-yellow/10' : 'bg-gray-100 dark:bg-fintech-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-fintech-700'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-fintech-yellow" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-14 pr-6 py-4 rounded-full bg-gray-50 dark:bg-fintech-800 border border-black/5 dark:border-white/5 outline-none focus:border-fintech-yellow/50 transition-all text-sm font-bold text-gray-900 dark:text-white"
                        />
                    </div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col h-full bg-gray-50 dark:bg-fintech-800/20 rounded-[3rem] p-6 border border-black/5 dark:border-white/5 hover:border-fintech-yellow/30 transition-all shadow-xl dark:shadow-none hover:shadow-2xl hover:shadow-black/5"
                        >
                            <div className="relative h-64 mb-8 overflow-hidden rounded-[2rem] bg-gray-200 dark:bg-fintech-900">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-fintech-900 dark:text-fintech-yellow shadow-xl">
                                    {post.category}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col px-4">
                                <div className="flex items-center space-x-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-fintech-yellow transition-colors">{post.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-8 flex-1">{post.excerpt}</p>

                                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-black uppercase tracking-tighter text-xs group-hover:gap-4 transition-all">
                                    Read Full Story <ArrowRight className="w-4 h-4 text-fintech-yellow" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto mt-20 text-center">
                    <button className="px-10 py-5 rounded-2xl border-2 border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-black hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-fintech-900 transition-all">
                        Load More Articles
                    </button>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-black rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fintech-yellow/5 rounded-full blur-[120px] group-hover:scale-150 transition-all duration-[2000ms]"></div>
                    <div className="relative z-10">
                        <Sparkles className="w-12 h-12 text-fintech-yellow mx-auto mb-8 animate-pulse" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Insights in your inbox.</h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">Join 20,000+ professionals receiving the latest in fintech strategy and security directly every morning.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-xl group-focus-within:border-fintech-yellow/50 transition-all">
                            <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-none outline-none text-white px-6 py-4 font-bold placeholder-gray-500" />
                            <button className="whitespace-nowrap px-8 py-4 bg-fintech-yellow text-fintech-900 rounded-2xl font-black hover:bg-white transition-all flex items-center space-x-2">
                                <span>Join Now</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage