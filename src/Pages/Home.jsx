import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Choose from '../Components/Choose/Choose'
import HandWash from '../Components/HandWash/HandWash'
import Cream from '../Components/Cream/Cream'
import Lipbalm from '../Components/Lipbalm/Lipbalm'
import ReviewBottom from '../Components/Review/ReviewBottom'

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
    </>
  )
}

export default Home