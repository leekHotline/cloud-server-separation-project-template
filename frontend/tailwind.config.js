/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0 { opacity: '0' }, '100 { opacity: '1' } },
        slideUp: { '0 { opacity: '0', transform: 'translateY(30px)' }, '100 { opacity: '1', transform: 'translateY(0)' } },
        float: { '0': { transform: 'translateY(0px)' }, '50 { transform: 'translateY(-20px)' } },
      },
    },
  },
  plugins: [],
}
