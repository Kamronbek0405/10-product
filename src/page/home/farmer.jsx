import React from 'react'
import FarmerImg from './farmer-img/Photo.png'
import Group1 from './farmer-img/Group1.png'
import Group2 from './farmer-img/Group2.png'

export const Farmer = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='w-[811px] h-[767]' src={FarmerImg} alt="" />
            <div className='ml-5'>
                <span className='font-mono text-green-500'>About Us</span>
                <h1 className='text-slate-600 font-medium text-2xl w-[300px]'>We Believe in Working
                    Accredited Farmers</h1>
                <p className='w-[600px] py-5'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.F</p>
                <div>
                    <div className='flex'>
                        <span className='w-[90px] h-[90px] rounded-lg bg-slate-100 flex items-center justify-center'><img src={Group1} alt="img" /></span>
                        <div className='ml-5'>
                            <h1 className='text-xl font-bold text-slate-800'>Organic Foods Only</h1>
                            <p className='w-[380px] text-gray-500 mt-2 ' >Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <span className='w-[90px] h-[90px] rounded-lg bg-slate-100 flex items-center justify-center'><img src={Group2} alt="img" /></span>
                        <div className='ml-5'>
                            <h1 className='text-xl font-bold text-slate-800'>Quality Standards</h1>
                            <p className='w-[380px] text-gray-500 mt-2 ' >Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <button className='flex w-[200px] h-[69px] rounded-xl items-center justify-center text-white bg-slate-700 mt-10'>Shop Now 
                <span className='w-[18px] h-[18px] bg-slate-600 rounded-full flex items-center justify-center ml-3'><svg width={9} height={8} viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.97641 1.12891L8.37095 4.19342L4.97641 7.25794M7.89949 4.19342H1.01611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                </span></button>
            </div>
        </div>
    )
}
