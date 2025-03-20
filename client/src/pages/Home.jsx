import React from 'react'
import Hero from '../components/Home/Hero'
import HowToGetBlood from '../components/Home/HowToGetBlood'
import OurCollaborators from '../components/Home/OurCollaborators'
import OurMission from '../components/Home/OurMission'

const Home = () => {
  return (
    <div>
      <Hero />
      <OurMission />
      <OurCollaborators />
      <HowToGetBlood />
    </div>
  )
}

export default Home
