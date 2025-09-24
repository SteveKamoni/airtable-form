import React from 'react'
import AboutHero from '../components/AboutHero'
import OurStory from '../components/OurStory'
import MeetOurTeam from '../components/MeetOurTeam'
import MissionValues from '../components/MissionValues'
import AboutCTA from '../components/AboutCTA'

const About = () => {
  return (
    <>
      <AboutHero />
        <OurStory />
        <MeetOurTeam />
        <MissionValues />
        <AboutCTA />
    </>
  )
}

export default About