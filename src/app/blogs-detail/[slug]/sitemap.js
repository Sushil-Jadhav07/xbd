import { getBlogBySlug } from '@/data/blogsData'

export default async function sitemap({ params }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  const baseUrl = 'https://xbd.co.in'

  if (!blog) {
    return []
  }

  // Parse date if available, otherwise use current date
  // Assuming blog.hero.authorHighlight.publishedOn format is like 'Dec 23, 2024'
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/blogs-detail/${slug}`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
