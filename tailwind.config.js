/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#151f32',
          900: '#0f172a',
          950: '#020617',
        },
        brand: {
          purple: '#8b5cf6',
          red: '#b91c1c', // Darker red for better contrast
          blue: '#4f46e5'
        }
      }
    }
  },
  plugins: [],
}