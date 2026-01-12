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
  title: "Business Insights & AI Strategy Fact | Exponential by Design",
  description:
    "Get business insights, AI strategy facts, and deep perspectives on exponential growth from XBD. Explore featured articles, videos, and expert analysis on enterprise transformation.",
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/insights',
  },
  openGraph: {
    title: "Business Insights & AI Strategy Fact | Exponential by Design",
    description:
      "Get business insights, AI strategy facts, and deep perspectives on exponential growth from XBD. Explore featured articles and expert analysis.",
    url: 'https://xbd.vercel.app/insights',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Business Insights & AI Strategy Fact | Exponential by Design",
    description:
      "Get business insights, AI strategy facts, and deep perspectives on exponential growth from XBD.",
  },
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

