/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IIDX inspired color palette
        'iidx-black': '#0A0A0A',
        'iidx-gray-dark': '#1A1A1A',
        'iidx-gray': '#2A2A2A',
        'iidx-blue': '#00D9FF',
        'iidx-magenta': '#FF006E',
        'iidx-gold': '#FFD700',
        'iidx-text-gray': '#A0A0A0',
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'sans': ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
