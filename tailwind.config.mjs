/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // orange-500
        'primary-dark': '#EA580C', // orange-600
        'primary-light': '#FB923C', // orange-400
        secondary: '#1F2937', // gray-800
      },
    },
  },
  plugins: [],
}