import React from 'react'

const Email = () => {
  return (
    <>
    <section className='mt-[50px] lg:mt-[120px] bg-[#ECEBE6] pt-[80px] pb-[77px] px-5 lg:pb-0'>
        <div className="container">
            <div className="row flex-wrap lg:flex justify-between">
                <div className="text">
                    <h2 className='w-full lg:w-[348px] text-[36px] lg:text-[48px] font-PT-Serif font-normal text-[#333333] leading-[125%] mb-9 lg:mb-0'>Subscribe to the 
                    daily <span className='text-[#C51605]'>updates</span></h2>
                </div>
                <div className="input flex justify-between items-center w-full lg:w-[700px] h-[50px] lg:h-[92px] border-[1px] border-black p-2 lg:p-5 rounded-[50px]">
                    <input type="text" className='w-[150px] lg:w-[450px] bg-transparent outline-none text-[10px] lg:text-lg font-medium font-inter text-[#A0A79A] leading-[145%]' placeholder='Enter your email address'/>
                    <button className='text-[10px] lg:text-lg font-medium font-inter text-white leading-[145%] bg-[#E52525] py-[7px] lg:py-[13px] px-[20px] lg:px-[35px] rounded-[50px]'>Subscribe now</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Email