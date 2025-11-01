import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'xbdsanity',
  projectId: '6bjtp9fw',
  dataset: 'production',


  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Home Page Group
            S.listItem()
              .title('Home Page')
              .child(
                S.list()
                  .title('Home Page Sections')
                  .items([
                    S.documentTypeListItem('banner').title('Home Banner'),
                    S.documentTypeListItem('whatIsExponential').title('What is Exponential Section'),
                    S.documentTypeListItem('whyChoose').title('Why Choose Section'),
                    S.documentTypeListItem('whyExponentialNow').title('Why Exponential Now Section'),
                    S.documentTypeListItem('resourcesSlider').title('Resources Slider Section'),
                    S.documentTypeListItem('imageBanner').title('Image Banner Section'),
                    S.documentTypeListItem('exponentialEconomy').title('Exponential Economy Section'),
                    S.documentTypeListItem('toolsCarousel').title('Tools Carousel Section'),
                    S.documentTypeListItem('quoteCarousel').title('Quote Carousel Section'),
                    S.documentTypeListItem('pricingPlan').title('Pricing Plan Section'),
                    S.documentTypeListItem('newsletter').title('Newsletter Section'),
                    S.documentTypeListItem('exponentialJourney').title('Exponential Journey Section'),
                  ])
              ),

            // Book Page Group
            S.listItem()
              .title('Book Page')
              .child(
                S.list()
                  .title('Book Page Sections')
                  .items([
                    S.documentTypeListItem('bookBanner').title('Book Banner'),
                    S.documentTypeListItem('bookTestimonial').title('Testimonials'),
                    S.documentTypeListItem('bookInfo').title('Book Information'),
                    S.documentTypeListItem('insideBook').title('Inside the Book'),
                    S.documentTypeListItem('meetAuthor').title('Meet Author Section'),
                    S.documentTypeListItem('newsletterSignup').title('Newsletter Section'),
                  ])
              ),

            // About Anuj Page Group (example)
            S.listItem()
              .title('About Anuj Page')
              .child(
                S.list()
                  .title('About Anuj Sections')
                  .items([
                    S.documentTypeListItem('aboutTitle').title('About Title Section'),
                    S.documentTypeListItem('keynotes').title('Keynotes Section'),
                    S.documentTypeListItem('industries').title('Industries Section'),
                    S.documentTypeListItem('callToAction').title('Call to Action Section'),
                    S.documentTypeListItem('groupCoaching').title('Group Coaching Section'), // Add this
                    S.documentTypeListItem('anujNewsletter').title('Newsletter Section'), // Add this
                    // Add more About page sections here
                  ])
              ),

            // Learning Hub Page Group
            S.listItem()
              .title('Learning Hub Page')
              .child(
                S.list()
                  .title('Learning Hub Sections')
                  .items([
                    S.documentTypeListItem('learningBanner').title('Learning Banner'),
                    S.documentTypeListItem('programs').title('Programs & Offerings'),
                    S.documentTypeListItem('industryFocus').title('Industry Focus'),
                    S.documentTypeListItem('whatLearn').title('What You\'ll Learn'),
                    S.documentTypeListItem('introductoryClass').title('Introductory Class'),
                    S.documentTypeListItem('faqs').title('FAQ Section'),
                  ])
              ),
          ])
    }),
    visionTool()
  ],

  // plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
