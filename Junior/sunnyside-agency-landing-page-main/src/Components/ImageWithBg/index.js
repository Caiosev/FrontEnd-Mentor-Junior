import React from 'react'
import * as S from './style'



export default function ImageWithBg({bg,titulo,desc,textColor}) {
  
  return (
    <S.Container bg={`${bg}`} textColor={textColor}>
        <div className='content'>
            <h1>{titulo}</h1>
            <p>{desc}</p>
        </div>
    </S.Container>
  )
}
