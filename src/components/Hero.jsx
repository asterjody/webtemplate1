import React from 'react'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#0095df] font-bold p-2'>WELCOME TO MY WEBSITE</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Jody Leonardo Wijaya</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-2'>Just a Casual Person</p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Belajar Coding</p>
                <button className='bg-[#0095df] w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Start Now!</button>
            </div>
        </div>
    )
}

export default Hero