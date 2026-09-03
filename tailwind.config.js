/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070E1A',
          900: '#0A1628',
          800: '#101F38',
          700: '#172B4D',
        },
        blue: {
          accent: '#1E6FD9',
        },
        green: {
          accent: '#2FA84F',
        },
        amber: {
          accent: '#F2B84B',
        },
        ink: '#0A1628',
        paper: '#F5F7FA',
        mute: '#64748B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #1E6FD9 0%, #2FA84F 100%)',
        'mesh': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(30,111,217,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(47,168,79,0.28), transparent 60%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(242,184,75,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
}
