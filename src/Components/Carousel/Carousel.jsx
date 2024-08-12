import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Ensure you have this CSS file for styling

const Carousel = () => {
    const items = [
        { img: '/img1.jpg' },
        { img: '/img2.png' },
        { img: '/img3.webp' }
    ];
    const logo = [
        { image: '/logo3.jpg' },
        { image: '/logo4.webp' },
        { image: '/logo5.png' },
        { image: '/logo6.jpeg' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(interval); // Cleanup on component unmount or autoSlide change
        }
    }, [autoSlide, items.length]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
        // setAutoSlide(false); // Pause auto-slide when user manually changes the slide
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
        // setAutoSlide(false); // Pause auto-slide when user manually changes the slide
    };

    return (
        <div id="carouselExampleIndicators" className="carousel  slide">
            <ol className="carousel-indicators">
                {items.map((_, index) => (
                    <li
                        key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={currentIndex === index ? 'active' : ''}
                    ></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
                    >
                        <img className="d-block w-100" src={item.img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior of the link
                    prevSlide();
                }}
            >
                <span className="carousel-control-prev-icon w-[36px]" aria-hidden="true">&#x2190;</span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior of the link
                    nextSlide();
                }}
            >
                <span className="carousel-control-next-icon w-[36px] " aria-hidden="true">&#x2192;</span>
                <span className="sr-only ">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
