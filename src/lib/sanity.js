import { createClient } from '@sanity/client'

// Replace with your project ID and dataset
export const client = createClient({
    projectId: '6bjtp9fw',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
})