import { client } from './sanity'


// Home page Queries
export async function getBannerData() {
  const query = `*[_type == "banner"][0]{
    title,
    highlightText,
    titleafter,  // Add this line
    subtitle,
    primaryButton,
    secondaryButton
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching banner data:', error)
    return null
  }
}

export async function getSlideshowData() {
  const query = `*[_type == "slideshow"][0]{
    slides[]{
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      alt,
      title,
      highlightText,
      titleafter,
      subtitle,
      primaryButton{
        text
      },
      secondaryButton{
        text,
        link
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching slideshow data:', error)
    return null
  }
}

export async function getExponentialEconomyData() {
  const query = `*[_type == "exponentialEconomy"][0]{
    mainQuestion,
    highlightedWord,
    frameworkTitle,
    description,
    bannerImage{
      asset->{
        _id,
        url
      },
      alt
    },
    learnMoreButton
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching exponential economy data:', error)
    return null
  }
}

export async function getExponentialJourneyData() {
  const query = `*[_type == "exponentialJourney"][0]{
    heroSection{
      titleStart,
      highlightText,
      titleEnd,
      subtitle,
      mountainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      journeyPoints
    },
    tabs,
    stages
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching exponential journey data:', error)
    return null
  }
}


export async function getWhatIsExponentialData() {
  const query = `*[_type == "whatIsExponential"][0]{
    title,
    highlightText,
    subtitle,
    features[]{
      title,
      description,
      hasButton,
      buttonText,
      buttonLink,
      iconType,
      useImage,
      mediaType,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      videoUrl,
      uploadedVideo{
        asset->{
          _id,
          url,
          mimeType
        }
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching what is exponential data:', error)
    return null
  }
}


export async function getWhyChooseData() {
  const query = `*[_type == "whyChoose"][0]{
    label,
    titleStart,
    highlightText,
    titleEnd,
    boldText,
    quote,
    authorName,
    authorTitle,
    primaryButton,
    secondaryButton,
    mediaType,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    videoUrl,
    uploadedVideo{
      asset->{
        _id,
        url,
        mimeType
      }
    },
    videoThumbnail{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching why choose data:', error)
    return null
  }
}


export async function getWhyExponentialNowData() {
  const query = `*[_type == "whyExponentialNow"][0]{
    label,
    title,
    highlightText,
    subtitle,
    stats,
    ctaButton
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching why exponential now data:', error)
    return null
  }
}



export async function getResourcesSliderData() {
  const query = `*[_type == "resourcesSlider"][0]{
    label,
    title,
    highlightText,
    subtitle,
    resources[]{
      title,
      description,
      meta,
      buttonText,
      buttonLink,
      iconType,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching resources slider data:', error)
    return null
  }
}


export async function getToolsCarouselData() {
  const query = `*[_type == "toolsCarousel"][0]{
    label,
    title,
    highlightText,
    subtitle,
    tools[]{
      title,
      description,
      buttonText,
      buttonLink,
      mediaType,
      videoUrl,
      videoFile{
        asset->{
          _id,
          url
        }
      },
      thumbnail{
        asset->{
          _id,
          url
        },
        alt
      },
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching tools carousel data:', error)
    return null
  }
}


export async function getQuoteCarouselData() {
  const query = `*[_type == "quoteCarousel"][0]{
    subtitle,
    quoteText,
    primaryButton,
    secondaryButton,
    mediaType,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    imageAlt,
    videoUrl,
    uploadedVideo{
      asset->{
        _id,
        url,
        mimeType
      }
    },
    videoThumbnail{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching quote carousel data:', error)
    return null
  }
}


export async function getPricingPlanData() {
  const query = `*[_type == "pricingPlan"][0]{
    label,
    title,
    highlightText,
    subtitle,
    plans,
    mainCtaButton,
    ctaTitle,
    ctaSubtext,
    features
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching pricing plan data:', error)
    return null
  }
}


export async function getNewsletterData() {
  const query = `*[_type =="newsletter"][0]{
    label,
    title,
    description,
    inputPlaceholder,
    buttonText,
    privacyNote
  }`

  try {
    return await client.fetch(query)
  }catch (error){
    console.error('Error fetching newsletter:', error)
    return null
  }
}


export async function getImageBannerData() {
  const query = `*[_type == "imageBanner"][0]{
    title,
    slides[]{
      _key,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      alt,
      link
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching image banner data:', error)
    return null
  }
}



// Book Page Queries
export async function getBookBannerData() {
  const query = `*[_type == "bookBanner"][0]{
    categoryTag,
    titleLine1,
    titleLine2,
    titleLine3,
    description,
    keyFeatures,
    infoTags,
    primaryButton,
    secondaryButton,
    trustIndicator,
    bookCoverImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching book banner data:', error)
    return null
  }
}

export async function getBookTestimonialData() {
  const query = `*[_type == "bookTestimonial"][0]{
    title,
    subtitle,
    logos,
    testimonials[]{
      quote,
      author,
      title,
      rating,
      authorImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching book testimonial data:', error)
    return null
  }
}


export async function getBookInfoData() {
  const query = `*[_type == "bookInfo"][0]{
    topLabel,
    headline,
    headlineBold,
    limitedEditionBadge,
    metrics,
    primaryButton,
    secondaryButton,
    trustIndicator,
    supportingTitle,
    supportingDescription,
    companyLogos,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching book info data:', error)
    return null
  }
}


export async function getInsideBookData() {
  const query = `*[_type == "insideBook"][0]{
    title,
    subtitle,
    modules[]{
      module,
      description,
      videoUrl,
      videoTitle,
      partLabel,
      partTitle,
      videoSubtitle,
      videoDescription,
      highlights,
      caseStudies[]{
        name,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      },
      narrativeCta
    },
    endorsementsTitle,
    endorsements,
    videoSection{
      videoTitle,
      videoSubtitle,
      videoDescription,
      videoUrl,
      partLabel,
      partTitle,
      highlights,
      caseStudies[]{
        name,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      }
    },
    primaryButton,
    secondaryButton
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching inside book data:', error)
    return null
  }
}


export async function getMeetAuthorData() {
  const query = `*[_type == "meetAuthor"][0]{
    title,
    quote,
    authorBio,
    previousBook,
    primaryButton,
    secondaryButton,
    videoSection{
      videoTitle,
      videoDescription,
      mediaType,
      videoUrl,
      uploadedVideo{
        asset->{
          _id,
          url,
          mimeType
        }
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching meet author data:', error)
    return null
  }
}


export async function getNewsletterSignupData() {
  const query = `*[_type == "newsletterSignup"][0]{
    label,
    title,
    description,
    inputPlaceholder,
    buttonText,
    privacyNote
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching newsletter signup data:', error)
    return null
  }
}

export async function getBookFaqsData() {
  const query = `*[_type == "bookFaqs"][0]{
    sectionBadge,
    mainTitle,
    highlightedTitle,
    subtitle,
    sectionTitle,
    faqs[]{
      question,
      answer
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching book faqs data:', error)
    return null
  }
}

export async function getToolsFrameworksTimelineData() {
  const query = `*[_type == "toolsFrameworksTimeline"][0]{
    mainTitle,
    mainSubtitle,
    sections[]{
      stepNumber,
      stepTitle,
      frameworkTitle,
      descriptionParagraph1,
      descriptionParagraph2,
      descriptionParagraph3,
      highlightedText,
      bulletPoints,
      examplesTitle,
      examples,
      image{
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        alt,
        label
      },
      frameworkOverviewTitle,
      frameworkOverview,
      keyPillars[]{
        title,
        description
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching tools frameworks timeline data:', error)
    return null
  }
}


// About Anuj Section
export async function getAboutTitleData() {
  const query = `*[_type == "aboutTitle"][0]{
    roleTag,
    mainHeading,
    subHeading,
    description,
    skills,
    primaryButton{
      text,
      link
    },
    secondaryButton{
      text,
      link
    },
    clientResults,
    profileImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching about title data:', error)
    return null
  }
}

export async function getKeynotesData() {
  const query = `*[_type == "keynotes"][0]{
    title,
    keynotesList[]{
      title,
      subtitle,
      description,
      date,
      duration,
      availability,
      mode,
      videoUrl,
      thumbnail{
        asset->{
          _id,
          url
        },
        alt
      },
      trustText
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching keynotes data:', error)
    return null
  }
}


export async function getIndustriesData() {
  const query = `*[_type == "industries"][0]{
    title,
    mainFocusText,
    mainFocusImage{
      asset->{
        _id,
        url
      },
      alt
    },
    industriesList[]{
      name,
      icon{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching industries data:', error)
    return null
  }
}


export async function getCallToActionData() {
  const query = `*[_type == "callToAction"][0]{
    formTitle,
    formSubtitle,
    namePlaceholder,
    emailPlaceholder,
    enquiryOptions,
    buttonText,
    privacyText,
    privacyLinkText,
    socialLinks,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    smallImage1{
      asset->{
        _id,
        url
      },
      alt
    },
    smallImage2{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching call to action data:', error)
    return null
  }
}


export async function getGroupCoachingData() {
  const query = `*[_type == "groupCoaching"][0]{
    sectionTitle,
    sessions[]{
      title,
      description,
      mediaType,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      },
      videoUrl,
      tags[]{
        text,
        iconType
      },
      footer
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching group coaching data:', error)
    return null
  }
}


export async function getAnujNewsletterData() {
  const query = `*[_type == "anujNewsletter"][0]{
    badgeText,
    mainHeading,
    subtitle,
    features[]{
      icon,
      title,
      description
    },
    newsletterPlaceholder,
    subscribeButtonText,
    ctaButtons{
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching anuj newsletter data:', error)
    return null
  }
}


// Learning Hub Section Queries
export async function getLearningBannerData() {
  const query = `*[_type == "learningBanner"][0]{
    topLabel,
    mainHeading,
    description,
    keyFeatures,
    primaryButton{
      text,
      link
    },
    secondaryButton{
      text,
      link
    },
    tertiaryButton{
      text,
      link
    },
    disclaimerText,
    bannerImage{
      asset->{
        _id,
        url
      },
      alt
    },
    videoSection{
      videoTitle,
      videoDescription,
      mediaType,
      videoUrl,
      uploadedVideo{
        asset->{
          _id,
          url,
          mimeType
        }
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching learning banner data:', error)
    return null
  }
}

export async function getProgramsData() {
  const query = `*[_type == "programs"][0]{
    sectionTitle,
    subtitle,
    earlyAccessSection{
      heading,
      noteLabel,
      noteText
    },
    programs[]{
      programType,
      title,
      description,
      price,
      features,
      attributes[]{
        icon,
        text
      },
      primaryButton{
        text,
        link
      },
      secondaryButton{
        text,
        link
      },
      rating{
        score,
        learners
      },
      footerText
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching programs data:', error)
    return null
  }
}

export async function getIndustryFocusData() {
  const query = `*[_type == "industryFocus"][0]{
    focusLabel,
    mainTitle,
    subTitle,
    courseOverview,
    videoSection{
      videoTitle,
      videoDescription,
      mediaType,
      videoUrl,
      uploadedVideo{
        asset->{
          _id,
          url,
          mimeType
        }
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    instructorSection{
      title,
      description,
      trustText
    },
    quoteBlock{
      quoteText,
      attribution
    },
    learningOptions{
      title,
      metrics[]{
        value,
        label
      },
      formatTitle,
      formatDescription
    },
    featureSections[]{
      category,
      title,
      description
    },
    ctaSection{
      primaryButton{
        text,
        link
      },
      secondaryLink{
        text,
        url
      },
      disclaimer
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching industry focus data:', error)
    return null
  }
}

export async function getWhatLearnData() {
  const query = `*[_type == "whatLearn"][0]{
    sectionTag,
    mainHeading,
    description,
    featureHighlights[]{
      title,
      description
    },
    modules[]{
      number,
      title,
      description
    },
    requestInfoButton{
      text,
      link
    },
    sidebarContent{
      courseRating{
        title,
        rating,
        students
      },
      primaryButton{
        text,
        link
      },
      secondaryButton{
        text,
        link
      },
      whatYouGain{
        title,
        benefits
      },
      trustedBy{
        label,
        companies
      },
      clientResults{
        results,
        note
      },
      pricing{
        price
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching what learn data:', error)
    return null
  }
}

export async function getIntroductoryClassData() {
  const query = `*[_type == "introductoryClass"][0]{
    mainHeading,
    description,
    ctaButton{
      text,
      link
    },
    videoSection{
      mediaType,
      videoUrl,
      uploadedVideo{
        asset->{
          _id,
          url,
          mimeType
        }
      },
      videoThumbnail{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching introductory class data:', error)
    return null
  }
}

export async function getFaqsData() {
  const query = `*[_type == "faqs"][0]{
    sectionTitle,
    faqs[]{
      question,
      answer
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching faqs data:', error)
    return null
  }
}

// FAQ Page Query
export async function getFaqPageData() {
  const query = `*[_type == "faqPage"][0]{
    sectionBadge,
    mainTitle,
    highlightedTitle,
    subtitle,
    faqItems[]{
      question,
      answer
    },
    ctaSection{
      title,
      description,
      buttonText,
      buttonLink
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching FAQ page data:', error)
    return null
  }
}

// Insights Page Query
export async function getInsightsBannerData() {
  const query = `*[_type == "insightsBanner"][0]{
    bannerImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching Insights banner data:', error)
    return null
  }
}

export async function getFeaturedArticlesData() {
  const query = `*[_type == "featuredArticles"][0]{
    sectionTitle,
    sectionSubtitle,
    articles[]{
      authorName,
      authorImage{
        asset->{
          _id,
          url
        }
      },
      isVerified,
      postDate,
      postSnippet,
      postTitle,
      postImage{
        asset->{
          _id,
          url
        },
        alt
      },
      linkedinUrl,
      likes,
      comments
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching Featured Articles data:', error)
    return null
  }
}

export async function getYoutubeVideosData() {
  const query = `*[_type == "youtubeVideos"][0]{
    sectionTitle,
    sectionSubtitle,
    videos[]{
      videoTitle,
      videoUrl,
      videoIframe,
      videoDuration,
      publishDate,
      videoDescription,
      thumbnailUrl{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching YouTube Videos data:', error)
    return null
  }
}

export async function getInsightsVideosData() {
  const query = `*[_type == "insightsVideos"][0]{
    title,
    subtitle,
    videosList[]{
      title,
      videoUrl,
      date,
      duration
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching Insights Videos data:', error)
    return null
  }
}


