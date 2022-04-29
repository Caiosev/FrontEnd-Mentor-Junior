import React, { useState } from 'react'
import * as S from './style'

export default function IlustratorComponent({image,titulo,p,bgTop,bgBottom}) {

  window.addEventListener('resize', resize);
  const [marginTop,setMarginTop] = useState(0)
  const [marginBtn,setMarginBtn] = useState(0)

  function resize() {

    if (window.innerWidth < 1000) {

        console.log('window.innerWidth < 700');
      setMarginTop(100)
      setMarginBtn(80)
    }
}

  return (
    <>
      <S.Bg className='bgs' id='bgTop'src={bgTop} style={{marginTop:`${marginTop}px`}}></S.Bg>
        <S.Container>
        <S.Content>
            <img id='ilustration' src={image}></img>
            <h1>{titulo}</h1>
            <p>{p}</p>
        </S.Content>
      </S.Container>
      <S.Bg className='bgs' id='bgBottom' style={{marginBottom:`${marginBtn}px`}} src={bgBottom}></S.Bg>
    </>
  )
}
