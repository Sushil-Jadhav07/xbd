import InsightsBanner from '@/components/Insights/InsightsBanner'
import FeaturedArticles from '@/components/Insights/FeaturedArticles'
import YoutubeVideos from '@/components/Insights/YoutubeVideos'
import InsightsVideos from '@/components/Insights/InsightsVideos'
import FAQs from '@/components/Faq/Faq'
import Newsletter from '@/components/Home/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { getInsightsBannerData, getFeaturedArticlesData, getYoutubeVideosData, getInsightsVideosData } from '@/lib/sanityQueries'
import React from 'react'

export const metadata = {
  title: "Insights | XBD",
  description: "Explore cutting-edge research, case studies, and expert insights on exponential growth strategies.",
};

export default async function InsightsPage() {
  const [insightsBannerData, featuredArticlesData, youtubeVideosData, insightsVideosData] = await Promise.all([
    getInsightsBannerData(),
    getFeaturedArticlesData(),
    getYoutubeVideosData(),
    getInsightsVideosData()
  ])

  return (
    <div className='relative'>
      <main className="relative">
        <Navbar />
        <InsightsBanner insightsBannerData={insightsBannerData} />
        <FeaturedArticles featuredArticlesData={featuredArticlesData} />
        {/* <YoutubeVideos youtubeVideosData={youtubeVideosData} /> */}
        <InsightsVideos insightsVideosData={insightsVideosData} />
        {/* <FAQs /> */}
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

