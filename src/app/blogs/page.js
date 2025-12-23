import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPage from '@/components/Blogs/BlogsPage'

export const metadata = {
  title: 'XBD Blog: X-OS, Agentic AI, Strategy & Business Growth Ideas',
  description:
    'Read expert articles on X-OS, Agentic AI, X Framework, strategy, and business growth ideas from XBD. Explore playbooks, case studies, and insights for exponential growth.',
  robots: {
    index: false,
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
  return (
    <div className="relative">
      <main className="relative">
        <Navbar />
        <BlogsPage />
        <Footer />
      </main>
    </div>
  )
}

export default Blogs

