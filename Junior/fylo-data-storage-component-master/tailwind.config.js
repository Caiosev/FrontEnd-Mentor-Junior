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
        'moredarkblue':'#0B122E',
        'verylightpink': '#FA9E98',
        'lightpink' : '#F95295' 
      },
      margin :{
        '88px' :'88px'
      },
      borderRadius:{
        'grande':'130px',
        'baloonMD': '0.75rem 0.75rem 0 0.75rem'
      }
    }
  }
}
