export default {
  name: 'exponentialJourney',
  title: 'Exponential Journey Section',
  type: 'document',
  fields: [
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'titleStart',
          title: 'Title Start',
          type: 'string',
          description: 'Beginning part of the title (e.g., "Design your")',
          validation: Rule => Rule.required()
        },
        {
          name: 'highlightText',
          title: 'Highlighted Text',
          type: 'string',
          description: 'The part to highlight in gold (e.g., "Exponential journey")',
          validation: Rule => Rule.required()
        },
        {
          name: 'titleEnd',
          title: 'Title End',
          type: 'string',
          description: 'Text after highlight (e.g., "now")',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          description: 'Supporting text below the title',
          validation: Rule => Rule.required()
        },
        {
          name: 'mountainImage',
          title: 'Mountain Background Image',
          type: 'image',
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
          name: 'journeyPoints',
          title: 'Journey Points on Mountain',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Point Name',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'object',
                  fields: [
                    {
                      name: 'left',
                      title: 'Left Position (%)',
                      type: 'string',
                      description: 'e.g., "2%"'
                    },
                    {
                      name: 'bottom',
                      title: 'Bottom Position (%)',
                      type: 'string',
                      description: 'e.g., "0%"'
                    },
                    {
                      name: 'top',
                      title: 'Top Position (%)',
                      type: 'string',
                      description: 'e.g., "37%"'
                    }
                  ]
                },
                {
                  name: 'isActive',
                  title: 'Is Active Point',
                  type: 'boolean',
                  description: 'Determines if this point is highlighted'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'tabs',
      title: 'Tab Options',
      type: 'array',
      validation: Rule => Rule.required().max(2),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Tab ID',
              type: 'string',
              description: 'Unique identifier (e.g., "leaders", "organisations")',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Tab Label',
              type: 'string',
              description: 'Display text for tab',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'stages',
      title: 'Journey Stages',
      type: 'array',
      validation: Rule => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Stage ID',
              type: 'string',
              description: 'Unique identifier (e.g., "foundation", "reflection")',
              validation: Rule => Rule.required()
            },
            {
              name: 'stageNumber',
              title: 'Stage Number',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            },
            {
              name: 'title',
              title: 'Stage Title',
              type: 'string',
              description: 'Display title (e.g., "FOUNDATION")',
              validation: Rule => Rule.required()
            },
            {
              name: 'promise',
              title: 'Promise',
              type: 'text',
              description: 'What the stage promises to deliver',
              validation: Rule => Rule.required()
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'List of features/benefits for this stage',
              validation: Rule => Rule.required().min(1)
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Price for this stage (e.g., "₹49,000")',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              stageNumber: 'stageNumber',
              price: 'price'
            },
            prepare(selection) {
              const { title, stageNumber, price } = selection
              return {
                title: `Stage ${stageNumber}: ${title}`,
                subtitle: price
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heroSection.title',
      subtitle: 'heroSection.subtitle'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Exponential Journey',
        subtitle: subtitle
      }
    }
  }
}

