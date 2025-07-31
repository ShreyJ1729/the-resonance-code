/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Therapeutic color system
    'bg-yellow-500', 'bg-yellow-50', 'bg-yellow-100', 'text-yellow-600', 'border-yellow-300', 'ring-yellow-200',
    'bg-blue-500', 'bg-blue-50', 'bg-blue-100', 'text-blue-600', 'border-blue-300', 'ring-blue-200',
    'bg-amber-500', 'bg-amber-50', 'bg-amber-100', 'text-amber-600', 'border-amber-300', 'ring-amber-200',
    'bg-purple-500', 'bg-purple-50', 'bg-purple-100', 'text-purple-600', 'border-purple-300', 'ring-purple-200',
    'bg-emerald-500', 'bg-emerald-50', 'bg-emerald-100', 'text-emerald-600', 'border-emerald-300', 'ring-emerald-200',
    'bg-indigo-500', 'bg-indigo-50', 'bg-indigo-100', 'text-indigo-600', 'border-indigo-300', 'ring-indigo-200',
    // Legacy colors
    'bg-primary-500', 'bg-primary-500/10', 'bg-primary-500/20', 'text-primary-500', 'border-primary-500/30', 'ring-primary-500/20',
    'bg-primary-600', 'bg-primary-600/10', 'bg-primary-600/20', 'text-primary-600', 'border-primary-600/30', 'ring-primary-600/20',
    'bg-secondary-500', 'bg-secondary-500/10', 'bg-secondary-500/20', 'text-secondary-500', 'border-secondary-500/30', 'ring-secondary-500/20',
    'bg-secondary-600', 'bg-secondary-600/10', 'bg-secondary-600/20', 'text-secondary-600', 'border-secondary-600/30', 'ring-secondary-600/20',
    'bg-coral-500', 'bg-coral-500/10', 'bg-coral-500/20', 'text-coral-500', 'border-coral-500/30', 'ring-coral-500/20',
    'bg-coral-600', 'bg-coral-600/10', 'bg-coral-600/20', 'text-coral-600', 'border-coral-600/30', 'ring-coral-600/20',
    // Translation classes for sliding navigation
    '-translate-x-1/3', '-translate-x-2/3',
  ],
  theme: {
    extend: {
      colors: {
        // Body Code inspired color palette
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d4',
          900: '#4a02ad',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}