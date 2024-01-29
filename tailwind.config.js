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
      }
    },
  },
  plugins: [],
}

