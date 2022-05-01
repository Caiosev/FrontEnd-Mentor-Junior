import React from 'react'
import logo from '../images/logo.svg'
import icon1 from '../images/icon-document.svg'
import icon2 from '../images/icon-folder.svg'
import icon3 from '../images/icon-upload.svg'

export default function UploadComponent() {
  return (
    <div className='w-full mx-3  rounded-tr-grande mt-32 h-56 bg-darkblue'>
        <img className='w-36 h-11 mt-10 ml-10 mb-10' src={logo}></img>
        <div className='flex w-48 h-14 ml-10 place-content-evenly '>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-5 h-6 z-10' src={icon1}></img> 
            </div>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-7 h-6 z-10' src={icon2}></img> 
            </div>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-8 h-6 z-10' src={icon3}></img> 
            </div>
        </div>
    </div>
  )
}
