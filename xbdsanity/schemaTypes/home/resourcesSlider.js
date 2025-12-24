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
      },
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        description: 'Main title text',
      },
      {
        name: 'highlightText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'The bold part of the title',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        description: 'Description below the title',
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
              },
              {
                name: 'description',
                title: 'Resource Description',
                type: 'text',
              },
              {
                name: 'meta',
                title: 'Meta Information',
                type: 'string',
                description: 'e.g., "212 Pages", "60-Min Strategy Call"',
                
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
                
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
                    { title: 'Microphone', value: 'microphone' },
                    { title: 'None', value: 'none' }
                  ]
                },
                
              },
              {
                name: 'image',
                title: 'Resource Image',
                type: 'image',
                description: 'Image to display for this resource',
                options: {
                  hotspot: true
                }
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }