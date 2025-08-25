import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Topbar from '@/components/Community/Topbar'
import CommunityBanner from '@/components/Community/CommunityBanner'
import WhatGain from '@/components/Community/WhatGain'
import PricingPlan from '@/components/Community/PricingPlan'
import Media from '@/components/Community/Media'
import Quote from '@/components/Community/Quote'
import Newsletter from '@/components/Community/Newsletter'
import React from 'react'

const Community = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Topbar />
      <CommunityBanner />
      <WhatGain />
      <PricingPlan />
      <Media />
      <Quote />
      <Newsletter />
      
      <Footer />
    </div>
  )
}

export default Community
