/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SEASON2 poster inspired color palette
        'iidx-black': '#000000',       // Pure black background
        'iidx-gray-dark': '#1A1A1A',
        'iidx-gray': '#2A2A2A',
        'iidx-red': '#DC143C',         // Crimson red (main accent)
        'iidx-red-light': '#FF6B6B',   // Lighter red for hover states
        'iidx-red-dark': '#B22222',    // Darker red
        'iidx-gold': '#FFD700',        // Gold for special highlights
        'iidx-text-gray': '#A0A0A0',
        'classic-slate': '#34495E',    // Keep for subtle elements
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
