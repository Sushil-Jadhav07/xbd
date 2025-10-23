export default {
    name: 'quoteCarousel',
    title: 'Quote Carousel Section',
    type: 'document',
    fields: [
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        description: 'Text above the carousel',
        validation: Rule => Rule.required()
      },
      {
        name: 'quoteText',
        title: 'Quote Text',
        type: 'text',
        description: 'Main quote/headline text',
        validation: Rule => Rule.required()
      },
      {
        name: 'primaryButton',
        title: 'Primary Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'string'
          }
        ]
      },
      {
        name: 'secondaryButton',
        title: 'Secondary Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'string'
          }
        ]
      },
      {
        name: 'slides',
        title: 'Carousel Slides',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Slide Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: Rule => Rule.required()
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for accessibility',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1).max(6)
      }
    ]
  }