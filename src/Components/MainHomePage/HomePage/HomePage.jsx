import React, { useRef } from 'react'
import './Homepage.css'
import Homepage2 from './Homepage2'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Modal from 'react-modal';
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {


    // ----------------------------------------
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        budget: '',
        company: '',
        message: '',
    });

    const [formData1, setFormData1] = useState({
        name: '',
        email: '',
        phone: '',
        youtube: '',
        follower: '',
        instagram: '',
        insta_followers: '',
        social: '',
        social_followers: '',
        genre: '',
        message: '',
    });

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormData1({
            ...formData1,
            [name]: value,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        axios.post('https://backend-3ar-entertainment-codebase.onrender.com/influencer', formData1)
            .then((response) => {
                toast.success('Email sent successfully');
                setFormData1({
                    name: '',
                    email: '',
                    phone: '',
                    youtube: '',
                    follower: '',
                    instagram: '',
                    insta_followers: '',
                    social: '',
                    social_followers: '',
                    genre: '',
                    message: '',
                });
                closeModal1();
            })
            .catch((error) => {
                toast.error('Failed to send email');
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://backend-3ar-entertainment-codebase.onrender.com/brand', formData)
            .then((response) => {
                toast.success('Email sent successfully');
                closeModal();
                setFormData({
                    first_name: '',
                    last_name: '',
                    phone_number: '',
                    email: '',
                    budget: '',
                    company: '',
                    message: '',
                });

            })
            .catch((error) => {
                toast.error('Failed to send email');
            });
    };
    // -------------------------------------




    useEffect(() => {
        Aos.init()
    }, [])

    Modal.setAppElement('#root');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    // ------------------------------------------------------------------------
    const [modalIsOpen1, setModalIsOpen1] = useState(false);

    const openModal1 = () => {
        setModalIsOpen1(true);
    }

    const closeModal1 = () => {
        setModalIsOpen1(false);
    }



    // -------------------------------------------------------------------


    return (
        <>
            <div className=''>
                <div className=' w-[100%]   overflow-hidden '>
                    <div className=' w-[100%] h overflow-hidden flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse '>
                        <div className='w-[100%]  bg-[url("/influence.webp")]  bg-contain bg-no-repeat  lg:w-1/2 overflow-hidden bg-[#f6f6f6]'>
                            <img data-aos='fade-up' data-aos-duration='1000' src="/influence.webp" alt="" className='w-full lg:hidden md:hidden' />
                        </div>
                        <div className='w-[100%]  lg:w-1/2  bg-[#f6f6f6]  content-center md:h-[75vh] pr-6 pl-4 lg:pt-3'>
                            <h1 className='text-5xl lg:ml-14  font-bold text-black'>Boost your business with Influencer Marketing</h1>
                            <h1 className='para2 lg:ml-14'>
                                3AREntertainment is a premier Influencer Marketing Agency in India that bridges the gap between brands and their target audiences. By leveraging the impact of influencer marketing, they effectively communicate each brand’s unique story to its customers.</h1>
                            <div className='lg:ml-16 mt-10 flex-col sm:flex-col md:flex-row lg:flex  gap-16'>
                                <h1 className='bg-[#9B59B6] hover:bg-orange-500 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3' onClick={openModal}>I'm a Brand</h1>
                                <h1 className='bg-[#9B59B6] hover:bg-orange-500 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3 mt-4 md:mt-4 lg:mt-0' onClick={openModal1}>I'm an Influencer</h1>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------- */}
                    {/* ---------------Iam a Brand------------------ */}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Pluto Influencer Marketing"
                        className=''
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            },
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                padding: '20px',
                                overflowY: 'auto',
                                maxHeight: '90vh', // This will limit the height of the modal content
                            },
                        }}
                    >
                        <form onSubmit={handleSubmit} className='form-scroll'>
                            <h1 className='text-center text-2xl font-bold'>Do you want to discuss your Influencer Marketing needs?</h1>
                            <div className='flex flex-wrap gap-4 mt-10'>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <label className='font-medium'>
                                            First Name:
                                            <input type="text" name="first_name" placeholder='First Name' value={formData.first_name} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Last Name:
                                            <input type="text" name="last_name" placeholder='Last Name' value={formData.last_name} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Phone Number:
                                            <input type="number" name="phone_number" placeholder='Phone Number' value={formData.phone_number} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Email:
                                            <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <label className='font-medium'>
                                            Budget Overview:
                                            <input type="text" name="budget" placeholder='Budget Overview' value={formData.budget} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Company Name:
                                            <input type="text" name="company" placeholder='Company Name' value={formData.company} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Message:
                                            <input type="text" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button type="submit" value="Send" className='bg-[#9B59B6] hover:bg-orange-500 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3 mt-4'>Submit</button>
                                <button className='bg-orange-500 hover:bg-red-700 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3 mt-4' type="button" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </Modal>


                    {/* -----------------Iam a Influencer----------------- */}
                    <Modal
                        isOpen={modalIsOpen1}
                        onRequestClose={closeModal1}
                        contentLabel="Pluto Influencer Marketing"
                        className=''
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            },
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                padding: '20px',
                                overflowY: 'auto',
                                maxHeight: '90vh', // This will limit the height of the modal content
                            },
                        }}>
                        <form onSubmit={handleSubmit1} className='form-scroll'>
                            <h1 className='text-center text-2xl font-bold'>Let's Influence Together! Start your Journey today.</h1>
                            <div className='flex flex-col gap-4 mt-10 md:w-[75vw] justify-center items-center'>
                                {/* ---------------------------------- */}

                                <div className='flex flex-wrap gap-4  justify-between items-center'>
                                    <div>
                                        <label className='font-medium'>
                                            Name:
                                            <input type="text" name="name" placeholder='Name' value={formData1.name} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Email:
                                            <input type="text" name="email" placeholder='Email' value={formData1.email} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                    <div>
                                        <label className='font-medium'>
                                            Phone Number:
                                            <input type="number" name="phone" placeholder='Phone Number' value={formData1.phone} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                        </label>
                                    </div>
                                </div>
                                {/* ------------------------------------------------- */}
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-wrap justify-between items-center gap-4'>
                                        <div>
                                            <label className='font-medium'>
                                                Youtube Channel link :
                                                <input type="text" name="youtube" placeholder='Youtube Channel Link' value={formData1.youtube} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>
                                        <div>
                                            <label className='font-medium'>
                                                Number of followers :
                                                <input type="number" name="follower" placeholder='Numer of Followers' value={formData1.follower} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>
                                        <div>
                                            <label className='font-medium'>
                                                Instagram Profile link :
                                                <input type="text" name="instagram" placeholder='Instagram Link' value={formData1.instagram} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>
                                        <div>
                                            <label className='font-medium'>
                                                Number of followers :
                                                <input type="number" name="insta_followers" placeholder='Instagram Followers' value={formData1.insta_followers} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>

                                        </div>
                                        <div>
                                            <label className='font-medium'>
                                                Any social media handle:
                                                <input type="text" name="social" placeholder='Social Media Handle' value={formData1.social} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>
                                        <div>
                                            <label className='font-medium'>
                                                Number of followers:
                                                <input type="number" name="social_followers" placeholder='Social Media Followers' value={formData1.social_followers} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>

                                    </div>

                                    {/* ------------------- */}
                                    <div className='flex flex-col gap-4 '>

                                        <div className=''>
                                            <label className='font-medium'>
                                                Genre :
                                                <select name="genre" value={formData1.genre} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]'>
                                                    <option value="select" >Select Genre</option>
                                                    <option value="Fashion">Lifestyle</option>
                                                    <option value="Music">Beauty</option>
                                                    <option value="Food">Travel</option>
                                                    <option value="Fashion">Fashion</option>
                                                    <option value="Fitness&Wellness">Fitness & Wellness</option>
                                                    <option value="Gaming">Gaming</option>
                                                    <option value="Photgrapher">Photgrapher</option>
                                                    <option value="Singer">Singer</option>
                                                    <option value="Artist">Artist</option>
                                                    <option value="Dancer Life">Dancer Life</option>
                                                    <option value="Other">Other</option>

                                                </select>
                                            </label>
                                        </div>


                                        <div className='flex flex-col gap-4'>
                                            <label className='font-medium'>
                                                What we should already know about you?  :
                                                <textarea type="text" name="message" placeholder='Message' value={formData1.message} onChange={handleChange1} required className='w-full border-2 border-[#9B59B6] rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex  gap-4'>
                                <button type="submit" className='bg-[#9B59B6] hover:bg-orange-500 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3 mt-4'>Submit</button>
                                <button className='bg-orange-500 hover:bg-red-700 cursor-pointer px-4 rounded-lg text-white text-center text-xl py-3 mt-4' type="button" onClick={closeModal1}>Cancel</button>
                            </div>
                        </form>
                    </Modal>
                    {/* --------------responsive compleated upper side--------------- */}

                    {/* <div className='lg:flex gap-6  bg-[#f6f6f6] shadow-2xl pb-12 md:pt-10'>
                    <div className=' lg:w-1/2 p-4'>
                        <img data-aos="fade-right" data-aos-duration="5000" src="/3.webp" alt="" className='rounded-xl w-[600px] lg:ml-6 mt-4' />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="5000" className='lg:w-1/2 pt-5 px-5 content-center'>
                        <h1 className='font-bold font text-3xl text-orange-500 '>India's Top Influencer Marketing Agency</h1>
                        <br />
                        <p className='font '>Socio Influencer is India’s most trusted Influencer Marketing Agency that provides a platform to connect brands with influencers to create trailblazing marketing campaigns. Fuelled by the firm belief that empowering communication by turning marketing into honest social conversations is the best way to build memorable brands, we have our name behind some of the most popular and successful influencer marketing campaigns.
                        </p>
                        <br />
                        <p className='font'> We constantly monitor the dynamic social media environment and identify untapped opportunities for our brand partners. All our campaigns are carefully chalked out after extensive research and brainstorming, focusing on selling the products/services and the engagement aspect.
                        </p>
                    </div>
                </div> */}
                    <Homepage2 />
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default HomePage