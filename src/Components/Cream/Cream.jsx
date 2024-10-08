import React from 'react'
import Commonhead from '../Commonhead/Commonhead'
import CommonButton from '../../Common/CommonButton';
import { TbCurrencyTaka } from "react-icons/tb";
import CountUp from 'react-countup';
import CommonAccro from '../../Common/CommonAccro/CommonAccro';




const Cream = () => {
  return (
    <>
        <section className='mt-[110px] mb-[50px] lg:mb-[150px] px-5 lg:px-0'>
            <div className="container">
                <div className="row lg:flex gap-[120px]">
                    <div className="img">
                        <img src="images/cream.png" alt="cream" />
                    </div>
                    <div className='mt-[39px]'>
                        <Commonhead commonHeadText={'All skins types'}/>
                        <h2 className='lg:w-[215px] text-[48px] font-PT-Serif font-normal text-[#333333] leading-[120%] mt-[30px] mb-[44px]'>Men’s day
                        cream</h2>
                        <div className='flex flex-col gap-[16px] mb-[37px]'>
                        <CommonAccro accroText={'How to use'}/>
                        <CommonAccro accroText={'How to use'}/>
                        <CommonAccro accroText={'How to use'}/>
                        </div>
                        <div className='flex-wrap lg:flex gap-[27px]'> 
                            <CommonButton/>
                            <div className='flex gap-[3PX]'>
                                <TbCurrencyTaka className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%] mt-2'/>
                                <CountUp end={500} className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Cream