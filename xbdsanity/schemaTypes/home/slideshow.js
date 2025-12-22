export default {
  name: 'slideshow',
  title: 'Home Slideshow',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Slide Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Important for SEO and accessibility.'
                }
              ],
            },
            {
              name: 'alt',
              title: 'Image Alt Text (Fallback)',
              type: 'string',
              description: 'Alternative text for the image if not provided in image field'
            },
            {
              name: 'title',
              title: 'Slide Title',
              type: 'string',
              description: 'Main title text (before highlighted text)',
            },
            {
              name: 'highlightText',
              title: 'Highlighted Text',
              type: 'string',
              description: 'Text that will be highlighted in gold/gradient',
            },
            {
              name: 'titleafter',
              title: 'Title After Highlight',
              type: 'string',
              description: 'Text that appears after the highlighted text'
            },
            {
              name: 'subtitle',
              title: 'Subtitle/Description',
              type: 'text',
              description: 'Subtitle or description text below the title',
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
                },
                {
                  name: 'link',
                  title: 'Button Link (Optional)',
                  type: 'string',
                  description: 'If provided, button will be a link. If not, it will open a modal.'
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
                },
                {
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                  description: 'URL or path for the button'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'image'
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).max(10)
    }
  ],
  preview: {
    select: {
      slides: 'slides'
    },
    prepare({ slides }) {
      const slideCount = slides ? slides.length : 0
      return {
        title: 'Home Slideshow',
        subtitle: `${slideCount} slide${slideCount !== 1 ? 's' : ''}`
      }
    }
  }
}

