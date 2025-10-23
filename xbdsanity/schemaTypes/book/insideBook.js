export default {
    name: 'insideBook',
    title: 'Inside the Book Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
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
        name: 'modules',
        title: 'Book Modules',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'module',
                title: 'Module Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Module Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'videoUrl',
                title: 'Module Video URL',
                type: 'url',
                description: 'YouTube URL for this specific module (optional)',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https']
                })
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      },
      {
        name: 'endorsementsTitle',
        title: 'Endorsements Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'endorsements',
        title: 'Endorsements',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'quote',
                title: 'Quote',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'author',
                title: 'Author/Title',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      },
      {
        name: 'videoSection',
        title: 'Video Section',
        type: 'object',
        fields: [
          {
            name: 'videoTitle',
            title: 'Video Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'videoDescription',
            title: 'Video Description',
            type: 'text'
          },
          {
            name: 'videoUrl',
            title: 'YouTube Video URL',
            type: 'url',
            description: 'Enter the full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
            validation: Rule => Rule.required().uri({
              scheme: ['http', 'https']
            })
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
      }
    ]
  }