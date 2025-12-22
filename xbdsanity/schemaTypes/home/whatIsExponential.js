export default {
    name: 'whatIsExponential',
    title: 'What is Exponential Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        description: 'e.g., "What is"',
        validation: Rule => Rule.required()
      },
      {
        name: 'highlightText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'e.g., "Exponential by Design"',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'The description below the main title',
        validation: Rule => Rule.required()
      },
      {
        name: 'features',
        title: 'Features',
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
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'hasButton',
                title: 'Has Button',
                type: 'boolean',
                initialValue: false
              },
              {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string',
                hidden: ({ parent }) => !parent?.hasButton
              },
              {
                name: 'buttonLink',
                title: 'Button Link',
                type: 'string',
                hidden: ({ parent }) => !parent?.hasButton
              },
              {
                name: 'iconType',
                title: 'Icon Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Material Design', value: 'design' },
                    { title: 'Eye', value: 'eye' },
                    { title: 'Link', value: 'link' }
                  ]
                }
              },
              {
                name: 'image',
                title: 'Image',
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
                ]
              },
              {
                name: 'useImage',
                title: 'Use Image Instead of Icon',
                type: 'boolean',
                initialValue: false,
                description: 'Check this to use the uploaded image instead of the selected icon'
              },
              {
                name: 'mediaType',
                title: 'Media Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Icon', value: 'icon' },
                    { title: 'Image', value: 'image' },
                    { title: 'Video', value: 'video' }
                  ]
                },
                initialValue: 'icon',
                description: 'Choose the type of media to display'
              },
              {
                name: 'videoUrl',
                title: 'Video URL',
                type: 'url',
                description: 'YouTube, Vimeo, or direct video URL',
                hidden: ({ parent }) => parent?.mediaType !== 'video'
              },
              {
                name: 'uploadedVideo',
                title: 'Upload Video File',
                type: 'file',
                options: {
                  accept: 'video/*'
                },
                description: 'Upload a video file (MP4, WebM, etc.)',
                hidden: ({ parent }) => parent?.mediaType !== 'video'
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
                description: 'Custom thumbnail for the video (optional)',
                hidden: ({ parent }) => parent?.mediaType !== 'video'
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }