import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import BlogsPage from '@/components/Blogs/BlogsPage'

export const metadata = {
  title: 'Blogs | XBD',
  description:
    'Explore playbooks, case studies, and operator notes from XBD to build exponential growth systems in your organization.'
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

