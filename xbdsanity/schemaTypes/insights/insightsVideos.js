export default {
  name: 'insightsVideos',
  title: 'Insights Videos Section',
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
      title: 'Section Subtitle',
      type: 'text',
    },
    {
      name: 'videosList',
      title: 'Videos List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Video Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'YouTube video URL (any format)',
              validation: Rule => Rule.required()
            },
            {
              name: 'date',
              title: 'Publish Date',
              type: 'date',
              validation: Rule => Rule.required()
            },
            {
              name: 'duration',
              title: 'Video Duration',
              type: 'string',
              description: 'Format: MM:SS or HH:MM:SS (e.g., "15:30" or "1:45:20")',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'duration',
              date: 'date'
            },
            prepare(selection) {
              const {title, subtitle, date} = selection
              return {
                title: title,
                subtitle: `${subtitle} • ${new Date(date).toLocaleDateString()}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1)
    }
  ]
}

