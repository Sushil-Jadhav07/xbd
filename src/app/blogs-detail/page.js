import { redirect } from 'next/navigation'

// Redirect old /blogs-detail route to the slug-based route
const BlogsDetailRedirect = () => {
  redirect('/blogs-detail/exponential-operating-system')
}

export default BlogsDetailRedirect


