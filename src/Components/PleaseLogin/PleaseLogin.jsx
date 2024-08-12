import React from 'react'
import { Link } from 'react-router-dom'

const PleaseLogin = () => {
  return (
    <div className='flex items-center justify-center h-screen p-12'>
        <h1 className='font-bold text-3xl'>You need to Login first to Add Services!
        Go to <Link to='/login'><button className='border border-black rounded text-black shadow w-[150px] h-[40px] hover:bg-gray-700 hover:text-white'>Login</button></Link> Page &#x2639;</h1>
    </div>
  )
}

export default PleaseLogin