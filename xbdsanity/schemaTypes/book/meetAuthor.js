export default {
    name: 'meetAuthor',
    title: 'Meet the Author Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'quote',
        title: 'Author Quote',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'authorBio',
        title: 'Author Biography',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'previousBook',
        title: 'Previous Book Information',
        type: 'string',
        description: 'Info about previous publications'
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
      }
    ]
  }