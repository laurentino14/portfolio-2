/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ee4055',
        dark: '#08070B',
        grayText: '#EEEEEE',
      },
      fontFamily: {
        biotif: ['Biotif', 'sans-serif'],
        neuzeit: ['Neuzeit', 'Biotif', 'sans-serif'],
        firacode: [
          'var(--font-firacode)',
          'monospace',
          'Consolas',
          'Monaco',
          'Andale Mono',
          'Ubuntu Mono',
        ],
      },
      backgroundImage: {
        gradientBG: '',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
