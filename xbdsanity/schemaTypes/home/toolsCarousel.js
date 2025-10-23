export default {
    name: 'toolsCarousel',
    title: 'Tools Carousel Section',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Section Label',
        type: 'string',
        description: 'Small text above the title',
        validation: Rule => Rule.required()
      },
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        description: 'Main title text',
        validation: Rule => Rule.required()
      },
      {
        name: 'highlightText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'The bold part of the title',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        description: 'Description below the title',
        validation: Rule => Rule.required()
      },
      {
        name: 'tools',
        title: 'Tools',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Tool Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Tool Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'buttonLink',
                title: 'Button Link',
                type: 'string'
              },
              {
                name: 'mediaType',
                title: 'Media Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Video URL', value: 'video' },
                    { title: 'Image', value: 'image' },
                    { title: 'None', value: 'none' }
                  ]
                },
                initialValue: 'none'
              },
              {
                name: 'videoUrl',
                title: 'Video URL',
                type: 'url',
                description: 'Direct link to video file (e.g., Cloudinary URL)',
                hidden: ({ parent }) => parent?.mediaType !== 'video'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                hidden: ({ parent }) => parent?.mediaType !== 'image'
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }