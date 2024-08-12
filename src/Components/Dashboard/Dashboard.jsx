import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import panda from '../../../public/cutepanda.avif'
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../Firebase.js';


const Dashboard = () => {
  const Navigate = useNavigate()
  const [moveUp, setMoveUp] = useState('0px')
  const [imgPOsition, setImgPosition] = useState('absolute')
  const [pandaPosition, setPOsition] = useState('')
  const [moveX, setMoveX] = useState('0px')
  const [bg, setBg] = useState()
  const [opacity, setOpacity] = useState(1)

  const [loginToken, setLoginToken] = useState('')
  // console.log('-->',loginToken)
  const LoginToken = async () => {
    let TokenFound = await localStorage.getItem('Token')
    if (TokenFound) {
      setLoginToken(TokenFound)
    }
  }

  useEffect(() => {
    LoginToken()
  })
  const pandaonHover = {
    backgroundImage: `url(${panda})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const pandaleaveHover = {
    background: 'white'

  }
  const [loginstate, setLoginState] = useState(false)
  // HandleLogin Enter & Leave
  const handleEnter = () => {
    setMoveUp('-145px')
    setBg(pandaonHover)
    setOpacity(0)
    setLoginState(true)
    // setImgPosition('absolute')
    // setPOsition('')
    // setMoveX('510px')
  }
  const handleLeave = () => {
    setLoginState(false)
    setMoveUp('0px')
    setBg(pandaleaveHover)
    setPOsition('absolute')
    setImgPosition('')
    setOpacity(1)
    setBg()
    // setMoveX('0px')
  }

  // Handle Register Enter & Leave

  const [opacityRegister, setOpacityRegister] = useState(1)
  const [moveUpRegister, setMoveUpRegister] = useState('0px')

  const handleRegister = () => {
    setOpacityRegister(0)
    setMoveUpRegister('-145px')
  }
  const handleRegisterLeave = () => {
    setOpacityRegister(1)
    setMoveUpRegister('0px')

  }

  //Handle add picture
  const [moveUpPicture, setMoveUpPicture] = useState('0px')

  const handlePictureEnter = () => {
    setOpacityRegister(0)
    setMoveUpPicture('-145px')
  }
  const handlePictureLeave = () => {
    setOpacityRegister(1)
    setMoveUpPicture('0px')
  }
  //Handle add Artist
  const [moveUpArtist, setMoveUpArtist] = useState('0px')

  const handleArtistEnter = () => {
    setOpacityRegister(0)
    setMoveUpArtist('-145px')
  }
  const handleArtistLeave = () => {
    setOpacityRegister(1)
    setMoveUpArtist('0px')
  }

  // Sign OUT


  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success('Logged Out')
      Navigate('/login')
      localStorage.setItem('Token', '')
    }).catch((error) => {
      toast.warning('An Error Occured')
    });
  }

  return (
    <>
      <div className='back w-[100%] h-screen ' >
          {/* <h1 className='font-bold text-2xl'>3AR Entrtnm</h1> */}
          <div className='flex justify-between items-center'>
          <div >
            <Link to='/'><img className='w-[100px] md:w-[150px]' src="./3arE.png" alt="" /></Link>
          </div>
          <div className='text-white text-center font-bold text-2xl md:text-4xl ' >&#8517;ASH&#x212C;OARD</div>
          <div>{loginToken !== '' ?<button onClick={handleLogout} className="button-86 w-[30px] md:w-[120px] h-[15px] md:h-[30px] mr-[15px]" role="button">LogOut</button>: null}</div>
        </div>
        <div className='flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] justify-center items-center text-center mt-[7%]' >

          {loginToken === '' ? <div>
            <Link to='/login'><h2 onMouseEnter={handleEnter} style={{ position: 'absolute' }} onMouseLeave={handleLeave} className='  log w-[200px] h-[200px] bg-gray-400 m-4 rounded flex flex-col justify-center font-bold'>Login</h2></Link>
            <img className=' panda ' style={{ width: '200px', marginTop: moveUp, height: '200px', marginLeft: '16px' }} src="/happypanda.png" alt="" />
          </div> : null}

          <div>
            <Link to='/registration'><h2 onMouseEnter={handleRegister} onMouseLeave={handleRegisterLeave} className='log w-[200px] ml-[65px] absolute h-[200px] bg-gray-400 m-4  rounded flex flex-col justify-center font-bold'>Registration</h2></Link>
            <img className='  panda  ' style={{ width: '200px', height: '200px', marginLeft: '65px', marginRight: '40px', marginTop: moveUpRegister, }} src="/happypanda.png" alt="" />
          </div>

          <div>
            <Link to='/picture'> <h2 onMouseEnter={handlePictureEnter} onMouseLeave={handlePictureLeave} className='absolute log w-[200px] h-[200px] bg-gray-400 m-4 rounded flex flex-col justify-center font-bold' style={{}}>Add Services</h2></Link>
            <img className='  panda  ' style={{ width: '200px', height: '200px', marginLeft: '12px', marginTop: moveUpPicture }} src="/happypanda.png" alt="" />
          </div>

          <div>
            <Link to='/addartist'> <h2 onMouseEnter={handleArtistEnter} onMouseLeave={handleArtistLeave} className='absolute log w-[200px] h-[200px] bg-gray-400 m-4 rounded ml-14 flex flex-col justify-center font-bold' style={{}}>Add Artist</h2></Link>
            <img className='  panda  ' style={{ width: '200px', height: '200px', marginLeft: '55px', marginTop: moveUpArtist }} src="/happypanda.png" alt="" />
          </div>

        </div>
      </div >
      <ToastContainer />
    </>
  )
}

export default Dashboard