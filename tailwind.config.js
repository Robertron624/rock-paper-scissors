/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      // neutral colors
      dark: 'hsl(229, 25%, 31%)',
      score : 'hsl(229, 64%, 46%)',
      outline: 'hsl(217, 16%, 45%)',
      white: 'hsl(0, 0%, 100%)',

      // shape colors
      'scissors-start': 'hsl(39, 89%, 49%)',
      'scissors-end': 'hsl(40, 84%, 53%)',
      'paper-start': 'hsl(230, 89%, 62%)',
      'paper-end': 'hsl(230, 89%, 65%)',
      'rock-start': 'hsl(349, 70%, 56%)',
      'rock-end': 'hsl(349, 71%, 52%)',
      'lizard-start': 'hsl(261, 73%, 60%)',
      'lizard-end': 'hsl(261, 72%, 63%)',
      'cyan-start': 'hsl(189, 59%, 53%)',
      'cyan-end': 'hsl(189, 58%, 57%)',
      'option-background': 'hsl(270, 3%, 87%)',
      'placeholder': 'hsl(237, 49%, 15%)',
    },
    extend: {
      backgroundImage: {
        'triangle': 'url("/bg-triangle.svg")',
        'pentagon': 'url("/bg-pentagon.svg")',
      },
      fontFamily: {
        barlowSemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
    },
  },
},
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

