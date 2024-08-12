import React from 'react'
import { lazy ,Suspense} from 'react'
import Routing from './Routing.jsx'
// const Routing = lazy(() => import('./Routing.jsx'))

const App = () => {
    return (
        <>
        <Suspense fallback={<div className='flex justify-center items-center h-screen w-[100%]  text-center text-4xl'>
            <h1 className='text-center text-4xl'>Loading please wait...</h1>
        </div>}>
            <Routing />
        </Suspense>
        </>)
}

export default App