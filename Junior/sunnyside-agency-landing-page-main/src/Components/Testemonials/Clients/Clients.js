import React from 'react'
import * as S from './style'

export default function Clients({photo,text,name,role}) {
  return (
    <S.Container>
      <img src={photo}></img>
      <p>{text}</p>
      <h2>{name}</h2>
      <h3>{role}</h3>
    </S.Container>
  )
}
