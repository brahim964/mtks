/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      colors: {
        bgbook: '#f9f8f6',
        textbook: '#2c2c2c',
        linkbook: '#2563eb',
        linkhover: '#1e40af',
      },
    },
  },
  plugins: [],
}
