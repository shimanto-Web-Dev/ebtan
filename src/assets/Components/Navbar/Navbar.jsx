import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [show , setShow] = useState(false)


    const handleShow  = () => {
        setShow(!show)
    }





  return (
    <>
    <nav>
        <div className="container">
            <div className="menu-row flex justify-between pt-[33px] ">
                <div className="img">
                    <img className='w-[105px]' src="images/EbTan.png" alt="logo" />
                </div>
                <div className="menu-link relative">
                <CgMenuRight className='text-[26px] active:text-brand-color' onClick={handleShow}/>
                {
                    show?

                    <ul className='w-[400px] bg-brand-color flex flex-col items-center gap-6 py-5 rounded-xl absolute top-10 right-0'>
                        <li><Link className='text-xl text-white font-semibold] hover:text-black duration-500  active:text-black'>Home</Link></li>
                        <li><Link className='text-xl text-white font-semibold] hover:text-black duration-500  active:text-black'>About</Link></li>
                        <li><Link className='text-xl text-white font-semibold] hover:text-black duration-500  active:text-black'>Contact</Link></li>
                        <li><Link className='text-xl text-white font-semibold] hover:text-black duration-500  active:text-black'>Blog</Link></li>
                    </ul>
                    :
                    ''

                }
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar