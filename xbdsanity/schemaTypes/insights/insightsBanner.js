export default {
  name: 'insightsBanner',
  title: 'Insights Banner',
  type: 'document',
  fields: [
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Full-width banner image for the Insights page',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for accessibility',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'bannerImage.alt',
      media: 'bannerImage'
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || 'Insights Banner',
        media: media
      }
    }
  }
}

