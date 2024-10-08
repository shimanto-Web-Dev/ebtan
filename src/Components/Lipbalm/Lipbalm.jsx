import React from 'react'
import Commonhead from '../Commonhead/Commonhead'
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCurrencyTaka } from 'react-icons/tb';
import CountUp from 'react-countup';
import CommonButton from '../../Common/CommonButton';
import CommonAccro from '../../Common/CommonAccro/CommonAccro';


const Lipbalm = () => {
  return (
    <>
    <section className='mb-[50px] lg:mb-[172px] px-5 lg:px-0'>
        <div className="container">
            <div className="row flex-wrap lg:flex justify-between">
                <div className="text">
                    <Commonhead commonHeadText={'Only skins types'}/>
                    <h2 className='lg:w-[479px] text-[48px] font-PT-Serif font-normal text-[#333333] leading-[120%] mt-[30px] mb-[44px]'>Men's lip balm lasting 
                    (25 gr)</h2>
                    <div>
                        <div className='flex flex-col gap-[18px] mb-[37px]'>
                            <CommonAccro accroText={'How to use'}/>
                            <CommonAccro accroText={'Ingredients'}/>
                            <CommonAccro accroText={'Benefits'}/>
                        </div>
                        <div className='flex-wrap lg:flex gap-[27px]'> 
                            <CommonButton/>
                            <div className='flex gap-[3PX]'>
                                <TbCurrencyTaka className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%] mt-2'/>
                                <CountUp end={300} className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%]'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src="images/lb.png" alt="lb" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Lipbalm