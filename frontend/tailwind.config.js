/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'junglegreen': '#2aaa8a',
        'atomicorange': 'de8f6e',
        'blackolive': '#3d3b30',
        'vanilla': 'f8f4a6',
        'beige': 'e9edde',
        'mintcream': 'f7fff6',
        'primarycol': '#65605f',
        'secondarycol': '#fc4c6f',
        'secondarylight': '#fe6a88'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'wiggle': 'wiggle 1s linear infinite',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite"
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}