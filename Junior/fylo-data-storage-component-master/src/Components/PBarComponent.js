import React from 'react'

export default function PBarComponent() {
  return (
    <div className='mt-5 rounded-xl h-44 w-90% bg-darkblue mx-4 text-white'>
        <p className='text-ts mx-9 mt-9 mb-4'>You've used <span className='font-bold'>815 GB</span> of your storage</p>
        
        <div class="w-80% mx-8 bg-gray-200 rounded-full">
             <div className="bg-red-600 text-xs h-4 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:'81%'}}></div>
        </div>

        <div className='flex mx-8 mt-3 place-content-between'>
            <p className='font-bold'>0 GB</p>
            <p className='font-bold'>1000 GB</p>
        </div>

        <div className='w-44 h-20 bg-white text-black rounded-xl flex justify-center items-center m-auto'>
            <h1 className='text-3xl font-bold mr-3'>185</h1>
            <p className='text-xs text-gray-500'>GB LEFT</p>
        </div>
    </div>
  )
}
