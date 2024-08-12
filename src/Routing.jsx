import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './AllPagesControl'
import ContactUs from './Components/ContactUs/ContactUs'
import About from './Components/About/About'
import Dashboard from './Components/Dashboard/Dashboard'
import AddPicture from './Components/AddPicture/AddPicture'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import AddArtist from './Components/AddArtist/AddArtist'
import Artist from './Components/Artist/Artist'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/artist' element={<Artist />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/picture' element={<AddPicture />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/addartist' element={<AddArtist/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing