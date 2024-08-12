import React from 'react'
import './Homepage2.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Homepage2 = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='py-10 '>
                <h1 className='heading text-center text-3xl mt-5 font-bold text-[#134B70]' data-aos='fade-down' data-aos-duration='1000'>Our Influencer Marketing Solutions</h1>
                <h1 className='heading text-center py-5' data-aos='fade-down' data-aos-duration='1200'>We manage all your Influencer Marketing requirements</h1>
            </div>
            <div className="w-[100%] container ">
                <div data-aos='fade-down' data-aos-duration='1000' className="card  bg-[#F2F5FF] flex flex-col justify-between items-center">
                    <h3 className='font-bold text-lg'>Youtube Influencer Marketing</h3>
                    <img src="/yt1.png" alt="YouTube Influencer Marketing" className="icon w-56 " />
                    <p className=''>
                        With more than 2.1 billion users on YouTube and multiple video formats, it is most likely to become a leading video consumption platform by 2025 and offers brands more opportunities for integration.
                    </p>
                </div>

                <div data-aos='fade-down' data-aos-duration='2000' className="card bg-[#FFF3E5] flex flex-col justify-between items-center">
                    <h3 className='font-bold text-lg'>Insta Influencer Marketing</h3>
                    <img src="/yt2.png" alt="Instagram Influencer Marketing" className="icon w-56" />
                    <p className=''>
                        Statista ranked Instagram as India's most popular platform for influencer marketing in 2021, with billions of people creating highly engaging content on the platform to reach a large audience.
                    </p>
                </div>
                <div data-aos='fade-down' data-aos-duration='3000' className="card bg-[#F2F5FF] flex flex-col justify-between">
                    <h3 className='font-bold text-lg'>Regional Influencer Marketing</h3>
                    <img src="/yt3.png" alt="Regional Influencer Marketing" className="icon " />
                    <p className=''>
                        In India, more than half of internet users access social media content in their native languages. To appeal to vernacular languages and broaden their brand reach, brands have begun to invest in regional Influencers.
                    </p>
                </div>

                <div data-aos='fade-down' data-aos-duration='1000' className="card bg-[#FFF3E5] flex flex-col justify-between items-center">
                    <h3 className='font-bold text-lg'>Brand Placement</h3>
                    <img src="/yt5.png" alt="Instagram Influencer Marketing" className="icon w-56" />
                    <p className=''>
                        Brand placements entail an advertising space or mentions from actors about particular products or services in a movie, show, music video, etc. There are various ways of brand integration in films and TV shows.      </p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className="card bg-[#F2F5FF] flex flex-col justify-between items-center">
                    <h3 className='font-bold text-lg'>Celebrity Marketing</h3>
                    <img src="/yt7.png" alt="Instagram Influencer Marketing" className="icon w-56" />
                    <p className=''>
                        Celebrities have always made a remarkable impact. One of the quickest and easiest ways for businesses to establish brand associations in the minds of consumers is to use a recognized face.      </p>
                </div>
                <div data-aos='fade-down' data-aos-duration='3000' className="card bg-[#FFF3E5] flex flex-col justify-between items-center">
                    <h3 className='font-bold text-lg'>Integrated Services</h3>
                    <img src="/yt6.png" alt="Instagram Influencer Marketing" className="icon w-56" />
                    <p className=''>
                        Get all of the influencer marketing solutions at Socio Influencer–your one-stop for all kinds of influencer marketing services.                </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage2