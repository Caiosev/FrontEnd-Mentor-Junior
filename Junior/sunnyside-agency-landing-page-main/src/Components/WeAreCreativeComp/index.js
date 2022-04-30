import React from 'react'
import * as S from './style'
import bg from '../../images/mobile/image-header.jpg'

export default function WeAreCreativeComp() {
  return (

    <S.Container>
        <img src={bg}></img>
        <h1>WE ARE CREATIVES</h1>
        <div className='arrow'></div>
    </S.Container>
  )
}
