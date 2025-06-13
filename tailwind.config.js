/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F8F5F2',        // Sample from index.css
        'brand-beige-light': '#FAF7F5', // Sample for hover states
        'brand-text-primary': '#2C2A28',  // Sample from index.css
        'brand-text-secondary': '#575451', // Custom for slightly lighter text, e.g. AboutUsSection
        'brand-neutral': '#BFBDBA',       // Sample from index.css
        'brand-coral': '#FF6B6B',         // Plan from index.css
        'brand-coral-light': 'rgba(255, 107, 107, 0.1)', // For focus rings (ContactForm)
        'brand-teal': '#005F60',          // Plan from index.css
        'brand-yellow': '#FFD166',        // Plan from index.css
        'brand-accent-light': '#F9EBE5',  // Sample from index.css
        'brand-stroke': 'rgba(0,0,0,0.08)', // Sample for borders (ContactSection form wrapper)
        'brand-gray-light': 'rgba(0,0,0,0.1)', // For form input borders (ContactForm)
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
        logoReveal: 'logoReveal 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        scrollDownIndicator: 'scrollDownIndicator 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        fadeInZoomIn: 'fadeInZoomIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        logoReveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDownIndicator: {
          '0%': { opacity: '0', transform: 'translate(-50%, -4px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate(-50%, 12px)' },
        },
        fadeInZoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}