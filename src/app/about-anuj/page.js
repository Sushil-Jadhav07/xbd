import AboutTitle from '@/components/About-Anuj/AboutTitle'
import AnujNewsletter from '@/components/About-Anuj/AnujNewsletter'
import CalltoAction from '@/components/About-Anuj/CalltoAction'
import GroupCoaching from '@/components/About-Anuj/GroupCoaching'
import Industries from '@/components/About-Anuj/Industries'
import Keynotes from '@/components/About-Anuj/Keynotes'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { getAboutTitleData,  getCallToActionData, getGroupCoachingData, getIndustriesData, getKeynotesData, } from '@/lib/sanityQueries'
import React from 'react'


export default async function Page() {
  const [aboutTitleData, keynotesData, industriesData, callToActionData, groupCoachingData] = await Promise.all([
    getAboutTitleData(),
    getKeynotesData(),
    getIndustriesData(),
    getCallToActionData(),
    getGroupCoachingData(),
  ])

  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        <AboutTitle aboutTitleData={aboutTitleData} />
        <Keynotes keynotesData={keynotesData} />
        <Industries industriesData={industriesData} />
        <CalltoAction callToActionData={callToActionData} />
        <GroupCoaching groupCoachingData={groupCoachingData} /> {/* Pass the data */}
        <AnujNewsletter />
        <Footer />
      </main>
    </div>
  )
}

