import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Popover, Modal } from '@mui/material'
import { Google, Facebook, Apple } from '@mui/icons-material'

const Navbar = () => {
    //Popover
    const [anchor, setAnchor] = useState(null)
    const handleClick = (event) =>{
        setAnchor(event.currentTarget)
    }
    //Modal
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div className='fixed z-20 bg-white shadow-xl flex items-center justify-around py-5  w-full'>
            <div>
                <img src="./logo/Luxetrip_logo.png" className='w-[160px]' alt="" />
            </div>
            <div className="flex flex-col">
                <ul className='flex'>
                    <li><Link to='/Stays' href="#" className='lg:text-base font-poppins mr-5 hover:underline hover:mb-2'>Where to stay</Link></li>
                    <li><Link to='/Flights' href="#" className='text-base font-poppins mr-5 hover:underline hover:mb-2'>Booking</Link></li>
                    <li><Link to='/Guide' href="#" className='text-base font-poppins mr-5 hover:underline hover:mb-2'>Guide</Link></li>
                </ul>
            </div>
            <div className='flex flex-row space-x-3'>
           <div className='hover:text-red-500 hover:bg-gray-100 mt-3 hover:mt-0 hover:p-3 hover:rounded-2xl'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
           </div>
                             <div className='hover:text-red-500 hover:bg-gray-100 mt-3 hover:mt-0 hover:p-3 hover:rounded-2xl'>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                   </div>

<div  className='flex items-center justify-center p-3 bg-slate-100 shadow-inner rounded-3xl ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" onClick={handleClick} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" onClick={handleClick} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
<Popover
open={Boolean(anchor)}
anchorEl={anchor}
anchorOrigin={{
    vertical:'bottom',
    horizontal:'left',
}}
transformOrigin={{
    vertical:'top',
    horizontal:'center'
}}
onClose={() => setAnchor(null)}
>
<div className="rounded-xl px-5">
    <div className="flex flex-col m-5">
        <h1 onClick={handleOpen} className="font-bold text-black hover:underline cursor-pointer">Log In</h1>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <div className="bg-white pb-6  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/12 h-4/6 shadow-xl rounded-2xl">
                <h1 className="m-5 text-2xl font-bold text-red-500 text-center">Log in or Sign Up</h1>
                <div className="mx-20 mt-25">
                <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div class="px-4 py-3">
                    <svg class="h-6 w-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                    </svg>
                </div>
                <h1 class="py-2 w-5/6 mr-10 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </a>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
            </div>
            <div class="mt-8">
                <button class="bg-red-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">Login</button>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <a href="#" class="text-xs text-gray-500 uppercase">or sign up</a>
                <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
            </div>
        </Modal>
        <h1 onclick={handleOpen} className="font-light text-gray-400 hover:underline cursor-pointer">Sign Up</h1>
    </div>
    <hr />
    <div className='flex flex-col m-5'>
        <p to='/Flights' className="text-light text-gray-400 hover:underline cursor-pointer">Book a trip</p>
        <p className="text-light text-gray-400 hover:underline cursor-pointer">Hosting</p>
        <p className="text-light text-gray-400 hover:underline cursor-pointer">Help center</p>
    </div>
</div>
</Popover>
                </div>
                </div>
        </div>
    )
}

export default Navbar
