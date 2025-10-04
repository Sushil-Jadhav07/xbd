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

export async function getExponentialEconomyData() {
  const query = `*[_type == "exponentialEconomy"][0]{
    label,
    title,
    highlightText,
    subtitle,
    primaryButton,
    secondaryButton,
    convergingForces,
    divergingForces
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching exponential economy data:', error)
    return null
  }
}


export async function getWhatIsExponentialData() {
  const query = `*[_type == "whatIsExponential"][0]{
    title,
    highlightText,
    subtitle,
    features
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
    resources
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
    tools
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
    slides
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
  subtitle,
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
    slides
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
    bookCoverImage
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
    testimonials
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
    mainImage
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
    modules,
    endorsementsTitle,
    endorsements,
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
    videoUrl
  }`
  
  try {
    return await client.fetch(query)
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
    keynotesList
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
    mainFocusImage,
    industriesList
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
    mainImage,
    smallImage1,
    smallImage2
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


