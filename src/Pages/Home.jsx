import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Choose from '../Components/Choose/Choose'
import HandWash from '../Components/HandWash/HandWash'
import Cream from '../Components/Cream/Cream'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Choose/>
    <HandWash/>
    <Cream/>
    </>
  )
}

export default Home