export default {
    name: 'newsletterSignup',
    title: 'Newsletter Signup Section',
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
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'inputPlaceholder',
        title: 'Email Input Placeholder',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'buttonText',
        title: 'Subscribe Button Text',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'privacyNote',
        title: 'Privacy Note',
        type: 'string',
        validation: Rule => Rule.required()
      }
    ]
  }