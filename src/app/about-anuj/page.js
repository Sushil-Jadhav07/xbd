import AboutTitle from '@/components/About-Anuj/AboutTitle'
import AnujNewsletter from '@/components/About-Anuj/AnujNewsletter'
import CalltoAction from '@/components/About-Anuj/CalltoAction'
import GroupCoaching from '@/components/About-Anuj/GroupCoaching'
import Industries from '@/components/About-Anuj/Industries'
import Keynotes from '@/components/About-Anuj/Keynotes'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutTitle />
        <Keynotes />
        <Industries />
        <CalltoAction />
        <GroupCoaching />
        <AnujNewsletter />
        <Footer />
    </div>
  )
}

export default page