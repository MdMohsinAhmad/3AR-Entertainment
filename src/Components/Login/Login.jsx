import React from 'react'
import './Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase.js';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const Navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = async () => {
    // const auth = getAuth();
    setLoading(true)
    const response = await signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {

        toast.success('Login Successful')
        const token = userCredential.user.accessToken
        localStorage.setItem('Token', token)
        setLoading(false)
        setTimeout(() => {
          Navigate('/dashboard')
        }, 1000)
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  // LOADER
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className='back4 '>
        <div className='flex justify-between'>
          <div className='w-[33%]'>
            <Link to='/'><img className='w-[100px] md:w-[150px]' src="./3arE.png" alt="" /></Link>
          </div>
          <div className='text-white text-center font-bold text-2xl md:text-4xl pt-4' >&#8517;ASH&#x212C;OARD</div>
          <div className='w-[33%]'></div>
        </div>

          <div className='flex justify-evenly items-center h-[80vh] p-4'>
            <div>
              <img className='hidden md:block lg:block roundd w-[450px] h-[450px]' src="./logingalaxy.png" alt="" />
            </div>
          <div className='bg-white/50 flex flex-col back2 w-[350px] md:w-[450px] lg:w-[550px] h-[450px] p-4 gap-2 border bg-gray-100 rounded shadow'>
            <h1 className='text-center font-bold text-3xl underline'>Login</h1>
            <label className='mt-[15%]' htmlFor="#">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className='p-2' type="text" placeholder='Username' />
            <label htmlFor="#">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='p-2' type="password" placeholder='Password' />
            {loading ?
              <div className='flex justify-center bg-orange-500 rounded sticky mt-4'>
                <img className='w-[70px] h-[40px] ' src="./loading.gif" alt="" />
              </div> :
              <button onClick={handleLogin} className='p-2 bg-orange-500 hover:bg-orange-600 mt-4 text-white font-bold rounded'>Login</button>
            }
            <Link className='flex justify-center' to='/registration'><h2 className='p-2 text-orange-500 underline hover:text-gray-300 mt-2 text-white rounded'>Create New Account</h2></Link>
          </div>
          </div>
      </div>
      <ToastContainer />
    </>

  )
}

export default Login