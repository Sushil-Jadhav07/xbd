export default {
    name: 'bookBanner',
    title: 'Book Banner Section',
    type: 'document',
    fields: [
      {
        name: 'categoryTag',
        title: 'Category Tag',
        type: 'string',
        description: 'Small tag at the top (e.g., "Book")',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleLine1',
        title: 'Title Line 1',
        type: 'string',
        description: 'First line of title',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleLine2',
        title: 'Title Line 2',
        type: 'string',
        description: 'Second line of title',
        validation: Rule => Rule.required()
      },
      {
        name: 'titleLine3',
        title: 'Title Line 3 (Bold)',
        type: 'string',
        description: 'Third line of title (will be bold)',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'keyFeatures',
        title: 'Key Features',
        type: 'array',
        of: [{ type: 'string' }],
        validation: Rule => Rule.max(5).min(1)
      },
      {
        name: 'infoTags',
        title: 'Information Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Tags like "Hardcover & eBook"',
        validation: Rule => Rule.max(3)
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
        name: 'trustIndicator',
        title: 'Trust Indicator Text',
        type: 'string',
        description: 'Text with star icon at bottom',
        validation: Rule => Rule.required()
      },
      {
        name: 'bookCoverImage',
        title: 'Book Cover Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }