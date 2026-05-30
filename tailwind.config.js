/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#EBEBE9',
        purple: '#6215ED',
        slate: '#3A3049',
        ink: '#1C1C1C',
        carddark: '#2C2C2C',
        graymid: '#8C8C8C',
        graylight: '#B8B8B8',
        chip: '#D9D9D9',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        darker: ['"Darker Grotesque"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Anonymous Pro"', 'monospace'],
      },
      maxWidth: {
        page: '1280px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wordswap: {
          '0%, 42%': { transform: 'translateY(-1.64em)' },
          '50%, 92%': { transform: 'translateY(-0.82em)' },
          '100%': { transform: 'translateY(0)' },
        },
        wordwidth: {
          '0%, 42%': { width: '1.164em' },
          '50%, 92%': { width: '1.536em' },
          '100%': { width: '1.164em' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        wordswap: 'wordswap 4s ease-in-out infinite',
        wordwidth: 'wordwidth 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
