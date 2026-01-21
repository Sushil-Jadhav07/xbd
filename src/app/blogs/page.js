import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPage from '@/components/Blogs/BlogsPage'
import { blogsData } from '@/data/blogsData'

export const metadata = {
  title: 'XBD Blog: X-OS, Agentic AI, Strategy & Business Growth Ideas',
  description:
    'Read expert articles on X-OS, Agentic AI, X Framework, strategy, and business growth ideas from XBD. Explore playbooks, case studies, and insights for exponential growth.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/blogs',
  },
  openGraph: {
    title: 'XBD Blog: X-OS, Agentic AI, Strategy & Business Growth Ideas',
    description:
      'Read expert articles on X-OS, Agentic AI, X Framework, strategy, and business growth ideas from XBD. Explore playbooks and case studies.',
    url: 'https://xbd.vercel.app/blogs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XBD Blog: X-OS, Agentic AI, Strategy & Business Growth Ideas',
    description:
      'Read expert articles on X-OS, Agentic AI, X Framework, strategy, and business growth ideas from XBD.',
  },
}

const Blogs = () => {
  // Convert blogsData object to array of posts for the BlogsPage component
  const posts = Object.keys(blogsData).map((slug, index) => {
    const blog = blogsData[slug]
    return {
      id: index + 1,
      title: blog.hero.title,
      excerpt: blog.hero.description,
      date: blog.hero.authorHighlight?.publishedOn,
      readTime: blog.hero.authorHighlight?.readingTime,
      author: blog.hero.authorHighlight?.name,
      link: `/blogs-detail/${slug}`,
      slug: slug,
      image: {
        url: blog.hero.authorHighlight?.banner?.image,
        alt: blog.hero.authorHighlight?.banner?.alt,
      },
      tags: blog.hero.authorHighlight?.tags || [],
      category: blog.hero.tag,
    }
  })

  return (
    <div className="relative">
      <main className="relative">
        <Navbar />
        <BlogsPage blogsData={{ posts }} />
        <Footer />
      </main>
    </div>
  )
}

export default Blogs

