import React from 'react'

import './hero.css'

export const Hero = () => {
    return (
        <div className='w-[100%] h-[150vh] flex flex-col justify-between mt-5'>
            <div className='hero-title flex items-center  '>
                <div className='ml-40'>
                    <span className='font-mono text-green-500 font-medium'>100% Natural Food</span>
                    <h1 className='text-4xl font-medium text-slate-700 w-[263px] h-20 py-2'>Choose the best
                        healthier way
                        of life</h1>
                    <button className='w-[200px] h-[70px] my-20 rounded-xl flex items-center bg-yellow-400 justify-center'>Explore Now
                        <span className='w-[19px] h-[19px] ml-3 bg-slate-800 rounded-full flex items-center justify-center'><svg width={9} height={8} viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>



                        </span></button>
                </div>
            </div>
            <div className='flex items-center justify-around mb-9 ' >
                <div className='hero__card flex items-center '>
                    <div className='ml-16'>
                    <span className='font-mono text-white'>Natural!!</span>
                    <h1 className='py-3 text-white text-2xl font-medium w-[180px]'>Get Garden Fresh Fruits</h1>
                    </div>
                </div>
                <div className='hero__card2 flex items-center'>
                   <div className='ml-16'>
                   <span className='font-mono text-green-500'>Offer!!</span>
                    <h1 className='font-medium text-2xl w-[155px]'>Get 10% off
                        on Vegetables</h1>
                   </div>
                </div>
            </div>
        </div>
    )
}
