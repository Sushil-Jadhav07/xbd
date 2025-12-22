export default {
  name: 'featuredArticles',
  title: 'Featured Articles',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the featured articles section',
      validation: Rule => Rule.required()
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      description: 'Subtitle or description below the main heading'
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      description: 'LinkedIn posts to feature in the carousel',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'authorImage',
              title: 'Author Profile Image',
              type: 'image',
              description: 'Small circular profile picture',
              options: {
                hotspot: true
              }
            },
            {
              name: 'isVerified',
              title: 'Is Verified',
              type: 'boolean',
              description: 'Show blue checkmark next to name',
              initialValue: false
            },
            {
              name: 'postDate',
              title: 'Post Date',
              type: 'string',
              description: 'Display date (e.g., "October 20")',
              validation: Rule => Rule.required()
            },
            {
              name: 'postSnippet',
              title: 'Post Snippet',
              type: 'text',
              description: 'Short excerpt from the LinkedIn post',
              validation: Rule => Rule.required().max(200)
            },
            {
              name: 'postTitle',
              title: 'Post Title',
              type: 'string',
              description: 'Article title (shown in link preview box)'
            },
            {
              name: 'postImage',
              title: 'Post Image',
              type: 'image',
              description: 'Main image from the LinkedIn post',
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
              name: 'linkedinUrl',
              title: 'LinkedIn Post URL',
              type: 'url',
              description: 'Full URL to the LinkedIn post',
              validation: Rule => Rule.required().uri({
                scheme: ['http', 'https']
              })
            },
            {
              name: 'likes',
              title: 'Number of Likes',
              type: 'number',
              description: 'Engagement count',
              initialValue: 0
            },
            {
              name: 'comments',
              title: 'Number of Comments',
              type: 'number',
              description: 'Engagement count',
              initialValue: 0
            }
          ],
          preview: {
            select: {
              title: 'postSnippet',
              subtitle: 'postDate',
              media: 'postImage'
            },
            prepare(selection) {
              const { title, subtitle, media } = selection
              return {
                title: title ? title.substring(0, 60) + '...' : 'Untitled Post',
                subtitle: subtitle,
                media: media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'articles.0.postSnippet'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Featured Articles',
        subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : 'No articles yet'
      }
    }
  }
}

