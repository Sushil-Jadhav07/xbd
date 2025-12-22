/**
 * Sanity Studio Structure Configuration
 * 
 * This file defines the hierarchical structure for your Sanity Studio.
 * Copy this configuration into your sanity.config.js file in your Studio directory.
 * 
 * The structure organizes your content into Pages and Sections, matching
 * the deployed version's organization.
 */

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Home Page
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Sections')
            .items([
              S.listItem()
                .title('Home Banner')
                .child(
                  S.document()
                    .schemaType('banner')
                    .documentId('home-banner')
                ),
              S.listItem()
                .title('Home Slideshow')
                .child(
                  S.document()
                    .schemaType('slideshow')
                    .documentId('home-slideshow')
                ),
              S.listItem()
                .title('What is Exponential Section')
                .child(
                  S.document()
                    .schemaType('whatIsExponential')
                    .documentId('what-is-exponential')
                ),
              S.listItem()
                .title('Why Choose Section')
                .child(
                  S.document()
                    .schemaType('whyChoose')
                    .documentId('why-choose')
                ),
              S.listItem()
                .title('Why Exponential Now Section')
                .child(
                  S.document()
                    .schemaType('whyExponentialNow')
                    .documentId('why-exponential-now')
                ),
              S.listItem()
                .title('Resources Slider Section')
                .child(
                  S.document()
                    .schemaType('resourcesSlider')
                    .documentId('resources-slider')
                ),
              S.listItem()
                .title('Image Banner Section')
                .child(
                  S.document()
                    .schemaType('imageBanner')
                    .documentId('image-banner')
                ),
              S.listItem()
                .title('Exponential Economy Section')
                .child(
                  S.document()
                    .schemaType('exponentialEconomy')
                    .documentId('exponential-economy')
                ),
              S.listItem()
                .title('Tools Carousel Section')
                .child(
                  S.document()
                    .schemaType('toolsCarousel')
                    .documentId('tools-carousel')
                ),
              S.listItem()
                .title('Quote Carousel Section')
                .child(
                  S.document()
                    .schemaType('quoteCarousel')
                    .documentId('quote-carousel')
                ),
              S.listItem()
                .title('Pricing Plan Section')
                .child(
                  S.document()
                    .schemaType('pricingPlan')
                    .documentId('pricing-plan')
                ),
              S.listItem()
                .title('Newsletter Section')
                .child(
                  S.document()
                    .schemaType('newsletter')
                    .documentId('newsletter')
                ),
              S.listItem()
                .title('Exponential Journey Section')
                .child(
                  S.document()
                    .schemaType('exponentialJourney')
                    .documentId('exponential-journey')
                ),
            ])
        ),

      // Book Page
      S.listItem()
        .title('Book Page')
        .child(
          S.list()
            .title('Book Page Sections')
            .items([
              S.listItem()
                .title('Book Banner')
                .child(
                  S.document()
                    .schemaType('bookBanner')
                    .documentId('book-banner')
                ),
              S.listItem()
                .title('Book Info')
                .child(
                  S.document()
                    .schemaType('bookInfo')
                    .documentId('book-info')
                ),
              S.listItem()
                .title('Book Testimonials')
                .child(
                  S.document()
                    .schemaType('bookTestimonial')
                    .documentId('book-testimonial')
                ),
              S.listItem()
                .title('Inside the Book')
                .child(
                  S.document()
                    .schemaType('insideBook')
                    .documentId('inside-book')
                ),
              S.listItem()
                .title('Meet Author')
                .child(
                  S.document()
                    .schemaType('meetAuthor')
                    .documentId('meet-author')
                ),
              S.listItem()
                .title('Book FAQs')
                .child(
                  S.document()
                    .schemaType('bookFaqs')
                    .documentId('book-faqs')
                ),
              S.listItem()
                .title('Tools Frameworks Timeline')
                .child(
                  S.document()
                    .schemaType('toolsFrameworksTimeline')
                    .documentId('tools-frameworks-timeline')
                ),
              S.listItem()
                .title('Newsletter Signup')
                .child(
                  S.document()
                    .schemaType('newsletterSignup')
                    .documentId('newsletter-signup')
                ),
            ])
        ),

      // About Anuj Page
      S.listItem()
        .title('About Anuj Page')
        .child(
          S.list()
            .title('About Anuj Page Sections')
            .items([
              S.listItem()
                .title('About Title Section')
                .child(
                  S.document()
                    .schemaType('aboutTitle')
                    .documentId('about-title')
                ),
              S.listItem()
                .title('Anuj Newsletter Section')
                .child(
                  S.document()
                    .schemaType('anujNewsletter')
                    .documentId('anuj-newsletter')
                ),
              S.listItem()
                .title('Call to Action Section')
                .child(
                  S.document()
                    .schemaType('callToAction')
                    .documentId('call-to-action')
                ),
              S.listItem()
                .title('Group Coaching Section')
                .child(
                  S.document()
                    .schemaType('groupCoaching')
                    .documentId('group-coaching')
                ),
              S.listItem()
                .title('Industries Engagement Section')
                .child(
                  S.document()
                    .schemaType('industries')
                    .documentId('industries')
                ),
              S.listItem()
                .title('Keynotes')
                .child(
                  S.document()
                    .schemaType('keynotes')
                    .documentId('keynotes')
                ),
            ])
        ),

      // Learning Hub Page
      S.listItem()
        .title('Learning Hub Page')
        .child(
          S.list()
            .title('Learning Hub Page Sections')
            .items([
              S.listItem()
                .title('Learning Banner')
                .child(
                  S.document()
                    .schemaType('learningBanner')
                    .documentId('learning-banner')
                ),
              S.listItem()
                .title('Programs')
                .child(
                  S.document()
                    .schemaType('programs')
                    .documentId('programs')
                ),
              S.listItem()
                .title('Industry Focus')
                .child(
                  S.document()
                    .schemaType('industryFocus')
                    .documentId('industry-focus')
                ),
              S.listItem()
                .title('What Learn')
                .child(
                  S.document()
                    .schemaType('whatLearn')
                    .documentId('what-learn')
                ),
              S.listItem()
                .title('Introductory Class')
                .child(
                  S.document()
                    .schemaType('introductoryClass')
                    .documentId('introductory-class')
                ),
              S.listItem()
                .title('FAQs')
                .child(
                  S.document()
                    .schemaType('faqs')
                    .documentId('faqs')
                ),
              S.listItem()
                .title('Exponential Journey')
                .child(
                  S.document()
                    .schemaType('exponentialJourney')
                    .documentId('learning-hub-exponential-journey')
                ),
            ])
        ),

      // FAQ Page
      S.listItem()
        .title('FAQ Page')
        .child(
          S.document()
            .schemaType('faqPage')
            .documentId('faq-page')
        ),

      // Insights Page
      S.listItem()
        .title('Insights Page')
        .child(
          S.list()
            .title('Insights Page Sections')
            .items([
              S.listItem()
                .title('Insights Banner')
                .child(
                  S.document()
                    .schemaType('insightsBanner')
                    .documentId('insights-banner')
                ),
              S.listItem()
                .title('Featured Articles')
                .child(
                  S.document()
                    .schemaType('featuredArticles')
                    .documentId('featured-articles')
                ),
              S.listItem()
                .title('YouTube Videos')
                .child(
                  S.document()
                    .schemaType('youtubeVideos')
                    .documentId('youtube-videos')
                ),
              S.listItem()
                .title('Insights Videos')
                .child(
                  S.document()
                    .schemaType('insightsVideos')
                    .documentId('insights-videos')
                ),
            ])
        ),
    ])


