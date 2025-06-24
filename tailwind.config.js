/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'hover:scale-105',
    'hover: brightness-125',
    'transition-all',
    'duration-300',
    'ease-out',
    'transform',
  ],
  theme: {
    extend: {
        dropShadow: {
            "red-500" : "0 0 8px #ff4c4c",
            "orange-500" : "0 0 8px #ff9900",
            "yellow-500" : "0 0 8px #ffff33",
            "green-500" : "0 0 8px #33ff99",
            "blue-500" : "0 0 8px #33ccff",
            "purple-500" : "0 0 8px #cc66ff",
        },
        colors: {
            dark: "#0d1117",
            red: { 500: "#ff4c4c" },
            orange: { 500: "#ff9900" },
            yellow: { 500: "#ffff33" },
            green: { 500: "#33ff99" },
            blue: { 500: "#33ccff" },
            purple: { 500: "#cc66ff" },
        },
        keyframes: {
            pulseGlow: {
                '0%, 100%': { filter: 'brightness(0.8)' },
                '50%': { filter: 'brightness(1.3)' },
            },
        },
        animation: {
            pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        },
    },
  },
  plugins: [],
};
