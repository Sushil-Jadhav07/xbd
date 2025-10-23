export default {
    name: 'whyExponentialNow',
    title: 'Why Exponential Now Section',
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
        name: 'stats',
        title: 'Statistics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'number',
                title: 'Statistic Number',
                type: 'string',
                description: 'e.g., "15X", "3.5X", "280X"',
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Stat Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Stat Description',
                type: 'text',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.max(5).min(1)
      },
      {
        name: 'ctaButton',
        title: 'CTA Button',
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
      }
    ]
  }