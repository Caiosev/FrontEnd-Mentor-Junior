import React from 'react'
import * as S from './style'
import EmilyPhoto from '../../images/image-emily.jpg'
import JenniePhoto from '../../images/image-jennie.jpg'
import ThomasPhoto from '../../images/image-thomas.jpg'
import Clients from './Clients/Clients'

export default function Testemonials() {

    const person1 = {
        name:'Emily R.',
        text:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit',
        role:'Marketing Director'
    };

    const person2 = {
        name:'Thomas S.',
        text:"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience. ",
        role:'Chief Operating Officer'
    };

    const person3 = {
        name:'Jennie F.',
        text:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! ",
        role:'Business Owner'
    };


  return (
    <S.Container>
        <h1>CLIENT TESTIMONIALS</h1>
        <div className='clients'>
            <Clients  photo={EmilyPhoto} text={person1.text} name={person1.name} role={person1.role}/>
            <Clients  photo={ThomasPhoto} text={person2.text} name={person2.name} role={person2.role}/>
            <Clients  photo={JenniePhoto} text={person3.text} name={person3.name} role={person3.role}/>
        </div>
    </S.Container>
  )
}
