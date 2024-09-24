import React from 'react'
import Commonhead from '../Commonhead/Commonhead'

const Banner = () => {
  return (
    <>
    <section className='mt-[97.56px]'>
        <div className="container">
            <div className="row flex justify-between">
                <div className="banner-img pl-[59px]">
                    <img src="images/bannner_img.png" alt="banner" />
                </div>
                <div className="banner-text">
                    {/* <Commonhead commonHeadText={'Normal to oily skin'}/> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner