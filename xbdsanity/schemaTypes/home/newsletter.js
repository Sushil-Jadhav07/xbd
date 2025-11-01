export default {
    name: 'newsletter',
    title: 'Newsletter Section',
    type: 'document',
    fields:[
        {
            name:'label',
            title: 'Section Label',
            type: 'string',
            description: 'Small text above the title (e.g., "NEWS LETTER")',
            validation: Rule=> Rule.required()
        },
        {
            name: 'title',
            title: 'Main Title',
            type: 'string',
            description: 'Main title text',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description below the title',
            validation: Rule => Rule.required()
        },
        {
            name: 'inputPlaceholder',
            title: 'Email Input Placeholder',
            type: 'string',
            description: 'Placeholder text for the email input field',
            validation: Rule => Rule.required()
        },
        {
            name: 'buttonText',
            title: 'Subscribe Button Text',
            type: 'string',
            description: 'Text for the subscribe button',
            validation: Rule => Rule.required()
        },
        {
            name: 'privacyNote',
            title: 'Privacy Note',
            type: 'string',
            description: 'Privacy disclaimer text below the form',
            validation: Rule => Rule.required()
        }
    ]
}