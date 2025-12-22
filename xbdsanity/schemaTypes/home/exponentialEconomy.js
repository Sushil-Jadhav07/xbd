export default {
    name: 'exponentialEconomy',
    title: 'Exponential Economy Section',
    type: 'document',
    fields: [
      {
        name: 'mainQuestion',
        title: 'Main Question',
        type: 'string',
        initialValue: 'Do you want to be part of this'
      },
      {
        name: 'highlightedWord',
        title: 'Highlighted Word',
        type: 'string',
        initialValue: 'Exponential'
      },
      {
        name: 'frameworkTitle',
        title: 'Framework Title',
        type: 'string',
        initialValue: 'How to Transform: The \'X\' Framework'
      },
      {
        name: 'description',
        title: 'Framework Description',
        type: 'text',
        initialValue: 'Our proprietary framework, backed by tools simplifies this complex assignment. This framework squeezes and extracts the growth secrets behind the prominently exponential organizations like Google, Amazon, Uber, NVIDIA and now OpenAI to distill the complexity into a simple framework to lead exponential growth. Every successful transformation maps back to the converging and diverging forces that create multiplier effects, creating agile and adaptable entities that evolve with the market.'
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
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
        ]
      },
      {
        name: 'learnMoreButton',
        title: 'Learn More Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Learn More'
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'string'
          }
        ]
      },
    ]
  }