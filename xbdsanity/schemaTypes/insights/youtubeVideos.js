export default {
  name: 'youtubeVideos',
  title: 'YouTube Videos Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
    },
    {
      name: 'videos',
      title: 'Videos List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'videoTitle',
              title: 'Video Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'videoUrl',
              title: 'YouTube Video URL',
              type: 'url',
              description: 'Full YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
              validation: Rule => Rule.required()
            },
            {
              name: 'videoIframe',
              title: 'YouTube Embed URL',
              type: 'url',
              description: 'YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)',
              validation: Rule => Rule.required()
            },
            {
              name: 'videoDuration',
              title: 'Video Runtime/Duration',
              type: 'string',
              description: 'e.g., "10:45" or "1:30:20"',
              validation: Rule => Rule.required()
            },
            {
              name: 'publishDate',
              title: 'Publish Date',
              type: 'date',
              validation: Rule => Rule.required()
            },
            {
              name: 'videoDescription',
              title: 'Video Description',
              type: 'text',
              description: 'Brief description of the video content'
            },
            {
              name: 'thumbnailUrl',
              title: 'Custom Thumbnail (Optional)',
              type: 'image',
              description: 'Optional custom thumbnail. If not provided, YouTube thumbnail will be used.',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'videoTitle',
              subtitle: 'videoDuration',
              media: 'thumbnailUrl'
            }
          }
        }
      ],
      validation: Rule => Rule.min(1)
    }
  ]
}
