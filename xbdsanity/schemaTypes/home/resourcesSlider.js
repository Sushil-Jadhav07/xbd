export default {
    name: 'resourcesSlider',
    title: 'Resources Slider Section',
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
        name: 'resources',
        title: 'Resources',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Resource Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Resource Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'meta',
                title: 'Meta Information',
                type: 'string',
                description: 'e.g., "212 Pages", "60-Min Strategy Call"',
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
                name: 'iconType',
                title: 'Icon Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Document', value: 'document' },
                    { title: 'Play', value: 'play' },
                    { title: 'Phone', value: 'phone' },
                    { title: 'Microphone', value: 'microphone' }
                  ]
                },
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }