import InsightsBanner from '@/components/Insights/InsightsBanner'
import FeaturedArticles from '@/components/Insights/FeaturedArticles'
import FAQs from '@/components/Faq/Faq'
import Newsletter from '@/components/Home/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { getInsightsBannerData, getFeaturedArticlesData } from '@/lib/sanityQueries'
import React from 'react'

export const metadata = {
  title: "Insights | XBD",
  description: "Explore cutting-edge research, case studies, and expert insights on exponential growth strategies.",
};

export default async function InsightsPage() {
  const [insightsBannerData, featuredArticlesData] = await Promise.all([
    getInsightsBannerData(),
    getFeaturedArticlesData()
  ])

  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        <InsightsBanner insightsBannerData={insightsBannerData} />
        <FeaturedArticles featuredArticlesData={featuredArticlesData} />
        <FAQs />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

