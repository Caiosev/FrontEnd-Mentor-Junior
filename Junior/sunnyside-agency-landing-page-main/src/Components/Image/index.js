import React from 'react'
import * as S from './style'
export default function ImageComp({image}) {
  return (
    <S.Container>
        <img src={image}></img>
    </S.Container>
  )
}
