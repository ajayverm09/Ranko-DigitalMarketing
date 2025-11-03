import React from 'react'
import HeroSection from '../Components/AboutHero'
import StatsSection from '../Components/AboutStats'
import FeatureSection from '../Components/AboutFeature'
import Team from '../Components/AboutTeam'
import Awards from '../Components/AboutAwards'
import Question from '../Components/HomeQuestion'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <FeatureSection/>
      <Team/>
      <Awards/>
      <Question/>
    </div>
  )
}

export default About
