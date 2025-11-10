import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NumberCounter from './components/NumberCounter'
import WhyTechpro from './components/WhyTechpro'
import AvailableCourses from './components/AvailableCourses'
import GetinTouch from './components/GetinTouch'
import WhatOurStudent from './components/WhatOurStudent'
import TechCareer from './components/TechCareer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <NumberCounter />
      <WhyTechpro />
      <AvailableCourses />
      <WhatOurStudent />
      <GetinTouch />
      <TechCareer />
      <Footer />
    </div>
  )
}

export default App
