export default {
  name: 'pricingPlan',
  title: 'Pricing Plan Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Section Label',
      type: 'string',
      description: 'Small text above the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main title text',
      validation: Rule => Rule.required()
    },
    {
      name: 'highlightText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'The bold part of the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Description below the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Plan Title',
              type: 'string',
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
              type: 'string'
            },
            {
              name: 'image',
              title: 'Plan Image',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ],
      validation: Rule => Rule.min(1).max(6)
    },
    {
      name: 'mainCtaButton',
      title: 'Main CTA Button',
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
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'Text below main CTA button',
      validation: Rule => Rule.required()
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'string',
      description: 'Secondary text below CTA title',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Feature Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Security', value: 'security' },
                  { title: 'Flash/Speed', value: 'flash' },
                  { title: 'Verified', value: 'verified' }
                ]
              }
            }
          ]
        }
      ],
      validation: Rule => Rule.max(3)
    }
  ]
}