import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-xl font-bold mt-2'>Want Tips & Tricks to Optimize your Website?</h1>
                    <p>Sign Up to our Newsletter</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input  className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#0095df] w-[150px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#0095df]'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter