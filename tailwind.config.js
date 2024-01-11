/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'light-green': '#3aafa9',
      'blackish': '#17252a',
      'dark-green': '#2b7a78',
      'greeny-blue': '#88D7D4',
      'whitish': '#feffff',
      'coral': '#FE7F82',
    },
    fontFamily: {
      contentFont: ['"Montserrat"'],
    },
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

