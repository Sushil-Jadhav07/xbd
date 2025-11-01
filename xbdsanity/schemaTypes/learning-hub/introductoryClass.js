export default {
    name: 'introductoryClass',
    title: 'Introductory Class Section',
    type: 'document',
    fields: [
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
        description: 'Main headline text',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the introductory class',
        validation: Rule => Rule.required()
      },
      {
        name: 'ctaButton',
        title: 'Call-to-Action Button',
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
        name: 'videoSection',
        title: 'Video Section',
        type: 'object',
        fields: [
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
      }
    ]
  }
