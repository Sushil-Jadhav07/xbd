export default {
    name: 'learningBanner',
    title: 'Learning Hub Banner Section',
    type: 'document',
    fields: [
      {
        name: 'topLabel',
        title: 'Top Label',
        type: 'string',
        description: 'Small label at the top (e.g., "Empower your Growth")',
        validation: Rule => Rule.required()
      },
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
        validation: Rule => Rule.required()
      },
      {
        name: 'keyFeatures',
        title: 'Key Features',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'List of key features/benefits',
        validation: Rule => Rule.max(5).min(1)
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
        name: 'tertiaryButton',
        title: 'Tertiary Button',
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
        name: 'disclaimerText',
        title: 'Disclaimer Text',
        type: 'string',
        description: 'Text with info icon at bottom',
        validation: Rule => Rule.required()
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
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
                { title: 'URL', value: 'url' },
                { title: 'Upload', value: 'upload' }
              ],
              layout: 'radio'
            },
            initialValue: 'url',
            validation: Rule => Rule.required()
          },
          {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'External video URL (YouTube, Vimeo, etc.)',
            hidden: ({ parent }) => parent?.mediaType !== 'url'
          },
          {
            name: 'uploadedVideo',
            title: 'Upload Video',
            type: 'file',
            description: 'Upload video file directly',
            options: {
              accept: 'video/*'
            },
            hidden: ({ parent }) => parent?.mediaType !== 'upload'
          },
          {
            name: 'videoThumbnail',
            title: 'Video Thumbnail',
            type: 'image',
            description: 'Custom thumbnail for the video',
            options: {
              hotspot: true
            }
          }
        ]
      }
    ]
  }
