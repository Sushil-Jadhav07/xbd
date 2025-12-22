export default {
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    {
      name: 'sectionBadge',
      title: 'Section Badge',
      type: 'string',
      description: 'Small badge text above the title (e.g., "Support")',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'First part of the title (e.g., "Frequently Asked")',
      validation: Rule => Rule.required()
    },
    {
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      description: 'Highlighted part of the title (e.g., "Questions")',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Subtitle/description below the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      description: 'Call-to-action section at the bottom',
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'URL or path for the button'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'subtitle'
    }
  }
}

