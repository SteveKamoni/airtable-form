import React from 'react'
import ServicesHero from '../components/ServiceHero'
import ServicesGrid from '../components/ServiceGrid'
import ServiceHighlights from '../components/ServiceHighlights'
import ServiceCTA from '../components/ServiceCTA'

const Services = () => {
  return (
    <div>
        <ServicesHero/>
        <ServicesGrid/>
        <ServiceHighlights/>
        <ServiceCTA/>
    </div>
  )
}

export default Services