import ComingSoon from '@/components/common/ComingSoon'
import ExponentialJourney from '@/components/Home/ExponentialJourney'
import Newsletter from '@/components/Home/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Faqs from '@/components/Learning-hub/Faqs'
import IndustryFocus from '@/components/Learning-hub/IndustryFocus'
import IntroductoryClass from '@/components/Learning-hub/IntroductoryClass'
import LearningBanner from '@/components/Learning-hub/LearningBanner'
import Programs from '@/components/Learning-hub/Programs'
import WhatLearn from '@/components/Learning-hub/WhatLearn'
import { getLearningBannerData, getExponentialJourneyData, getProgramsData, getIndustryFocusData, getWhatLearnData, getIntroductoryClassData, getFaqsData } from '@/lib/sanityQueries'
import React from 'react'

export const metadata = {
  title: 'XBD Courses & Online Workshops on X-OS to Grow Your Business',
  description:
    'Explore XBD courses and online workshops by Anuj Pandey on the Exponential Operating System (X-OS). Master exponential growth strategies and transform your business with proven frameworks.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/learning-hub',
  },
  openGraph: {
    title: 'XBD Courses & Online Workshops on X-OS to Grow Your Business',
    description:
      'Explore XBD courses and online workshops by Anuj Pandey on the Exponential Operating System (X-OS). Master exponential growth strategies and transform your business.',
    url: 'https://xbd.vercel.app/learning-hub',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XBD Courses & Online Workshops on X-OS to Grow Your Business',
    description:
      'Explore XBD courses and online workshops by Anuj Pandey on the Exponential Operating System (X-OS). Master exponential growth strategies.',
  },
};

export default async function Page() {
  const [
    learningBannerData,
    programsData,
    industryFocusData,
    whatLearnData,
    introductoryClassData,
    faqsData,
    exponentialJourneyData,
  ] = await Promise.all([
    getLearningBannerData(),
    getProgramsData(),
    getIndustryFocusData(),
    getWhatLearnData(),
    getIntroductoryClassData(),
    getFaqsData(),
    getExponentialJourneyData(),
  ])

  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        {/* <ComingSoon /> */}
        <LearningBanner learningBannerData={learningBannerData} />

        <ExponentialJourney journeyData={exponentialJourneyData} />
        
        <Programs programsData={programsData} />
        <IndustryFocus industryFocusData={industryFocusData} />
        <WhatLearn whatLearnData={whatLearnData} />
        {/* <IntroductoryClass introductoryClassData={introductoryClassData} /> */}

        
        <Faqs faqsData={faqsData} />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}