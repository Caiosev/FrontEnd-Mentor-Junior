import React from 'react'
import logo from '../images/logo.svg'
import icon1 from '../images/icon-document.svg'
import icon2 from '../images/icon-folder.svg'
import icon3 from '../images/icon-upload.svg'

export default function UploadComponent() {
  return (
    <div className='w-90% md:max-w-sm mx-4  rounded-tr-grande mt-32 md:mt-0 md:ml-32 md:flex-1 h-56 bg-darkblue'>
        <img className='w-36 h-11 mt-10 ml-10 mb-10' src={logo}></img>
        <div className='flex w-48 h-14 ml-10 place-content-evenly '>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-5 h-6 z-10' src={icon1}></img> 
            </div>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-6 h-5 z-10' src={icon2}></img> 
            </div>
            <div className='bg-moredarkblue flex items-center justify-center rounded-lg w-14'>
                <img className='w-6 h-4 z-10' src={icon3}></img> 
            </div>
        </div>
    </div>
  )
}
