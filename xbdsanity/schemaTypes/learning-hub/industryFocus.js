export default {
    name: 'industryFocus',
    title: 'Industry Focus Section',
    type: 'document',
    fields: [
      {
        name: 'focusLabel',
        title: 'Focus Label',
        type: 'string',
        description: 'Label at the top (e.g., "Instructor-Led Focus")',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string',
        description: 'Main course title',
        validation: Rule => Rule.required()
      },
      {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string',
        description: 'Subtitle with emphasis',
        validation: Rule => Rule.required()
      },
      {
        name: 'courseOverview',
        title: 'Course Overview',
        type: 'text',
        description: 'Course description',
        validation: Rule => Rule.required()
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
            description: 'Title for the video section'
          },
          {
            name: 'videoDescription',
            title: 'Video Description',
            type: 'text',
            description: 'Description of the video content'
          },
          {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
              list: [
                { title: 'Video URL', value: 'url' },
                { title: 'Upload Video', value: 'upload' }
              ]
            },
            initialValue: 'url',
            description: 'Choose how to provide the video'
          },
          {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'YouTube, Vimeo, or direct video URL',
            hidden: ({ parent }) => parent?.mediaType !== 'url'
          },
          {
            name: 'uploadedVideo',
            title: 'Upload Video File',
            type: 'file',
            options: {
              accept: 'video/*'
            },
            description: 'Upload a video file (MP4, WebM, etc.)',
            hidden: ({ parent }) => parent?.mediaType !== 'upload'
          },
          {
            name: 'videoThumbnail',
            title: 'Video Thumbnail',
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for accessibility'
              }
            ],
            description: 'Custom thumbnail for the video (optional)'
          }
        ]
      },
      {
        name: 'instructorSection',
        title: 'Meet the Instructor Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Section Title',
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
            name: 'trustText',
            title: 'Trust Text',
            type: 'string',
            description: 'e.g., "Trusted by leaders"'
          }
        ]
      },
      {
        name: 'quoteBlock',
        title: 'Instructor Quote Block',
        type: 'object',
        fields: [
          {
            name: 'quoteText',
            title: 'Quote Text',
            type: 'text',
            description: 'The quote to display'
          },
          {
            name: 'attribution',
            title: 'Attribution',
            type: 'string',
            description: 'Who said the quote (e.g., name and role)'
          }
        ]
      },
      {
        name: 'learningOptions',
        title: 'Learning Options Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Section Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'metrics',
            title: 'Key Metrics',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'value',
                    title: 'Metric Value',
                    type: 'string',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'label',
                    title: 'Metric Label',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ]
              }
            ],
            validation: Rule => Rule.max(3).min(1)
          },
          {
            name: 'formatTitle',
            title: 'Format Section Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'formatDescription',
            title: 'Format Description',
            type: 'text',
            validation: Rule => Rule.required()
          }
        ]
      },
      {
        name: 'featureSections',
        title: 'Feature Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Section Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.max(3).min(1)
      },
      {
        name: 'ctaSection',
        title: 'Call-to-Action Section',
        type: 'object',
        fields: [
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
            name: 'secondaryLink',
            title: 'Secondary Link',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Link Text',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'url',
                title: 'Link URL',
                type: 'string'
              }
            ]
          },
          {
            name: 'disclaimer',
            title: 'Disclaimer Text',
            type: 'string',
            description: 'Text below the buttons'
          }
        ]
      }
    ]
  }
