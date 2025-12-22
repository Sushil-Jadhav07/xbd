export default {
    name: 'quoteCarousel',
    title: 'Quote Carousel Section',
    type: 'document',
    fields: [
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        description: 'Text above the carousel',
        validation: Rule => Rule.required()
      },
      {
        name: 'quoteText',
        title: 'Quote Text',
        type: 'text',
        description: 'Main quote/headline text',
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
      },
      {
        name: 'mediaType',
        title: 'Media Type',
        type: 'string',
        options: {
          list: [
            { title: 'Image', value: 'image' },
            { title: 'Video (YouTube/Vimeo URL)', value: 'video' },
            { title: 'Video (Upload)', value: 'videoUpload' }
          ],
          layout: 'radio'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
        hidden: ({ parent }) => parent?.mediaType !== 'image'
      },
      {
        name: 'imageAlt',
        title: 'Image Alt Text',
        type: 'string',
        description: 'Alternative text for accessibility',
        hidden: ({ parent }) => parent?.mediaType !== 'image'
      },
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
        description: 'YouTube or Vimeo video URL',
        hidden: ({ parent }) => parent?.mediaType !== 'video'
      },
      {
        name: 'uploadedVideo',
        title: 'Upload Video',
        type: 'file',
        options: {
          accept: 'video/*'
        },
        hidden: ({ parent }) => parent?.mediaType !== 'videoUpload'
      },
      {
        name: 'videoThumbnail',
        title: 'Video Thumbnail',
        type: 'image',
        description: 'Thumbnail to show before video plays (optional)',
        hidden: ({ parent }) => parent?.mediaType === 'image'
      }
    ]
  }