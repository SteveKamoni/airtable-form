import React from 'react'
import ResourcesHero from '../components/ResourcesHero'
import FeaturedArticles from '../components/FeaturedArticles'
import ResourceCategories from '../components/ResourceCategories'
import FAQ from '../components/FAQ'

const ResourcesPage = () => {
  return (
    <>
        <ResourcesHero/>
        <FeaturedArticles/>
        <ResourceCategories/>
        <FAQ/>
    </>
  )
}

export default ResourcesPage