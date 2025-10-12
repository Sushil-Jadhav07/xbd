import Feature from '@/components/Home/Feature'
import ImageBanner from '@/components/Home/ImageBanner'
import Newsletter from '@/components/Home/Newsletter'
import PricingPlan from '@/components/Home/PricingPlan'
import QuoteCarousel from '@/components/Home/QuoteCarousel'
import Slider from '@/components/Home/Slider'
import ToolsCarousel from '@/components/Home/ToolsCarousel'
import Whychoose from '@/components/Home/Whychoose'
import WhyExponentialNow from '@/components/Home/WhyExponentialNow'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'
import Banner from '../../components/Home/Banner'
import ExponentialEconomy from '../../components/Home/ExponentialEconomy'
import ExponentialJourney from '../../components/Home/ExponentialJourney'
import { getBannerData, getExponentialEconomyData, getExponentialJourneyData, getWhatIsExponentialData, getWhyChooseData, getWhyExponentialNowData, getResourcesSliderData, getToolsCarouselData, getQuoteCarouselData, getPricingPlanData, getNewsletterData, getImageBannerData } from '../../lib/sanityQueries'
export default async function Home() {
  const [bannerData, exponentialData, exponentialJourneyData, whatIsExponentialData, whyChooseData, whyExponentialNowData, resourcesSliderData, toolsCarouselData, quoteCarouselData, pricingPlanData, newsletterData, imageBannerData] = await Promise.all([
    getBannerData(),
    getExponentialEconomyData(),
    getExponentialJourneyData(),
    getWhatIsExponentialData(),
    getWhyChooseData(),
    getWhyExponentialNowData(),
    getResourcesSliderData(),
    getToolsCarouselData(),
    getQuoteCarouselData(),
    getPricingPlanData(),
    getNewsletterData(),
    getImageBannerData()
  ])

  return (
    <div className='relative'>
      <Navbar />

      {/* Banner Section - Only one, with data */}
      <section className="relative pt-[0px]">
        <Banner bannerData={bannerData} />
      </section>

      <section className="relative pt-[0px]">
      <Feature whatIsExponentialData={whatIsExponentialData} />
      </section>

      <section className="relative pt-[0px]">
      <Whychoose whyChooseData={whyChooseData} />
      </section>

      <section className="relative pt-[0px]">
      <WhyExponentialNow whyExponentialNowData={whyExponentialNowData} />
      </section>

      <section className="relative pt-[0px]">
      <Slider resourcesSliderData={resourcesSliderData} />
      </section>

      <section className="relative pt-[0px]">
        <ImageBanner imageBannerData={imageBannerData}/>
      </section>

      {/* ExponentialEconomy Section - with data */}
      <section className="relative pt-[0px]">
        <ExponentialEconomy exponentialData={exponentialData} />
      </section>

      {/* ExponentialJourney Section - with data */}
      <section className="relative pt-[0px]">
        <ExponentialJourney journeyData={exponentialJourneyData} />
      </section>

      <section className="relative pt-[0px]">
      <ToolsCarousel toolsCarouselData={toolsCarouselData} />
      </section>

      <section className="relative pt-[0px]">
        <QuoteCarousel quoteCarouselData={quoteCarouselData} />
      </section>

      <section className="relative pt-[0px]">
        <PricingPlan pricingPlanData={pricingPlanData}/>
      </section>

      <section className="relative pt-[0px]">
        <Newsletter newsletterData={newsletterData}/>
      </section>

      <Footer/>
    </div>
  )
}