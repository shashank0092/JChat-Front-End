/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xsm':{min:"200px",max:"500px"},
        'msm':'300px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px'
      },
      colors:{
        "custome-paper":"#D9D9D9",
        "chat-container":"#1A212E",
        "chat-child-container":"#2E3441",
        "chat-text":"#ced9f3"
      },
      fontFamily:{
        "some-type-mono":['Sometype Mono'],
        "sans":['monospace']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

