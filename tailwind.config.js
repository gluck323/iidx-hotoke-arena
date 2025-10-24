/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Classic desaturated color palette
        'iidx-black': '#0A0A0A',
        'iidx-gray-dark': '#1A1A1A',
        'iidx-gray': '#2A2A2A',
        'iidx-blue': '#4A6FA5',        // Desaturated blue
        'iidx-magenta': '#8B5A7D',     // Desaturated magenta/purple
        'iidx-gold': '#B89968',        // Desaturated gold
        'iidx-text-gray': '#A0A0A0',
        'classic-navy': '#2C3E50',     // Classic navy
        'classic-slate': '#34495E',    // Classic slate
        'classic-brown': '#6B5D53',    // Classic brown
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
