
import BookBanner from '@/components/book/BookBanner'
import BookInfo from '@/components/book/BookInfo'
import InsideBook from '@/components/book/InsideBook'
import MeetAuthor from '@/components/book/MeetAuthor'
import Testimonial from '@/components/book/Testimonial'
import ToolsFrameworksTimeline from '@/components/book/ToolsFrameworksTimeline'
import Newsletter from '@/components/Community/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { getBookBannerData, getBookInfoData, getBookTestimonialData, getInsideBookData, getMeetAuthorData, getNewsletterSignupData } from '@/lib/sanityQueries'
import React from 'react'

export default async function Page() {
  const [
    bookBannerData,
    testimonialData,
    bookInfoData,
    insideBookData,
    meetAuthorData,
    newsletterSignupData
  ] = await Promise.all([
    getBookBannerData(),
    getBookTestimonialData(),
    getBookInfoData(),
    getInsideBookData(),
    getMeetAuthorData(),
    getNewsletterSignupData()
  ])
  return (
    <div>
        <Navbar />
        <BookBanner bookBannerData={bookBannerData} />
        <Testimonial testimonialData={testimonialData}/>
        <BookInfo bookInfoData={bookInfoData} />
        <ToolsFrameworksTimeline/>
        <InsideBook insideBookData={insideBookData}/>
        <MeetAuthor meetAuthorData={meetAuthorData}/>
        <Newsletter newsletterSignupData={newsletterSignupData}/>
        <Footer />
    </div>
  )
}
