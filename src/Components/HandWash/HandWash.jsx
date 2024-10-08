import React from 'react'
import Commonhead from '../Commonhead/Commonhead'
import Review from '../../Common/Review'
import { IoMdCube } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import CommonButton from '../../Common/CommonButton';
import { TbCurrencyTaka } from "react-icons/tb";
import CountUp from 'react-countup';


const HandWash = () => {
  return (
    <>
    <section className='handwash bg-[#ECEBE6] px-5 lg:px-0'>
            <div className="container">
                <div className="row flex-wrap lg:flex justify-between">
                    <div className="text mt-[95px] pt-6">
                        <Commonhead commonHeadText={'All skins types'}/>
                        <div className="count flex-wrap lg:flex gap-[80px] mt-[36px] mb-[40px]">
                            <Review ReviewIcon={<IoMdCube/>} reviewText={'Products'} ReviewCount={48}/>
                            <Review ReviewIcon={<FaShoppingBag/>} reviewText={'Product solds'} ReviewCount={200} Plus={'+'}/>
                            <Review ReviewIcon={<FaFaceSmile/>} reviewText={'Review'} ReviewCount={99} Plus={'+'}/>
                        </div>
                            <div>
                                <h2 className='text-[36px] font-normal font-PT-Serif text-brand-color'>Men’s Hand wash  lorem</h2>
                            </div>
                            <div className='mt-[26px] flex-wrap lg:flex gap-[20px]'>
                                <CommonButton />
                                <div className='flex gap-[3PX]'>
                                    <TbCurrencyTaka className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%] mt-2'/>
                                    <CountUp end={700} className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%]'/>
                                </div>
                            </div>
                        </div>
                    <div className='img'>
                        <img src="images/hadn_wash.png" alt="hand_wash" />
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default HandWash