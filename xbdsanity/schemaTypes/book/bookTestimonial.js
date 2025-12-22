export default {
    name: 'bookTestimonial',
    title: 'Book Testimonials Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'Main heading',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        description: 'Text below the title',
        validation: Rule => Rule.required()
      },
      {
        name: 'logos',
        title: 'Company Logos',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Company Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'logo',
                title: 'Logo Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                description: 'Upload company logo'
              }
            ],
            preview: {
              select: {
                title: 'name',
                media: 'logo'
              }
            }
          }
        ],
        validation: Rule => Rule.max(10)
      },
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'quote',
                title: 'Testimonial Quote',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'author',
                title: 'Author Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Author Title/Position',
                type: 'string',
              },
              {
                name: 'authorImage',
                title: 'Author Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                description: 'Upload author photo (optional)'
              },
              {
                name: 'rating',
                title: 'Rating (out of 5)',
                type: 'number',
                validation: Rule => Rule.required().min(1).max(5),
                initialValue: 5
              }
            ],
            preview: {
              select: {
                title: 'author',
                subtitle: 'title',
                media: 'authorImage'
              }
            }
          }
        ],
        validation: Rule => Rule.min(1)
      }
    ]
  }