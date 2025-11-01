export default {
    name: 'imageBanner',
    title: 'Image Banner Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'Main title for the section',
        validation: Rule => Rule.required()
      },
      {
        name: 'slides',
        title: 'Banner Slides',
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
            ],
            preview: {
              select: {
                title: 'alt',
                media: 'image'
              }
            }
          }
        ],
        validation: Rule => Rule.min(1).max(10)
      }
    ]
  }