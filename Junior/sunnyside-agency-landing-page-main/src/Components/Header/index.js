import React from 'react'
import * as S from './style'
import logo from '../../images/logo.svg'
import menu from '../../images/icon-hamburger.svg'

export default function Header() {
  return (
    <S.Container>
        <img id='logo'src={logo}></img>
        <img id='menu'src={menu}></img>
    </S.Container>
  )
}
