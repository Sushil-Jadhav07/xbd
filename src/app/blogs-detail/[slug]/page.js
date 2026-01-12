import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPageTwo from '@/components/Blogs/BlogsPageTwo'
import { getBlogBySlug } from '@/data/blogsData'

// Generate metadata dynamically based on blog slug
export async function generateMetadata({ params }) {
  const { slug } = await params
  const blogData = getBlogBySlug(slug)

  if (!blogData) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: blogData.hero?.title || 'Blog Post',
    description: blogData.hero?.description || '',
    robots: {
      follow: true,
    },
    alternates: {
      canonical: `https://xbd.vercel.app/blogs-detail/${slug}`,
    },
    openGraph: {
      title: blogData.hero?.title || 'Blog Post',
      description: blogData.hero?.description || '',
      url: `https://xbd.vercel.app/blogs-detail/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blogData.hero?.title || 'Blog Post',
      description: blogData.hero?.description || '',
    },
  }
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params
  const blogData = getBlogBySlug(slug)

  if (!blogData) {
    return (
      <div className="relative">
        <main className="relative">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
              <p className="text-gray-600">The blog post you are looking for does not exist.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }

  return (
    <div className="relative">
      <main className="relative">
        <Navbar />
        <BlogsPageTwo blogData={blogData} />
        <Footer />
      </main>
    </div>
  )
}

export default BlogDetailPage

