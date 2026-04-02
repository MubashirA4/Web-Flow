/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fintech: {
          900: '#0B0F19',
          800: '#111827',
          700: '#1F2937',
          yellow: '#FFC173',
          glow: 'rgba(255, 193, 115, 0.4)'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-slide-up': 'fadeSlideUp 0.7s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,193,115,0)' },
          '50%': { boxShadow: '0 0 30px rgba(255,193,115,0.15)' },
        },
      }
    },
  },
  plugins: [],
}
