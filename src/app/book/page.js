import BookBanner from '@/components/book/BookBanner'
import BookInfo from '@/components/book/BookInfo'
import InsideBook from '@/components/book/InsideBook'
import MeetAuthor from '@/components/book/MeetAuthor'
import Testimonial from '@/components/book/Testimonial'
import Newsletter from '@/components/Community/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <BookBanner />
        <Testimonial />
        <BookInfo />
        <InsideBook />
        <MeetAuthor />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default page