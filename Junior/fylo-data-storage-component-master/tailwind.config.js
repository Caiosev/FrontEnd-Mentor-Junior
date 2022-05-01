module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgMobile':"url(/src/images/bg-mobile.png)"
      },
      colors:{
        'darkblue':'#1E2C69',
        'moredarkblue':'#0B122E'
      },
      borderRadius:{
        'grande':'130px'
      }
    }
  }
}
