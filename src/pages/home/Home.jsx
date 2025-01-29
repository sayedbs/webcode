import React from 'react'
import Blogs from '../blogs/Blogs'
import CompanyLogos from './CompanyLogos'
import FAQs from './FAQs'
import HeroSection from './HeroSection'
import Newsletter from './Newsletter'
import Owlslider from './Owlslider'
import Pagination from './Pagination'
import Pricing from './Pricing'
import Services from './Services'
import Tabjs from './Tabjs'
import TeamSection from './TeamSection'
import Testimonials from './Testimonials'
import Testslider from './Testslider'
import ToolsSection from './ToolsSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ToolsSection/>
      <CompanyLogos/>
      <Services/>
      <Testimonials/>
      <Blogs/>
      <TeamSection/>
      <Pricing/>
      <FAQs/>
      <Newsletter/>
      <Testslider/>
      <Owlslider/>
      <Tabjs/>
      <Pagination/>
    </div>
  )
}

export default Home