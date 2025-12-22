export default {
    name: 'whyChoose',
    title: 'Why Choose Section',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Section Label',
        type: 'string',
        description: 'Small text above the title',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleStart',
        title: 'Title Start',
        type: 'string',
        description: 'e.g., "If You\'re"',
        validation: Rule => Rule.required()
      },
      {
        name: 'highlightText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'The gradient highlighted part',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleEnd',
        title: 'Title End',
        type: 'string',
        description: 'Text after highlight',
        validation: Rule => Rule.required()
      },
      {
        name: 'boldText',
        title: 'Bold Text',
        type: 'string',
        description: 'Final bold part of title',
        validation: Rule => Rule.required()
      },
      {
        name: 'quote',
        title: 'Quote Text',
        type: 'text',
        description: 'The main quote/description',
        validation: Rule => Rule.required()
      },
      {
        name: 'authorName',
        title: 'Author Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'authorTitle',
        title: 'Author Title',
        type: 'string',
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
            { title: 'Video', value: 'video' }
          ]
        },
        initialValue: 'image',
        validation: Rule => Rule.required()
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
        ],
        hidden: ({ parent }) => parent?.mediaType !== 'image'
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