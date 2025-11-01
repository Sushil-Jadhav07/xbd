export default {
    name: 'whatLearn',
    title: 'What You\'ll Learn Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTag',
        title: 'Section Tag',
        type: 'string',
        description: 'Tag at the top (e.g., "What you\'ll learn")',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainHeading',
        title: 'Main Heading',
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
        name: 'featureHighlights',
        title: 'Feature Highlights',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Feature Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Feature Description',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.max(3).min(1)
      },
      {
        name: 'modules',
        title: 'Modules',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'number',
                title: 'Module Number',
                type: 'number',
                validation: Rule => Rule.required().min(1).max(10)
              },
              {
                name: 'title',
                title: 'Module Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Module Description',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.max(5).min(1)
      },
      {
        name: 'requestInfoButton',
        title: 'Request Info Button',
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
        name: 'sidebarContent',
        title: 'Sidebar Content',
        type: 'object',
        fields: [
          {
            name: 'courseRating',
            title: 'Course Rating',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Rating Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'rating',
                title: 'Rating Score',
                type: 'string',
                description: 'e.g., "5★"'
              },
              {
                name: 'students',
                title: 'Number of Students',
                type: 'string',
                description: 'e.g., "50K+ students"'
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
            name: 'whatYouGain',
            title: 'What You\'ll Gain',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Section Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'benefits',
                title: 'Benefits',
                type: 'array',
                of: [{ type: 'string' }],
                validation: Rule => Rule.max(5)
              }
            ]
          },
          {
            name: 'trustedBy',
            title: 'Trusted By',
            type: 'object',
            fields: [
              {
                name: 'label',
                title: 'Label Text',
                type: 'string',
                description: 'e.g., "Trusted by teams at:"'
              },
              {
                name: 'companies',
                title: 'Companies Text',
                type: 'string',
                description: 'e.g., "Fortune 500 • Scaleups"'
              }
            ]
          },
          {
            name: 'clientResults',
            title: 'Client Results',
            type: 'object',
            fields: [
              {
                name: 'results',
                title: 'Results Text',
                type: 'string',
                description: 'e.g., "Client results: +28% retention • +3x experiment velocity"'
              },
              {
                name: 'note',
                title: 'Note Text',
                type: 'string',
                description: 'e.g., "No testimonials? Use anonymized case studies inside."'
              }
            ]
          },
          {
            name: 'pricing',
            title: 'Pricing',
            type: 'object',
            fields: [
              {
                name: 'price',
                title: 'Price Text',
                type: 'string',
                description: 'e.g., "Pricing: From $299 • Money-back guarantee"'
              }
            ]
          }
        ]
      }
    ]
  }
