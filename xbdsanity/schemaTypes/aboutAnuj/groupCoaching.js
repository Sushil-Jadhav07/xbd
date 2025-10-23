export default {
    name: 'groupCoaching',
    title: 'Group Coaching Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'sessions',
        title: 'Coaching Sessions',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Session Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Session Description',
                type: 'text',
                validation: Rule => Rule.required()
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
                options: { hotspot: true },
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
                name: 'videoThumbnail',
                title: 'Video Thumbnail',
                type: 'image',
                options: { hotspot: true },
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
              },
              {
                name: 'videoUrl',
                title: 'Video URL',
                type: 'url',
                description: 'YouTube, Vimeo, or other video URL',
                hidden: ({ parent }) => parent?.mediaType !== 'video'
              },
              {
                name: 'tags',
                title: 'Session Tags',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Tag Text',
                        type: 'string',
                        validation: Rule => Rule.required()
                      },
                      {
                        name: 'iconType',
                        title: 'Icon Type',
                        type: 'string',
                        options: {
                          list: [
                            { title: 'Time/Duration', value: 'time' },
                            { title: 'Language', value: 'language' },
                            { title: 'Device/Mode', value: 'device' }
                          ]
                        },
                        validation: Rule => Rule.required()
                      }
                    ],
                    preview: {
                      select: {
                        title: 'text',
                        subtitle: 'iconType'
                      }
                    }
                  }
                ],
                validation: Rule => Rule.min(1).max(5)
              },
              {
                name: 'footer',
                title: 'Footer Text',
                type: 'text',
                validation: Rule => Rule.required()
              }
            ],
            preview: {
              select: {
                title: 'title',
                subtitle: 'description'
              }
            }
          }
        ],
        validation: Rule => Rule.min(1).max(4)
      }
    ]
  }