import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Replace with your project ID and dataset
export const client = createClient({
    projectId: '6bjtp9fw',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlFor = (source) => builder.image(source)