import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Topbar from '@/components/Community/Topbar'
import CommunityBanner from '@/components/Community/CommunityBanner'
import WhatGain from '@/components/Community/WhatGain'
import PricingPlan from '@/components/Community/PricingPlan'
import Media from '@/components/Community/Media'
import Quote from '@/components/Community/Quote'
import Newsletter from '@/components/Community/Newsletters'
import BookBanner from '@/components/book/BookBanner'
import Testimonial from '@/components/book/Testimonial'
import BookInfo from '@/components/book/BookInfo'
import InsideBook from '@/components/book/InsideBook'
import MeetAuthor from '@/components/book/MeetAuthor'
import AboutTitle from '@/components/About-Anuj/AboutTitle'
import Keynotes from '@/components/About-Anuj/Keynotes'
import Industries from '@/components/About-Anuj/Industries'
import CalltoAction from '@/components/About-Anuj/CalltoAction'
import React from 'react'
import XponentialCommunity from '@/components/Community/X-PonentialCommunity'
import ValueProposition from '@/components/Community/ValueProposition'
import CommunityStructure from '@/components/Community/CommunityStructure'
import ComingSoon from '@/components/common/ComingSoon'

export const metadata = {
  title: 'X-Ponential Community | Join Exponential Growth Network',
  description:
    'Join the X-Ponential Community to connect with leaders, access exclusive resources, and accelerate your exponential growth journey with like-minded professionals.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/community',
  },
  openGraph: {
    title: 'X-Ponential Community | Join Exponential Growth Network',
    description:
      'Join the X-Ponential Community to connect with leaders, access exclusive resources, and accelerate your exponential growth journey.',
    url: 'https://xbd.vercel.app/community',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-Ponential Community | Join Exponential Growth Network',
    description:
      'Join the X-Ponential Community to connect with leaders and access exclusive resources for exponential growth.',
  },
};

const Community = () => {
  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />

        <ComingSoon />
        {/* <Topbar /> */}
        
        {/* <XponentialCommunity />
        <ValueProposition />
        <CommunityStructure /> */}

        {/* <CommunityBanner />
        <WhatGain />
        <PricingPlan />
        <Media />
        <Quote />
        <Newsletter />
        <BookBanner />
        <Testimonial />
        <BookInfo />
        <InsideBook />
        <MeetAuthor />
        <AboutTitle />
        <Keynotes />
        <Industries />
        <CalltoAction /> */}
        
        <Footer />
      </main>
    </div>
  )
}

export default Community
