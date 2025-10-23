export default {
    name: 'aboutTitle',
    title: 'About Title Section',
    type: 'document',
    fields: [
      {
        name: 'roleTag',
        title: 'Role Tag',
        type: 'string',
        description: 'e.g., "Author • Strategist • Advisor"',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
        description: 'e.g., "Hi, I\'m Anuj"',
        validation: Rule => Rule.required()
      },
      {
        name: 'subHeading',
        title: 'Sub Heading',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'skills',
        title: 'Skills/Topics',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Skill tags to display',
        validation: Rule => Rule.max(5)
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
        name: 'clientResults',
        title: 'Client Results Text',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }