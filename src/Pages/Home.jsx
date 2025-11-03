import React from 'react'
import HeroSection from '../Components/Hero'
import HomeAbout from '../Components/HomeAbout'
import ToggleSection from '../Components/HomeToggle'
import ExpertSection from '../Components/HomeExperts'
import ClientSection from '../Components/HomeClients'
import Process from '../Components/HomeProcess'
import Question from '../Components/HomeQuestion'
import HomeBlog from '../Components/HomeBlog'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HomeAbout/>
      <ToggleSection/>
      <ExpertSection/>
      <ClientSection/>
      <Question/>
      <Process/>
      <HomeBlog/>
    </div>
  )
}

export default Home
