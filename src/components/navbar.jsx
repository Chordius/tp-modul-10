import React from 'react'
import skyImage from '../assets/sky.png'

const Navbar = () => {
    return (
        <div
            className='rounded-full max-w-screen w-[96%] h-24 border-[6px] shadow-xl border-sky-400 text-white 
                        font-semibold flex items-center justify-between px-16 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${skyImage})` }}
        >
            <div>
                <h1 className='font-bold text-2xl'>Jesaya Hamonangan</h1>
            </div>

            <div className='flex gap-x-6'>
                <a href="#" className='text-xl px-5 py-2 duration-150 rounded-xl hover:bg-white hover:text-black'>Home</a>
                <a href="#" className='text-xl px-5 py-2 duration-150 rounded-xl hover:bg-white hover:text-black'>About</a>
                <a href="#" className='text-xl px-5 py-2 duration-150 rounded-xl hover:bg-white hover:text-black'>Contact</a>
                <a href="#" className='text-xl px-5 py-2 duration-150 rounded-xl hover:bg-white hover:text-black'>About Me</a>
            </div>
        </div>
    )
}

export default Navbar
