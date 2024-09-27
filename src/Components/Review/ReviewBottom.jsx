import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import Review from '../../Common/Review';


const ReviewBottom = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="text-center flex flex-col items-center gap-[21px] mb-[80px]">
                    <h2 className='text-[48px] font-PT-Serif font-normal text-brand-color'>Review</h2>
                    <p className='w-[526px] text-lg font-inter font-medium text-[#A0A79A] leading-[145%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="review-card flex justify-around">
                    <div className="single-card">
                        <div className="star flex gap-[25px] justify-center">
                            <IoStarSharp className='text-[41px] text-[#F2994A]'/>
                            <IoStarSharp className='text-[41px] text-[#F2994A]'/>
                            <IoStarSharp className='text-[41px] text-[#F2994A]'/>
                            <IoStarSharp className='text-[41px] text-[#F2994A]'/>
                            <IoStarSharp className='text-[41px] text-[#F2994A]'/>
                        </div>
                        <p className='w-[441px] text-xl font-PT-Serif font-normal text-brand-color leading-[130%] my-[13px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <h2 className='text-[36px] font-PT-Serif font-normal text-[#333333] leading-[145%] text-center'>Ebrahim Ahmed</h2>
                        <h3 className='text-xl font-PT-Serif font-normal text-[#F2994A] text-center'>actor</h3>
                    </div>
                    <div className="single-card">
                        <div className="star flex gap-[25px] justify-center">
                            <IoStarSharp className='text-[41px] text-[#F2994A] '/>
                            <IoStarSharp className='text-[41px] text-[#F2994A] '/>
                            <IoStarSharp className='text-[41px] text-[#F2994A] '/>
                            <IoStarSharp className='text-[41px] text-[#F2994A] '/>
                            <IoStarSharp className='text-[41px] text-[#F2994A] '/>
                        </div>
                        <p className='w-[441px] text-xl font-PT-Serif font-normal text-brand-color leading-[130%] my-[13px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <h2 className='text-[36px] font-PT-Serif font-normal text-[#333333] leading-[145%] text-center'>Tanvir Shantoh</h2>
                        <h3 className='text-xl font-PT-Serif font-normal text-[#F2994A] text-center'>actor</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ReviewBottom