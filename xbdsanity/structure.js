/**
 * Sanity Studio Structure Configuration (Flexible Version)
 * 
 * This version automatically lists all documents of each type,
 * rather than using hardcoded document IDs.
 * 
 * Copy this into your sanity.config.js file in your Studio directory.
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
                  S.documentTypeList('banner')
                    .title('Banner')
                    .filter('_type == "banner"')
                ),
              // Note: slideshow schema type is missing - needs to be created
              S.listItem()
                .title('Home Slideshow')
                .child(
                  S.documentTypeList('slideshow')
                    .title('Slideshow')
                    .filter('_type == "slideshow"')
                ),
              S.listItem()
                .title('What is Exponential Section')
                .child(
                  S.documentTypeList('whatIsExponential')
                    .title('What is Exponential')
                    .filter('_type == "whatIsExponential"')
                ),
              S.listItem()
                .title('Why Choose Section')
                .child(
                  S.documentTypeList('whyChoose')
                    .title('Why Choose')
                    .filter('_type == "whyChoose"')
                ),
              S.listItem()
                .title('Why Exponential Now Section')
                .child(
                  S.documentTypeList('whyExponentialNow')
                    .title('Why Exponential Now')
                    .filter('_type == "whyExponentialNow"')
                ),
              S.listItem()
                .title('Resources Slider Section')
                .child(
                  S.documentTypeList('resourcesSlider')
                    .title('Resources Slider')
                    .filter('_type == "resourcesSlider"')
                ),
              // Note: imageBanner schema type is missing - needs to be created
              // S.listItem()
              //   .title('Image Banner Section')
              //   .child(
              //     S.documentTypeList('imageBanner')
              //       .title('Image Banner')
              //       .filter('_type == "imageBanner"')
              //   ),
              S.listItem()
                .title('Exponential Economy Section')
                .child(
                  S.documentTypeList('exponentialEconomy')
                    .title('Exponential Economy')
                    .filter('_type == "exponentialEconomy"')
                ),
              S.listItem()
                .title('Tools Carousel Section')
                .child(
                  S.documentTypeList('toolsCarousel')
                    .title('Tools Carousel')
                    .filter('_type == "toolsCarousel"')
                ),
              S.listItem()
                .title('Quote Carousel Section')
                .child(
                  S.documentTypeList('quoteCarousel')
                    .title('Quote Carousel')
                    .filter('_type == "quoteCarousel"')
                ),
              S.listItem()
                .title('Pricing Plan Section')
                .child(
                  S.documentTypeList('pricingPlan')
                    .title('Pricing Plan')
                    .filter('_type == "pricingPlan"')
                ),
              S.listItem()
                .title('Newsletter Section')
                .child(
                  S.documentTypeList('newsletter')
                    .title('Newsletter')
                    .filter('_type == "newsletter"')
                ),
              S.listItem()
                .title('Exponential Journey Section')
                .child(
                  S.documentTypeList('exponentialJourney')
                    .title('Exponential Journey')
                    .filter('_type == "exponentialJourney"')
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
                  S.documentTypeList('bookBanner')
                    .title('Book Banner')
                    .filter('_type == "bookBanner"')
                ),
              S.listItem()
                .title('Book Info')
                .child(
                  S.documentTypeList('bookInfo')
                    .title('Book Info')
                    .filter('_type == "bookInfo"')
                ),
              S.listItem()
                .title('Book Testimonials')
                .child(
                  S.documentTypeList('bookTestimonial')
                    .title('Book Testimonials')
                    .filter('_type == "bookTestimonial"')
                ),
              S.listItem()
                .title('Inside the Book')
                .child(
                  S.documentTypeList('insideBook')
                    .title('Inside the Book')
                    .filter('_type == "insideBook"')
                ),
              S.listItem()
                .title('Meet Author')
                .child(
                  S.documentTypeList('meetAuthor')
                    .title('Meet Author')
                    .filter('_type == "meetAuthor"')
                ),
              // Note: bookFaqs schema type is missing - needs to be created
              // S.listItem()
              //   .title('Book FAQs')
              //   .child(
              //     S.documentTypeList('bookFaqs')
              //       .title('Book FAQs')
              //       .filter('_type == "bookFaqs"')
              //   ),
              // Note: toolsFrameworksTimeline schema type is missing - needs to be created
              // S.listItem()
              //   .title('Tools Frameworks Timeline')
              //   .child(
              //     S.documentTypeList('toolsFrameworksTimeline')
              //       .title('Tools Frameworks Timeline')
              //       .filter('_type == "toolsFrameworksTimeline"')
              //   ),
              S.listItem()
                .title('Newsletter Signup')
                .child(
                  S.documentTypeList('newsletterSignup')
                    .title('Newsletter Signup')
                    .filter('_type == "newsletterSignup"')
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
                  S.documentTypeList('aboutTitle')
                    .title('About Title')
                    .filter('_type == "aboutTitle"')
                ),
              S.listItem()
                .title('Anuj Newsletter Section')
                .child(
                  S.documentTypeList('anujNewsletter')
                    .title('Anuj Newsletter')
                    .filter('_type == "anujNewsletter"')
                ),
              S.listItem()
                .title('Call to Action Section')
                .child(
                  S.documentTypeList('callToAction')
                    .title('Call to Action')
                    .filter('_type == "callToAction"')
                ),
              S.listItem()
                .title('Group Coaching Section')
                .child(
                  S.documentTypeList('groupCoaching')
                    .title('Group Coaching')
                    .filter('_type == "groupCoaching"')
                ),
              S.listItem()
                .title('Industries Engagement Section')
                .child(
                  S.documentTypeList('industries')
                    .title('Industries')
                    .filter('_type == "industries"')
                ),
              // Note: keynotes schema type is missing - needs to be created
              // S.listItem()
              //   .title('Keynotes')
              //   .child(
              //     S.documentTypeList('keynotes')
              //       .title('Keynotes')
              //       .filter('_type == "keynotes"')
              //   ),
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
                  S.documentTypeList('learningBanner')
                    .title('Learning Banner')
                    .filter('_type == "learningBanner"')
                ),
              S.listItem()
                .title('Programs')
                .child(
                  S.documentTypeList('programs')
                    .title('Programs')
                    .filter('_type == "programs"')
                ),
              S.listItem()
                .title('Industry Focus')
                .child(
                  S.documentTypeList('industryFocus')
                    .title('Industry Focus')
                    .filter('_type == "industryFocus"')
                ),
              S.listItem()
                .title('What Learn')
                .child(
                  S.documentTypeList('whatLearn')
                    .title('What Learn')
                    .filter('_type == "whatLearn"')
                ),
              S.listItem()
                .title('Introductory Class')
                .child(
                  S.documentTypeList('introductoryClass')
                    .title('Introductory Class')
                    .filter('_type == "introductoryClass"')
                ),
              S.listItem()
                .title('FAQs')
                .child(
                  S.documentTypeList('faqs')
                    .title('FAQs')
                    .filter('_type == "faqs"')
                ),
            ])
        ),

      // FAQ Page
      S.listItem()
        .title('FAQ Page')
        .child(
          S.documentTypeList('faqPage')
            .title('FAQ Page')
            .filter('_type == "faqPage"')
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
                  S.documentTypeList('insightsBanner')
                    .title('Insights Banner')
                    .filter('_type == "insightsBanner"')
                ),
              S.listItem()
                .title('Featured Articles')
                .child(
                  S.documentTypeList('featuredArticles')
                    .title('Featured Articles')
                    .filter('_type == "featuredArticles"')
                ),
              S.listItem()
                .title('YouTube Videos')
                .child(
                  S.documentTypeList('youtubeVideos')
                    .title('YouTube Videos')
                    .filter('_type == "youtubeVideos"')
                ),
              S.listItem()
                .title('Insights Videos')
                .child(
                  S.documentTypeList('insightsVideos')
                    .title('Insights Videos')
                    .filter('_type == "insightsVideos"')
                ),
            ])
        ),
    ])


