import React, { useEffect, useState } from 'react';
import './About.css';
import axios from 'axios';
import { db } from '../Firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar/Navbar';

const About = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'services'));
            const uploadsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUploads(uploadsData);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);

  return (
    <>
    <Navbar/>
      <div>
        <img className='w-[100%] h-[170px] md:h-[50%]' src='/aboutus.png' alt='' />
      </div>
      <div className='flex flex-col justify-center md:flex-row md:justify-evenly p-6'>
        <div className='md:w-[50%] flex flex-col justify-center'>
          <h1 className='font-bold text-3xl text-[#134B70]'>TAKE YOUR BUSINESS TO THE NEXT LEVEL</h1>
          <p className='mt-[30px] text-lg'>
            We are a leading ROI-driven influencer marketing agency that has engineered some of the most successful campaigns by uniting brands with top influencers, content creators, and artists. A team of creative geniuses, we combine innovation with data to design, execute and optimize influencer campaigns, thereby leaving a significant footprint in the market.
          </p>
          <p className='mt-[20px] text-lg'>
            Ready to take the back-and-forth off your plate? Leave the end-to-end management of your campaigns to us!
          </p>
          <p className='mt-[20px] text-lg'>
            Since our inception, we have helped over 200+ brands with their amplification and marketing. Our rich experience in the domain makes us an ideal choice for businesses of all sizes.
          </p>
        </div>
        <div>
          <img className='hidden md:block lg:block w-[300px] h-[350px]' src='./about2.webp' alt='' />
        </div>
      </div>
      <div className='bg-green-100'>
        <div className='flex justify-evenly p-6'>
          <div>
            <img className='hidden md:block lg:block w-[300px] h-[300px]' src='./mission.webp' alt='' />
          </div>
          <div className='md:w-[50%] flex flex-col justify-center'>
            <h1 className='font-bold text-3xl text-[#134B70]'>MISSION</h1>
            <p className='mt-[25px] text-lg'>
              3AR ENTERTAINMENT is a holistic Influencer Marketing Agency that helps brands conquer the digital space with the right talent. We are a catalyst for brands who want to achieve their business goals by leveraging the power of effective marketing coupled with social media.
            </p>
          </div>
        </div>
        <div className='flex justify-evenly p-6'>
          <div className='md:w-[50%] flex flex-col justify-center'>
            <h1 className='font-bold text-3xl text-[#134B70]'>VISION</h1>
            <p className='mt-[25px] text-lg'>
              Our vision fuels us constantly and can be summarized in our tagline “Influencing the World”. While it may sound like a simple goal, it can only be achieved by ensuring the success of our native and global clients for whom we work passionately.
            </p>
          </div>
          <div>
            <img className='hidden md:block lg:block w-[300px] h-[300px]' src='./vision.webp' alt='' />
          </div>
        </div>
      </div>
      {/* OUR VALUES */}
      <div className='bg-[#F2F5FF]'>
                <h1 className='text-center font-bold text-4xl pt-[30px] text-[#134B70]'>Our Services</h1>
                <div className='flex flex-wrap justify-center'>
                    {uploads.map((ln, index) => (
                        <div className='Ring testimonial-card m-6' key={index}>
                            <div className='author' key={ln._id}>
                                <img src={ln.imageUrl} alt={ln.imageUrl} className='author-image' />
                                <div className='author-details'>
                                    <div className='author-name text-lg mt-4 text-white'>{ln.name}</div>
                                    <div className='author-title text-lg mt-4 text-white'>{ln.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      <Footer />
    </>
  );
};

export default About;
