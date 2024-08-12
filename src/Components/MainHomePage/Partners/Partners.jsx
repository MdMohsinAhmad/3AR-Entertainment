import React from 'react'
import './Partner.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Partners = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='w-[100%] py-2 shadow-2xl'>
            <h1 data-aos='fade-down' data-aos-duration='1000' className='brand text-center font-bold text-[30px] md:text-[45px] mt-6 text-[#134B70]'> Brands that trust us</h1>
            <div className="logos bg-[#F9F9F9] ">
                <div className="logos-slide  h-28 ">
                    <img src="logo3ar3.png" className='w-52 ' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                    <img src="logo3ar3.png" className='w-52' />
                </div>
            </div>
        </div>
    )
}

export default Partners