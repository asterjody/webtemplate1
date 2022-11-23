import React from 'react'
import Laptop from '../assets/images/poster/2521.jpg'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"></img>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#0095df] font-bold uppercase'>Movies Movie Movi Mov Mo</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Twenty Five Twenty One</h1>
                    <p>The Fox The Fox The Fox The Fox The Fox The Fox The Fox 
                    The Fox The Fox The Fox The Fox The Fox The Fox The Fox The Fox 
                    The Fox The Fox The Fox The Fox The Fox The Fox The Fox The Fox 

                    </p>
                    <button className='bg-black w-[150px] rounded-md font-medium my-6 mx-auto md:mx-2 py-3 text-[#0095df]'>Start Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics