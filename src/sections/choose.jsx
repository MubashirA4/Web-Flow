import merchant2Img from '../assets/images/merchant2.png';
import thumbPrintImg from '../assets/images/thumb_print.png';
import merchantImg from '../assets/images/merchant.png';
import getPaidImg from '../assets/images/get-paid.png';
import React, { useEffect, useRef, useState } from 'react'

const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${isVisible
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-10 scale-[0.97]'
        }`}
    >
      {children}
    </div>
  );
};

const Choose = () => {
  return (
    <div className="bg-gray-50 dark:bg-fintech-800/30 py-24 relative overflow-hidden transition-colors duration-500">
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fintech-yellow/30 to-transparent animate-shimmer bg-[length:200%_100%]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Why it is Worth <br /> Choosing <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-yellow to-orange-400">PrimePay.</span>
          </h4>
        </div>

        {/* Row 1: Featured card left + 2 cards right */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">

          {/* Featured Card - Left (takes ~50% width, matches height of 2 stacked cards) */}
          <AnimatedCard delay={0} className="lg:w-1/2">
            <div className="bg-white dark:bg-gradient-to-br from-fintech-800 to-fintech-900 border border-gray-100 dark:border-white/10 rounded-3xl p-10 flex flex-col justify-between shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-fintech-yellow/20 transition-all duration-500 animate-glow-pulse h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-fintech-yellow/10 rounded-full blur-3xl group-hover:scale-[2] transition-transform duration-1000 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-fintech-yellow/10 border border-fintech-yellow/20 text-fintech-yellow text-xs font-semibold mb-5 uppercase tracking-wider">Featured</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-fintech-yellow transition-colors duration-300">Seamless Integrations</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base max-w-md">
                  Connect your favorite tools and software automatically via our robust API. We integrate flawlessly to bring all your data into one powerful dashboard.
                </p>
              </div>

              <div className="relative z-10 flex justify-center">
                <div className="transform group-hover:-translate-y-3 group-hover:rotate-[-2deg] transition-all duration-500 ease-out">
                  <img src={merchant2Img} alt="Merchant Dashboard" className="w-56 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-xl border border-gray-100 dark:border-white/10" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right side - 2 cards stacked */}
          <div className="lg:w-1/2 flex flex-col gap-6">

            <AnimatedCard delay={150} className="flex-1">
              <div className="bg-white dark:bg-fintech-800/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:bg-fintech-800 hover:border-fintech-yellow/20 transition-all duration-500 group flex items-start gap-6 relative overflow-hidden h-full">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-fintech-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-fintech-900 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:shadow-fintech-glow transition-all duration-300 relative z-10 shrink-0">
                  <img src={thumbPrintImg} alt="Security" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-fintech-yellow transition-colors duration-300">Safe & Security</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Advanced biometric encryption protects your transactions globally automatically.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fintech-yellow/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300} className="flex-1">
              <div className="bg-white dark:bg-fintech-800/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:bg-fintech-800 hover:border-fintech-yellow/20 transition-all duration-500 group flex items-start gap-6 relative overflow-hidden h-full">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-fintech-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-fintech-900 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:shadow-fintech-glow transition-all duration-300 relative z-10 shrink-0">
                  <img src={merchantImg} alt="Merchant Focus" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-fintech-yellow transition-colors duration-300">Merchant Focused</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Tools built specifically for sellers to maximize revenue and minimize churn.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fintech-yellow/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              </div>
            </AnimatedCard>

          </div>
        </div>

        {/* Row 2: 2 equal cards at the bottom */}
        <div className="flex flex-col md:flex-row gap-6">

          <AnimatedCard delay={450} className="flex-1">
            <div className="bg-white dark:bg-fintech-800/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:bg-fintech-800 hover:border-fintech-yellow/20 transition-all duration-500 group flex items-start gap-6 relative overflow-hidden h-full">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-fintech-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-fintech-900 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:shadow-fintech-glow transition-all duration-300 relative z-10 shrink-0">
                <img src={merchant2Img} alt="Analytics" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-fintech-yellow transition-colors duration-300">Smart Analytics</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Gather actionable insights from real-time data flow predicting future trends.</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fintech-yellow/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={600} className="flex-1">
            <div className="bg-white dark:bg-fintech-800/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:bg-fintech-800 hover:border-fintech-yellow/20 transition-all duration-500 group flex items-start gap-6 relative overflow-hidden h-full">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-fintech-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-fintech-900 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:shadow-fintech-glow transition-all duration-300 relative z-10 shrink-0">
                <img src={getPaidImg} alt="Get Paid" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-fintech-yellow transition-colors duration-300">Instant Payouts</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Access your funds immediately without waiting days for standard clearing.</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fintech-yellow/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>
          </AnimatedCard>

        </div>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fintech-yellow/30 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
    </div>
  )
}

export default Choose