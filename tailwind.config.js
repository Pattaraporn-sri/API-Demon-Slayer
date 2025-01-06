/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        NewRocker : ["New Rocker","serif"],
        Yatra: ["Yatra One","serif"]
      }
    },
    backgroundImage:{
      Demon1: ["url('https://cdnb.artstation.com/p/assets/images/images/025/746/917/large/carlos-gonzalez-demon-slayer-01.jpg?1586802575')"]
    }
  },
  plugins: [],
};
