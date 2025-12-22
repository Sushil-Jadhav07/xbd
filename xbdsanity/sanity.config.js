import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {structure} from './structure'

// Import all schema types
import banner from './schemaTypes/home/banner'
import exponentialEconomy from './schemaTypes/home/exponentialEconomy'
import exponentialJourney from './schemaTypes/home/exponentialJourney'
import newsletter from './schemaTypes/home/newsletter'
import pricingPlan from './schemaTypes/home/pricingPlan'
import quoteCarousel from './schemaTypes/home/quoteCarousel'
import resourcesSlider from './schemaTypes/home/resourcesSlider'
import slideshow from './schemaTypes/home/slideshow'
import toolsCarousel from './schemaTypes/home/toolsCarousel'
import whatIsExponential from './schemaTypes/home/whatIsExponential'
import whyChoose from './schemaTypes/home/whyChoose'
import whyExponentialNow from './schemaTypes/home/whyExponentialNow'

import aboutTitle from './schemaTypes/aboutAnuj/aboutTitle'
import anujNewsletter from './schemaTypes/aboutAnuj/anujNewsletter'
import callToAction from './schemaTypes/aboutAnuj/callToAction'
import groupCoaching from './schemaTypes/aboutAnuj/groupCoaching'
import industries from './schemaTypes/aboutAnuj/industries'

import bookBanner from './schemaTypes/book/bookBanner'
import bookInfo from './schemaTypes/book/bookInfo'
import bookTestimonial from './schemaTypes/book/bookTestimonial'
import insideBook from './schemaTypes/book/insideBook'
import meetAuthor from './schemaTypes/book/meetAuthor'
import newsletterSignup from './schemaTypes/book/newsletterSignup'

import faq from './schemaTypes/faq/faq'

import featuredArticles from './schemaTypes/insights/featuredArticles'
import insightsBanner from './schemaTypes/insights/insightsBanner'
import insightsVideos from './schemaTypes/insights/insightsVideos'
import youtubeVideos from './schemaTypes/insights/youtubeVideos'

import faqs from './schemaTypes/learning-hub/faqs'
import industryFocus from './schemaTypes/learning-hub/industryFocus'
import introductoryClass from './schemaTypes/learning-hub/introductoryClass'
import learningBanner from './schemaTypes/learning-hub/learningBanner'
import programs from './schemaTypes/learning-hub/programs'
import whatLearn from './schemaTypes/learning-hub/whatLearn'

export default defineConfig({
  name: 'default',
  title: 'XBD Sanity Studio',
  projectId: '6bjtp9fw',
  dataset: 'production',
  basePath: '/',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: [
      // Home schemas
      banner,
      exponentialEconomy,
      exponentialJourney,
      newsletter,
      pricingPlan,
      quoteCarousel,
      resourcesSlider,
      slideshow,
      toolsCarousel,
      whatIsExponential,
      whyChoose,
      whyExponentialNow,
      // About Anuj schemas
      aboutTitle,
      anujNewsletter,
      callToAction,
      groupCoaching,
      industries,
      // Book schemas
      bookBanner,
      bookInfo,
      bookTestimonial,
      insideBook,
      meetAuthor,
      newsletterSignup,
      // FAQ schema
      faq,
      // Insights schemas
      featuredArticles,
      insightsBanner,
      insightsVideos,
      youtubeVideos,
      // Learning Hub schemas
      faqs,
      industryFocus,
      introductoryClass,
      learningBanner,
      programs,
      whatLearn,
    ],
  },
})


