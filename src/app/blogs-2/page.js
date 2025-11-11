import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPageTwo from '@/components/Blogs/BlogsPageTwo'

export const metadata = {
  title: 'Blogs 2 | XBD',
  description:
    'Deep-dive operator essays with immersive media, table of contents, and related plays curated by the XBD team.'
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


