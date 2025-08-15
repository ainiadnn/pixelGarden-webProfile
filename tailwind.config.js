/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js",
    "./style/**/*.css"
  ],
   safelist: [  'fixed',
  'bottom-6',
  'right-6',
  'z-50',
  'bg-gardenGreen',
  'text-darkSoil',
  'hover:bg-gardenPink',
  'transition',
  'rounded',
  'shadow',
  'hidden', 'block', // penting kalau kamu toggle elemen
  'opacity-0', 'opacity-100',
  'translate-y-8', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out',
  'duration-[5000ms]',
  'duration-1000',
  'backface-hidden',
  'transform-style-preserve-3d',
  'transform-rotate-y-180',
  'perspective-1000',
  'backface-hidden',
  'absolute',
  'inset-0',
  '-translate-x-full',
  'translate-x-0',
  'transition-transform'
],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: '0' },
        },
        fadein: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        pulsequick: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeout: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
    },
      },
      animation: {
            fadein: 'fadein 0.8s ease-out ease-in forwards',
            pulsequick: 'pulsequick 0.4s ease-in-out',
            fadeout: 'fadeout 0.5s ease-in forwards',
            typing: 'typing 2s steps(30, end) forwards',
            blink: 'blink 1s step-end infinite',
            'bounce-once': 'bounce 0.6s ease-in-out 1',
            'fadein-delay': 'fadeIn 1s ease-out 1.5s forwards',
      },    
      fadein: {
      '0%': { opacity: '0', transform: 'scale(0.8)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
      colors: {
        gardenPink: '#FFB7C5',
        gardenGreen: '#B2E2B2',
        darkSoil: '#1a1a1a',
        softCream: '#FFF7F0',
        sunflower: "#f6e27f",
        gardenGreen: "#7ec850",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive']
      }
    },
  },
  plugins: [],
}
