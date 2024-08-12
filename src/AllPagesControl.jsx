import React from 'react'
import HomePage from './Components/MainHomePage/HomePage/HomePage'
import Partners from './Components/MainHomePage/Partners/Partners'
import Management from './Components/MainHomePage/Management/Management'
import Navbar from './Components/Navbar/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
const AllPagesControl = () => {
   
    return (
        <>
            <Navbar />
            <Carousel />
            <HomePage />
            <Partners />
            <Management />
            <Footer />
        </>
    )
}

export default AllPagesControl