export default {
    name: 'callToAction',
    title: 'Call to Action Section',
    type: 'document',
    fields: [
      {
        name: 'formTitle',
        title: 'Form Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'formSubtitle',
        title: 'Form Subtitle',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'namePlaceholder',
        title: 'Name Field Placeholder',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'emailPlaceholder',
        title: 'Email Field Placeholder',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'enquiryOptions',
        title: 'Enquiry Type Options',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Options for the enquiry type dropdown',
        validation: Rule => Rule.min(1)
      },
      {
        name: 'buttonText',
        title: 'Submit Button Text',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'privacyText',
        title: 'Privacy Statement',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'privacyLinkText',
        title: 'Privacy Link Text',
        type: 'string'
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'object',
        fields: [
          {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
          },
          {
            name: 'facebook',
            title: 'Facebook URL',
            type: 'url'
          },
          {
            name: 'twitter',
            title: 'Twitter/X URL',
            type: 'url'
          }
        ]
      },
      {
        name: 'mainImage',
        title: 'Main Image (Large)',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'smallImage1',
        title: 'Small Image 1',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'smallImage2',
        title: 'Small Image 2',
        type: 'image',
        options: { hotspot: true }
      }
    ]
  }