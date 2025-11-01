export default {
    name: 'programs',
    title: 'Programs & Offerings Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle / Intro Line',
        type: 'text',
        description: 'Introductory text below the main title'
      },
      {
        name: 'programs',
        title: 'Programs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'programType',
                title: 'Program Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Self-Paced', value: 'self-paced' },
                    { title: 'Cohorted', value: 'cohorted' },
                    { title: 'Beginners', value: 'beginners' }
                  ]
                },
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Program Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'price',
                title: 'Price',
                type: 'string',
                description: 'e.g., "Rs: 1999/-", "On request", "Custom"'
              },
              {
                name: 'features',
                title: 'Key Features',
                type: 'array',
                of: [{ type: 'string' }],
                validation: Rule => Rule.max(5)
              },
              {
                name: 'attributes',
                title: 'Attributes',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'icon',
                        title: 'Icon Type',
                        type: 'string',
                        options: {
                          list: [
                            { title: 'Clock', value: 'clock' },
                            { title: 'Location', value: 'location' },
                            { title: 'Mode', value: 'mode' }
                          ]
                        }
                      },
                      {
                        name: 'text',
                        title: 'Attribute Text',
                        type: 'string'
                      }
                    ]
                  }
                ]
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
                name: 'rating',
                title: 'Rating',
                type: 'object',
                fields: [
                  {
                    name: 'score',
                    title: 'Rating Score',
                    type: 'string',
                    description: 'e.g., "5.0", "4.9★"'
                  },
                  {
                    name: 'learners',
                    title: 'Number of Learners',
                    type: 'string',
                    description: 'e.g., "50k learners"'
                  }
                ]
              },
              {
                name: 'footerText',
                title: 'Footer Text',
                type: 'string',
                description: 'Text at bottom of card'
              }
            ]
          }
        ],
        validation: Rule => Rule.max(3).min(1)
      },
      {
        name: 'earlyAccessSection',
        title: 'Early Access Pricing Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'e.g., "Get Early Access Pricing"'
          },
          {
            name: 'noteLabel',
            title: 'Note Label',
            type: 'string',
            description: 'e.g., "Note under table:"'
          },
          {
            name: 'noteText',
            title: 'Note Text',
            type: 'text',
            description: 'The note text (will be displayed in italics)'
          }
        ]
      }
    ]
  }
