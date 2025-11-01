export default {
    name: 'faqs',
    title: 'FAQ Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'faqs',
        title: 'Frequently Asked Questions',
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
            ]
          }
        ],
        validation: Rule => Rule.max(10).min(1)
      }
    ]
  }
