import React from 'react'
import "./Artist.css"
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar/Navbar.jsx'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase.js';

const Artist = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'uploads'));
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

  if (loading) {
    return <div className='flex justify-center mt-[70%] md:mt-[20%]'>
    <div className="semicircle w-[100px] md:w-[200px] h-[100px] md:h-[250px] ">
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>;
  }



  const Blogs = [
    {
      img: '/3.webp',
      heading: 'Top 5 Indian Gaming YouTubers 2020',
      paragraph: 'Today YouTube is one most entertaining and top video search engine platform in the world. As of May 2019, more than 500 hours of video content are uploaded to YouTube every minute, based on reported quarterly advertising revenue; YouTube is estimated to have US$15 billion in annual revenues. Out of 4/10 Smartphone users are playing […]'
    },
    {
      img: '/2.webp',
      heading: 'Influencing Audiences with Sustainable Living Through Eco-Friendly Influencers',
      paragraph: 'Eco-friendly influencers are emerging as beacons of positive change in this digital era. These eco-conscious individuals are at the forefront of a movement, advocating for a sustainable and eco-friendly way of life. From reducing waste to choosing eco-friendly products, they use their online platforms to spread awareness and offer practical tips. As we delve into […]'
    },
    {
      img: '/4.jpeg',
      heading: 'Dominate your niche with Influencer Marketing',
      paragraph: 'Unlock the keys to dominating your niche using influencer marketing. Elevate your brand’s presence and dominate your niche with influencer marketing. Discover how to seize control of your niche through influencer marketing strategies. Master the art of dominating your niche with powerful influencer marketing tactics. Dominate your niche with influencer marketing by strategically leveraging the […]'
    },
    ,
    {
      img: '/2.webp',
      heading: 'Influencing Audiences with Sustainable Living Through Eco-Friendly Influencers',
      paragraph: 'Eco-friendly influencers are emerging as beacons of positive change in this digital era. These eco-conscious individuals are at the forefront of a movement, advocating for a sustainable and eco-friendly way of life. From reducing waste to choosing eco-friendly products, they use their online platforms to spread awareness and offer practical tips. As we delve into […]'
    },
    {
      img: '/3.webp',
      heading: 'Top 5 Indian Gaming YouTubers 2020',
      paragraph: 'Today YouTube is one most entertaining and top video search engine platform in the world. As of May 2019, more than 500 hours of video content are uploaded to YouTube every minute, based on reported quarterly advertising revenue; YouTube is estimated to have US$15 billion in annual revenues. Out of 4/10 Smartphone users are playing […]'
    },
    {
      img: '/4.jpeg',
      heading: 'Dominate your niche with Influencer Marketing',
      paragraph: 'Unlock the keys to dominating your niche using influencer marketing. Elevate your brand’s presence and dominate your niche with influencer marketing. Discover how to seize control of your niche through influencer marketing strategies. Master the art of dominating your niche with powerful influencer marketing tactics. Dominate your niche with influencer marketing by strategically leveraging the […]'
    }

  ]
  return (
    <>
      <Navbar />
      <div className='w-[100%] mt-[82px]'>
        <div>
          <img className='w-[100%] h-[170px] md:h-[50%]' src="/blog.png" alt="" />
        </div>
        <div>
          <div className='flex flex-wrap justify-center'>
            {uploads.map((ln, index) => {
              return (
                <div className='blogContent p-8 m-8 flex flex-col' key={index}>
                  <img src={ln.imageUrl} alt="" />
                  <h1 style={{ fontSize: "40px", padding: "8px" }}>{ln.title}</h1>
                  <p style={{ fontSize: "20px", padding: "8px" }}>{ln.description}

                  </p></div>)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Artist



