import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPageTwo from '@/components/Blogs/BlogsPageTwo'

export const metadata = {
  title: 'What is The Exponential Operating System (X-OS)? Explained',
  description:
    'Learn what the Exponential Operating System (X-OS) is, how it powers intelligent enterprises, and why it\'s the future of autonomous, AI-driven business growth.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/blogs-detail',
  },
  openGraph: {
    title: 'What is The Exponential Operating System (X-OS)? Explained',
    description:
      'Learn what the Exponential Operating System (X-OS) is, how it powers intelligent enterprises, and why it\'s the future of autonomous, AI-driven business growth.',
    url: 'https://xbd.vercel.app/blogs-detail',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is The Exponential Operating System (X-OS)? Explained',
    description:
      'Learn what the Exponential Operating System (X-OS) is and how it powers intelligent enterprises for autonomous business growth.',
  },
}

const BlogsTwo = () => {
  return (
    <div className="relative">
      <main className="relative">
        <Navbar />
        <BlogsPageTwo />
        <Footer />
      </main>
    </div>
  )
}

export default BlogsTwo


