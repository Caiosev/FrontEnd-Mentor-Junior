import React from 'react'
import * as S from './style'

export default function TextWithLearnMore({titulo,desc}) {
  return (
    <S.Container>
        <div className='content'>
            <h1>{titulo}</h1>
            <p>{desc}</p>
            <h2>LEARN MORE</h2>
        </div>
    </S.Container>
  )
}
