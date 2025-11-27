import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div>
               <img className='mb-5 w-40' src={assets.logo} alt="" />
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>A robust Doctor Appointment Booking System that manages patient scheduling, provides availability, and prescription fulfillment, streamlining clinic operations. The system securely handles patient data and allows doctors to electronically issue, track, and manage all medication prescriptions directly within the platform.</p>
            </div>
            {/* center  */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right side */}
            <div>
                 <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                 <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 8003387415</li>
                    <li>palaksh1509@gmail.com</li>
                 </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>©️Copyright 2024@ Prescripto - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
