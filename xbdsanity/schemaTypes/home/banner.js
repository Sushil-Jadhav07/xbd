export default {
    name: 'banner',
    title: 'Home Banner',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'highlightText',
        title: 'Highlighted Text (3x Growth...)',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleafter',
        title: 'Main Title After',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
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
      }
    ]
  }