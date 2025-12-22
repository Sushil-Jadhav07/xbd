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
        title: 'Book Modules/Chapters',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'module',
                title: 'Module/Chapter Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Module Description',
                type: 'text',
                description: 'Optional description (legacy field)'
              },
              {
                name: 'videoUrl',
                title: 'Module Video URL',
                type: 'url',
                description: 'YouTube URL for this specific module',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https']
                })
              },
              {
                name: 'videoTitle',
                title: 'Video Title',
                type: 'string',
                description: 'Title displayed below the video'
              },
              {
                name: 'partLabel',
                title: 'Part Label',
                type: 'string',
                description: 'e.g., "PART I", "PART II", "PART III"'
              },
              {
                name: 'partTitle',
                title: 'Part Title',
                type: 'string',
                description: 'e.g., "SCOPING", "BUILDING THE FOUNDATION", "SCALING"'
              },
              {
                name: 'videoSubtitle',
                title: 'Video Subtitle',
                type: 'string',
                description: 'Subtitle displayed below video title'
              },
              {
                name: 'videoDescription',
                title: 'Video Description',
                type: 'text',
                description: 'Description text displayed below subtitle'
              },
              {
                name: 'highlights',
                title: 'Key Highlights',
                type: 'array',
                of: [
                  {
                    type: 'string'
                  }
                ],
                description: 'List of key highlight bullet points'
              },
              {
                name: 'caseStudies',
                title: 'Case Studies',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'name',
                        title: 'Company Name',
                        type: 'string',
                        validation: Rule => Rule.required()
                      },
                      {
                        name: 'logo',
                        title: 'Company Logo',
                        type: 'image',
                        options: {
                          hotspot: true
                        },
                        description: 'Upload company logo image'
                      }
                    ]
                  }
                ],
                description: 'Company logos for case studies'
              },
              {
                name: 'narrativeCta',
                title: 'Narrative CTA',
                type: 'string',
                description: 'Call-to-action text displayed at the bottom (e.g., "ACT NOW BEFORE ITS TOO LATE")'
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
        title: 'Video Section (Default/Fallback)',
        type: 'object',
        description: 'Default video section content used as fallback if module-specific content is not provided',
        fields: [
          {
            name: 'videoTitle',
            title: 'Video Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'videoSubtitle',
            title: 'Video Subtitle',
            type: 'string'
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
          },
          {
            name: 'partLabel',
            title: 'Part Label',
            type: 'string',
            description: 'e.g., "PART I", "PART II", "PART III"'
          },
          {
            name: 'partTitle',
            title: 'Part Title',
            type: 'string',
            description: 'e.g., "SCOPING", "BUILDING THE FOUNDATION", "SCALING"'
          },
          {
            name: 'highlights',
            title: 'Key Highlights',
            type: 'array',
            of: [
              {
                type: 'string'
              }
            ],
            description: 'List of key highlight bullet points'
          },
          {
            name: 'caseStudies',
            title: 'Case Studies',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Company Name',
                    type: 'string',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'logo',
                    title: 'Company Logo',
                    type: 'image',
                    options: {
                      hotspot: true
                    },
                    description: 'Upload company logo image'
                  }
                ]
              }
            ],
            description: 'Company logos for case studies'
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
