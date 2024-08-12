import React from 'react'
import Aos from 'aos'
import './Management.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
const Management = () => {
    useEffect(() => {
        Aos.init();
    }, []);

  return (
    <div className='bg'>
        <div>
            <h1 data-aos='fade-down' data-aos-duration='1000' className='text-center text-xl md:text-2xl font font-bold my-4 text-[#134B70]'>&#x269E; 3AR PARTNERS &#x269F;</h1>
            <h1 data-aos='fade-down' data-aos-duration='1500' className='text-center text-md md:text-2xl font'>&#x269B; We do better than rest, put us to test &#x269B;</h1>
        </div>
        <div className='flex flex-wrap justify-center mt-6'>
            <img data-aos='fade-down' data-aos-duration='1000' src="/photo1.webp" alt="/photo1.webp" />
            <img data-aos='fade-down' data-aos-duration='2500' src="/photo2.webp" alt="/photo2.webp" />
            <img data-aos='fade-down' data-aos-duration='3500' src="/photo3.webp" alt="/photo3.webp" />
            {/* <img data-aos='fade-down' data-aos-duration='2500' src="/photo4.webp" alt="/photo4.webp" />
            <img data-aos='fade-down' data-aos-duration='3500' src="/photo5.webp" alt="/photo5.webp" /> */}

        </div>
    </div>
  )
}

export default Management