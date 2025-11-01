export default {
    name: 'industries',
    title: 'Industries Engagement Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainFocusText',
        title: 'Main Focus Text',
        type: 'string',
        description: 'Text for the large left box',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainFocusImage',
        title: 'Main Focus Image',
        type: 'image',
        options: {
          hotspot: true
        },
        description: 'Optional image for the main focus area'
      },
      {
        name: 'industriesList',
        title: 'Industries List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Industry Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'icon',
                title: 'Industry Icon/Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }
        ],
        validation: Rule => Rule.max(8).min(1)
      }
    ]
  }