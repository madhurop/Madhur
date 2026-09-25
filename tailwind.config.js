/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F5F5F4',
          100: '#E4E4E2',
          300: '#A3A3A0',
          400: '#8A8A87',
          500: '#6B6B68',
          700: '#3A3A38',
          800: '#262624',
          850: '#1A1A18',
          900: '#141412',
          950: '#0A0A09',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        ledger:
          'repeating-linear-gradient(to bottom, transparent, transparent 47px, rgba(255,255,255,0.035) 47px, rgba(255,255,255,0.035) 48px)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-16px,-10px)' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
