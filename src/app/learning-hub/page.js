import ComingSoon from '@/components/common/ComingSoon'
import Newsletter from '@/components/Home/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Faqs from '@/components/Learning-hub/Faqs'
import IndustryFocus from '@/components/Learning-hub/IndustryFocus'
import IntroductoryClass from '@/components/Learning-hub/IntroductoryClass'
import LearningBanner from '@/components/Learning-hub/LearningBanner'
import Programs from '@/components/Learning-hub/Programs'
import WhatLearn from '@/components/Learning-hub/WhatLearn'
import { getLearningBannerData, getProgramsData, getIndustryFocusData, getWhatLearnData, getIntroductoryClassData, getFaqsData } from '@/lib/sanityQueries'
import React from 'react'

export default async function Page() {
  const [learningBannerData, programsData, industryFocusData, whatLearnData, introductoryClassData, faqsData] = await Promise.all([
    getLearningBannerData(),
    getProgramsData(),
    getIndustryFocusData(),
    getWhatLearnData(),
    getIntroductoryClassData(),
    getFaqsData(),
  ])

  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        {/* <ComingSoon /> */}
        <LearningBanner learningBannerData={learningBannerData} />
        <Programs programsData={programsData} />
        <IndustryFocus industryFocusData={industryFocusData} />
        <WhatLearn whatLearnData={whatLearnData} />
        <IntroductoryClass introductoryClassData={introductoryClassData} />
        <Faqs faqsData={faqsData} />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}