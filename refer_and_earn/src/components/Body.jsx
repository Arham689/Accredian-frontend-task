import React from 'react'
import Top_nav from './Top_nav';
import NavBar from './NavBar';
import Tabs from './Tabs'
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import Refernow from './Refernow';
import Table from './Table';
import Footer from './Footer';
import FrequentlyAsked from './FrequentlyAsked';

const Body = () => {
  return (
    <div>
      <Top_nav/>
      <NavBar></NavBar>
      <Tabs></Tabs>
      <HeroSection/>
      <HeroSection2/>
      <div className='md:mt-48 mt-11'> <Refernow/></div>
      <Table/> 
      <div className='mt-32'> <Refernow/></div>
      <div className='mt-32'> </div>

      <FrequentlyAsked/>
      <Footer/>
    </div>
  )
}

export default Body
