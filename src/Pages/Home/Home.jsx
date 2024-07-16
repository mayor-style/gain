import React from 'react'
import "./Home.css"
import HeroSec from '../../Components/HeroSec/HeroSec'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Investment from '../../Components/Investment/investment'
import Affiliate from '../../Components/Affiliate/Affiliate'
import Faq from '../../Components/Faq/Faq'
import Process from '../../Components/Process/Process'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <section> 
       <Navbar />
      <HeroSec/>
      <AboutUs />
      <Investment/>
      <Affiliate />
      <Process />
      <Faq />
      <Footer />


    </section>
  )
}

export default Home
