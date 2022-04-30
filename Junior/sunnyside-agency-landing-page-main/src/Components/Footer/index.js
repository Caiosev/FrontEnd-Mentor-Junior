import React from 'react'
import milk from '../../images/mobile/image-gallery-milkbottles.jpg'
import cone from '../../images/mobile/image-gallery-cone.jpg'
import orange from '../../images/mobile/image-gallery-orange.jpg'
import cubes from '../../images/mobile/image-gallery-sugar-cubes.jpg'
import * as S from './style'
import insta from '../../images/icon-instagram.svg'
import face from '../../images/icon-facebook.svg'
import pin from '../../images/icon-pinterest.svg'
import twt from '../../images/icon-twitter.svg'

export default function Footer() {
  return (
    <S.Container>
        <div className='gallery'>
            <img src={milk}></img>
            <img src={cone}></img>
            <img src={orange}></img>
            <img src={cubes}></img>
        </div>
        <div className='end'>
            <h1>sunnyside</h1>
            <div className='options'>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Projects</h2>
            </div>
            <div className='socials'>
                <img src={face}></img>
                <img src={insta}></img>
                <img src={twt}></img>
                <img src={pin}></img>
            </div>
        </div>
    </S.Container>
  )
}
