import {React, useState,useEffect} from 'react'
import * as S from './style'
import bgMobile from '../../images/mobile/image-header.jpg'
import bgDesk from '../../images/desktop/image-header.jpg'
import useWindowDimensions from '../../Hooks/useWindowDimension'


export default function WeAreCreativeComp() {

  const [bg,setBg] = useState()
  const width = useWindowDimensions()

  useEffect(() =>{
    if(width<1000){
      setBg(bgMobile)
    }else{
      setBg(bgDesk)
    }
  },[width])
  
  return (
  
    <S.Container>
        <img src={bg}></img>
        <h1>WE ARE CREATIVES</h1>
        <div className='arrow'></div>
    </S.Container>
  )
}
