import React from 'react'

export default function PBarComponent() {
  return (
    <div className='mt-5  md:flex-1 md:mr-32 md:mt-12 rounded-xl h-44 w-90% bg-darkblue mx-4 text-white'>
        <p className='text-ts mx-9 mt-9 mb-4'>You've used <span className='font-bold'>815 GB</span> of your storage</p>
        
        <div class="w-80% mx-8 bg-moredarkblue rounded-full">
             <div className="bg-gradient-to-r from-verylightpink to-lightpink text-xs h-4 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full flex justify-end items-center	" style={{width:'81%'}}><figure class="block bg-white rounded-full h-3 w-3"></figure></div>
        </div>

        <div className='flex mx-8 mt-3 place-content-between'>
            <p className='font-bold'>0 GB</p>
            <p className='font-bold'>1000 GB</p>
        </div>

        <div className='md:after:border-solid md:after:border-t-white md:after:border-t-8 md:after:mt-88px md:after:border-x-transparent md:after:border-x-8 md:after:border-b-0 w-44 md:after:content-[""] h-20 md:absolute md:-mt-44  md:right-36 bg-white text-black rounded-xl md:rounded-baloonMD  flex justify-center items-center m-auto md:after:absolute md:after:ml-40'>
            <h1 className='text-3xl font-bold mr-3'>185</h1>
            <p className='text-xs text-gray-500'>GB LEFT</p>
        </div>
    </div>
  )
}
