import React, { useEffect } from 'react'
import './Register.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase.js';
import { toast, ToastContainer } from 'react-toastify';
import PleaseRegister from '../PleaseLogin/PleaseRegister';
import { signOut } from "firebase/auth";

const Register = () => {
  
  const Navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    // const auth = getAuth();
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        toast.success('Registration Successful')
        setTimeout(() => {

          Navigate('/login')
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
  
  // LoginToken
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

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success('Logged Out')
      Navigate('/login')
      localStorage.setItem('Token', '')
    }).catch((error) => {
      toast.warning('An Error Occured')
    })
  }
  
  return (
    
    <>
      {loginToken !==''?(<>
      <div className='register '>
      <div className='flex justify-between items-center'>
          <div >
            <Link to='/'><img className='w-[100px] md:w-[150px]' src="./3arE.png" alt="" /></Link>
          </div>
          <div className='text-white text-center font-bold text-2xl md:text-4xl ' >&#8517;ASH&#x212C;OARD</div>
          <div>{loginToken !== '' ?<button onClick={handleLogout} className="button-86 w-[30px] md:w-[120px] h-[15px] md:h-[30px] mr-[15px]" role="button">LogOut</button>: null}</div>
        </div>

        <div className='flex justify-evenly items-center h-[80vh] p-4'>
            <div>
              <img className='hidden md:block lg:block roundd w-[450px] h-[450px]' src="./registergalaxy2.png" alt="" />
            </div>
        <div className='flex flex-col justify-center justify-center items-center'>
          <div className='bg-white/50 flex flex-col back2 w-[350px] md:w-[450px] lg:w-[550px] h-[450px] p-4 gap-2 border bg-gray-100 rounded shadow'>
            <h1 className='text-center font-bold text-3xl underline'>Registration</h1>
            <label className='mt-[15%]' htmlFor="#">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className='p-2 ' type="text" placeholder='Username' />
            <label htmlFor="#">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='p-2' type="password" placeholder='Password' />
            <button onClick={handleLogin} className='p-2 bg-orange-500 hover:bg-orange-600 mt-4 text-white rounded'>Sign Up</button>
            <h2 className='text-center mt-4 text-gray-900 hover:text-gray-600' href="#">Already have an account?<Link className='text-center' to='/login'><span className='underline text-orange-600'> Log In</span></Link></h2>
          </div>
        </div>
        </div>

      </div>
      <ToastContainer />
      </> ):<PleaseRegister/>}
    </>

  )
}

export default Register