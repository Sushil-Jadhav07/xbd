import Banner from '@/components/Home/Banner'
import ExponentialEconomy from '@/components/Home/ExponentialEconomy'
import Feature from '@/components/Home/Feature'
import ImageBanner from '@/components/Home/ImageBanner'
import Newsletter from '@/components/Home/Newsletter'
import PricingPlan from '@/components/Home/PricingPlan'
import QuoteCarouselSection from '@/components/Home/QuoteCarousel'
import QuoteCarousel from '@/components/Home/QuoteCarousel'
import Slider from '@/components/Home/Slider'
import ToolsCarousel from '@/components/Home/ToolsCarousel'
import Whychoose from '@/components/Home/Whychoose'
import WhyExponentialNow from '@/components/Home/WhyExponentialNow'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
      <Navbar />

      <section className="relative pt-[0px]">
        <Banner/>
      </section>

      <section className="relative pt-[0px]">
        <Feature/>
      </section>

      <section className="relative pt-[0px]">
        <Whychoose/>
      </section>

      <section className="relative pt-[0px]">
        <WhyExponentialNow/>
      </section>

      <section className="relative pt-[0px]">
        <Slider/>
      </section>

      <section className="relative pt-[0px]">
        <ImageBanner/>
      </section>

      <section className="relative pt-[0px]">
        <ExponentialEconomy/>
      </section>

      <section className="relative pt-[0px]">
        <ToolsCarousel/>
      </section>

      <section className="relative pt-[0px]">
        <QuoteCarousel/>
      </section>

      <section className="relative pt-[0px]">
        <PricingPlan/>
      </section>

      <section className="relative pt-[0px]">
        <Newsletter/>
      </section>

    <Footer/>


    </div>
  )
}

export default Home