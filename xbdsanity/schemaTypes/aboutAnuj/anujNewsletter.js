export default {
  name: 'anujNewsletter',
  title: 'Anuj Newsletter Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label Text',
      type: 'string',
      description: 'Small label text above the title (e.g., "News Letter")',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main heading for the newsletter section',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Descriptive text below the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'inputPlaceholder',
      title: 'Input Placeholder',
      type: 'string',
      description: 'Placeholder text for the email input field',
      validation: Rule => Rule.required()
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the subscribe button',
      validation: Rule => Rule.required()
    },
    {
      name: 'privacyNote',
      title: 'Privacy Note',
      type: 'string',
      description: 'Small privacy note text below the form (e.g., "No spam, unsubscribe at any time.")',
      validation: Rule => Rule.required()
    }
  ]
}