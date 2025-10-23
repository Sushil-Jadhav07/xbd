export default {
    name: 'keynotes',
    title: 'Keynotes Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'keynotesList',
        title: 'Keynotes List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Keynote Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'subtitle',
                title: 'Subtitle',
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
                name: 'duration',
                title: 'Duration',
                type: 'string',
                description: 'e.g., "60 hours"'
              },
              {
                name: 'availability',
                title: 'Availability',
                type: 'string',
                description: 'e.g., "On Request"'
              },
              {
                name: 'mode',
                title: 'Mode',
                type: 'string',
                description: 'e.g., "Hybrid Mode", "Onsite Mode"'
              },
              {
                name: 'videoUrl',
                title: 'Video URL',
                type: 'url',
                description: 'Link to keynote video (optional)'
              },
              {
                name: 'trustText',
                title: 'Trust Text',
                type: 'string',
                initialValue: 'Trusted by leaders'
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }