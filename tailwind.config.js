/** @type {import('tailwindcss').Config} */
// default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: "rgb(var(--color-main) / <alpha-value>)",
        'main-dimmed': "rgb(var(--color-main-dimmed) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
      },
    },
    screens: {
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
