import React from 'react'
import Startup from '../assets/images/poster/startup.jpg'

const Cards = () => {
    return (
        <div className=' bg-white w-full py-[10rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Startup} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Start Up</h2>
                    <p className='text-center text-4xl font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-black w-[150px] rounded-md font-medium my-6 mx-auto md:mx-2 py-3 text-[#0095df]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Startup} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Start Up</h2>
                    <p className='text-center text-4xl font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-black w-[150px] rounded-md font-medium my-6 mx-auto md:mx-2 py-3 text-[#0095df]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Startup} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Start Up</h2>
                    <p className='text-center text-4xl font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-black w-[150px] rounded-md font-medium my-6 mx-auto md:mx-2 py-3 text-[#0095df]'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards