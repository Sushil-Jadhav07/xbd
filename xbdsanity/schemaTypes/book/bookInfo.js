export default {
    name: 'bookInfo',
    title: 'Book Info Section',
    type: 'document',
    fields: [
      {
        name: 'topLabel',
        title: 'Top Label',
        type: 'string',
        description: 'Small text above the headline',
        validation: Rule => Rule.required()
      },
      {
        name: 'headline',
        title: 'Main Headline',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'headlineBold',
        title: 'Bold Part of Headline',
        type: 'string',
        description: 'Part that should be bold',
        validation: Rule => Rule.required()
      },
      {
        name: 'limitedEditionBadge',
        title: 'Limited Edition Badge Text',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'metrics',
        title: 'Value Metrics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'value',
                title: 'Metric Value',
                type: 'string',
                description: 'e.g., "7x", "2x"',
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Metric Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Metric Description',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        validation: Rule => Rule.max(4)
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
        
      },
      {
        name: 'supportingTitle',
        title: 'Supporting Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'supportingDescription',
        title: 'Supporting Section Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'companyLogos',
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
                options: { hotspot: true }
              }
            ]
          }
        ]
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true }
      }
    ]
  }