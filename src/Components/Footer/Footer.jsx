import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <footer className='pt-[64px] bg-brand-color'>
        <div className="container">
            <div className="row">
                <h2 className='text-center text-[34px] font-inter font-black text-white leading-[125%]'>EbTan Cosmetics</h2>
                <ul className='flex gap-4 lg:gap-[33px] pt-[43px] pb-[50px] justify-center'>
                    <li><Link className='text-lg font-medium font-inter text-white leading-[125%]'>Home</Link></li>
                    <li><Link className='text-lg font-medium font-inter text-white leading-[125%]'>About us</Link></li>
                    <li><Link className='text-lg font-medium font-inter text-white leading-[125%]'>Product</Link></li>
                    <li><Link className='text-lg font-medium font-inter text-white leading-[125%]'>Contact</Link></li>
                </ul>
                <ul className='flex gap-[29px] justify-center'>
                    <li><Link><FaInstagram className='text-[22px] text-white'/></Link></li>
                    <li><Link><FaTelegram className='text-[22px] text-white'/></Link></li>
                    <li><Link><FaFacebook className='text-[22px] text-white'/></Link></li>
                </ul>
                <p className='text-center text-lg font-normal font-inter text-white leading-[125%] pt-[19px] pb-[66px]'>© 2024 All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer