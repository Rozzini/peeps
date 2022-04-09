module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-green': ['#0000ff', '#00FF00'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'indigo-purple-pink' : ['#3f51b5', '#9c27b0', '#e91e63'],
      },
      background: {
        'gray-50': '#F9FAFB',
        'gray-900':'#111827',
      },
      borders: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    extend: {
      
      fontFamily: {
        sans: ["Sans, Arial"],
        barcade: ["Barcade", "BarcadeNoBarBold-gzXq"],
      },
    },
  },
  plugins: [    
    require('tailwindcss-border-gradient-radius'),
    require("@tailwindcss/typography")
],
};
//'indigo-purple-pink' : ['#3f51b5', '#9c27b0', '#e91e63'],