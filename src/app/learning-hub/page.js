import Newsletter from '@/components/Home/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Faqs from '@/components/Learning-hub/Faqs'
import IndustryFocus from '@/components/Learning-hub/IndustryFocus'
import IntroductoryClass from '@/components/Learning-hub/IntroductoryClass'
import LearningBanner from '@/components/Learning-hub/LearningBanner'
import Programs from '@/components/Learning-hub/Programs'
import WhatLearn from '@/components/Learning-hub/WhatLearn'
import React from 'react'

const page = () => {
  return (
    <div>
           <Navbar />
           <LearningBanner />
           <Programs />
           <IndustryFocus />
           <WhatLearn />
           <IntroductoryClass />
           <Faqs />
           <Newsletter />
           <Footer />
    </div>
  )
}

export default page