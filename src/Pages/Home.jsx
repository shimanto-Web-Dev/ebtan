import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Choose from '../Components/Choose/Choose'
import HandWash from '../Components/HandWash/HandWash'
import Cream from '../Components/Cream/Cream'
import Lipbalm from '../Components/Lipbalm/Lipbalm'
import ReviewBottom from '../Components/Review/ReviewBottom'
import Email from '../Components/Email/Email'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Choose/>
    <HandWash/>
    <Cream/>
    <Lipbalm/>
    <ReviewBottom/>
    <Email/>
    <Footer/>
    </>
  )
}

export default Home