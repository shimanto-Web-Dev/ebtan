import React from 'react'
import Commonhead from '../Commonhead/Commonhead'
import { IoStarSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import CommonButton from '../../Common/CommonButton';
import Review from '../../Common/Review';


const Banner = () => {
  return (
    <>
    <section className='mt-[97.56px]'>
        <div className="container">
            <div className="row flex justify-between">
                <div className="banner-img pl-[40px] ">
                    <img src="images/bannner_img.png" alt="banner" />
                </div>
                <div className="banner-text pt-[50.44px]">
                    <Commonhead commonHeadText={'Normal to oily skin'}/>
                    <h1 className='lg:w-[540px] text-[72px] font-PT_Serif font-normal text-[#333333] py-5 leading-[110%]'>Men’s Sunscreen
                    hand & body</h1>
                    <p className='w-[526px] text-lg font-inter font-normal text-[#A0A79A] leading-[145%] mb-[64px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    <CommonButton/>
                    <div className='flex gap-[49px]'>
                    <Review ReviewIcon={<IoStarSharp/>} ReviewCount={4} Plus={',6'} reviewText={'Rating'}/>
                    <Review ReviewIcon={<FaShoppingBag />} ReviewCount={200} Plus={'+'} reviewText={'Product solds'}/>
                    <Review ReviewIcon={<FaFaceSmile/>} ReviewCount={99} Plus={'+'} reviewText={'Review'}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner