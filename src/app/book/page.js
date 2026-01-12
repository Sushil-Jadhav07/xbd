
import BookBanner from '@/components/book/BookBanner'
import BookInfo from '@/components/book/BookInfo'
import InsideBook from '@/components/book/InsideBook'
import MeetAuthor from '@/components/book/MeetAuthor'
import Testimonial from '@/components/book/Testimonial'
import ToolsFrameworksTimeline from '@/components/book/ToolsFrameworksTimeline'
import BookFaqs from '@/components/book/BookFaqs'
import Newsletters from '@/components/Community/Newsletters'
import Newsletter from '@/components/Community/Newsletters'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { getBookBannerData, getBookInfoData, getBookTestimonialData, getInsideBookData, getMeetAuthorData, getBookFaqsData, getToolsFrameworksTimelineData, getNewsletterSignupData } from '@/lib/sanityQueries'
import React from 'react'

export const metadata = {
  title: 'Buy Exponential By Design from Anuj Pandey | Official Book',
  description:
    'Get Exponential By Design written by Anuj Pandey from the official store. Learn about the X Framework and transform how your business operates in the AI era.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/book',
  },
  openGraph: {
    title: 'Buy Exponential By Design from Anuj Pandey | Official Book',
    description:
      'Get Exponential By Design written by Anuj Pandey from the official store. Learn about the X Framework and transform how your business operates in the AI era.',
    url: 'https://xbd.vercel.app/book',
    type: 'website',
  },
}

export default async function Page() {
  const [
    bookBannerData,
    testimonialData,
    bookInfoData,
    timelineData,
    insideBookData,
    meetAuthorData,
    bookFaqsData,
    newsletterSignupData
  ] = await Promise.all([
    getBookBannerData(),
    getBookTestimonialData(),
    getBookInfoData(),
    getToolsFrameworksTimelineData(),
    getInsideBookData(),
    getMeetAuthorData(),
    getBookFaqsData(),
    getNewsletterSignupData()
  ])
  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        <BookBanner bookBannerData={bookBannerData} />
        <Testimonial testimonialData={testimonialData}/>
        <BookInfo bookInfoData={bookInfoData} />
        <ToolsFrameworksTimeline timelineData={timelineData} />
        <InsideBook insideBookData={insideBookData}/>
        <MeetAuthor meetAuthorData={meetAuthorData}/>
        <BookFaqs bookFaqsData={bookFaqsData} />
        <Newsletters newsletterSignupData={newsletterSignupData}/>
        <Footer />
      </main>
    </div>
  )
}
