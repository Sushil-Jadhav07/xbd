'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogBannerImage from '../../asset/blog-banner/Blog_banner.jpg'

const fallbackData = {
  hero: {
    tag: 'Blogs',
    title: 'Signal > Noise: Field notes for exponential operators',
    description:
      'Short, applied essays from active experiments. Learn how leaders are designing AI leverage, compounding growth loops, and governance that scales without adding drag.',
    primaryButton: {
      text: 'Subscribe for weekly drops',
      link: '/newsletter'
    },
    secondaryButton: {
      text: 'Go to assessments',
      link: '/learning-hub'
    }
  },
  categories: ['All', 'AI Systems', 'Go-To-Market', 'Leadership', 'Playbooks', 'Case Studies'],
  featured: {
    category: 'Featured',
    title: '5 decisions that separate compounding growth loops from campaign spikes',
    description:
      'A teardown of how exponential teams wire decision rules, metrics, and automation to keep momentum without waiting on quarterly planning cycles.',
    author: 'Anuj Sharma',
    readTime: '7 min read',
    date: 'Oct 19, 2025',
    tags: ['Growth Systems', 'Operating Model'],
    link: '#',
    image: {
      url: '/Insights-Page-Banner.jpg',
      alt: 'Featured essay cover art'
    }
  },
  posts: [
    {
      id: 1,
      title: 'The Exponential Operating System (X-OS): How Intelligent Enterprises Will Win the Next Decade?',
      excerpt:
        'Enterprise architecture is entering a structural shift defined by the rise of Agentic AI.',
      date: 'Oct 11, 2025',
      readTime: '6 min read',
      author: 'Team XBD',
      link: '/blogs-detail',
      image: {
        url: BlogBannerImage,
        alt: 'The Exponential Operating System (X-OS)'
      },
      tags: ['AI Ops', 'Decision Velocity']
    },
    // {
    //   id: 2,
    //   category: 'Go-To-Market',
    //   title: 'From funnels to flywheels: building compounding GTM motions',
    //   excerpt:
    //     'Frameworks for stitching demand, activation, and expansion into a single loop that compounds without heroic launches.',
    //   date: 'Oct 4, 2025',
    //   readTime: '5 min read',
    //   author: 'Anuj Sharma',
    //   link: '/blogs-detail',
    //   image: null,
    //   tags: ['Revenue Architecture', 'Loops']
    // },
    // {
    //   id: 3,
    //   category: 'Leadership',
    //   title: 'Decision rules every exponential leadership team installs first',
    //   excerpt:
    //     'How to codify governance so scale does not create drag. Includes the 7 prompts we use to align exec tables in week one.',
    //   date: 'Sep 27, 2025',
    //   readTime: '8 min read',
    //   author: 'Team XBD',
    //   link: '/blogs-detail',
    //   image: null,
    //   tags: ['Leadership', 'Governance']
    // },
    // {
    //   id: 4,
    //   category: 'Playbooks',
    //   title: 'Field guide: standing up a pilot-to-rollout pipeline in 30 days',
    //   excerpt:
    //     'Step-by-step blueprint for leaders who need to compress experiment velocity while protecting customer experience.',
    //   date: 'Sep 16, 2025',
    //   readTime: '9 min read',
    //   author: 'Anuj Sharma',
    //   link: '/blogs-detail',
    //   image: null,
    //   tags: ['Execution', 'Pilot Design']
    // },
    // {
    //   id: 5,
    //   category: 'Case Studies',
    //   title: 'How a financial services brand cut launch time by 62%',
    //   excerpt:
    //     'A behind-the-scenes look at the plays, cadences, and tooling that turned fragmented teams into a compounding growth engine.',
    //   date: 'Sep 02, 2025',
    //   readTime: '7 min read',
    //   author: 'Team XBD',
    //   link: '/blogs-detail',
    //   image: null,
    //   tags: ['Case Study', 'Time-to-Value']
    // },
    // {
    //   id: 6,
    //   category: 'AI Systems',
    //   title: 'The intelligence stack: integrating human judgment with machine speed',
    //   excerpt:
    //     'Why the most resilient operating models treat AI as a teammate, not a tool—and the rituals that make it real.',
    //   date: 'Aug 24, 2025',
    //   readTime: '6 min read',
    //   author: 'Anuj Sharma',
    //   link: '/blogs-detail',
    //   image: null,
    //   tags: ['AI Strategy', 'Org Design']
    // }
  ],
  
}

const BlogsPage = ({ blogsData }) => {
  const data = blogsData
    ? {
        ...fallbackData,
        ...blogsData,
        hero: {
          ...fallbackData.hero,
          ...blogsData.hero
        },
        categories: blogsData.categories?.length ? blogsData.categories : fallbackData.categories,
        featured: {
          ...fallbackData.featured,
          ...blogsData.featured
        },
        posts: blogsData.posts?.length ? blogsData.posts : fallbackData.posts,
        newsletter: {
          ...fallbackData.newsletter,
          ...blogsData.newsletter
        }
      }
    : fallbackData

  const [selectedCategory, setSelectedCategory] = useState(data.categories[0] || 'All')

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return data.posts
    }
    return data.posts.filter((post) => post.category === selectedCategory)
  }, [data.posts, selectedCategory])

  return (
    <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <section className="mb-12">
          <h1 className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent font-bold text-4xl md:text-6xl text-center mb-16">
            Blogs
          </h1>
        </section>

        {/* Posts grid */}
        <section className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id || post.title}
                href={post.link || '/blogs-detail'}
                className="group block"
              >
                <article className="overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#c1a35e] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative w-full h-[300px] md:h-[250px] overflow-hidden bg-gray-100">
                    {post.image?.url ? (
                      <Image
                        src={post.image.url}
                        alt={post.image.alt || post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#f7efe1] via-[#ecd8b7] to-[#d5bb90]" />
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-4 p-6 lg:p-8 flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wide">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black leading-tight group-hover:text-[#9d7035] transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="inline-flex items-center gap-2 text-[#9d7035] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Read article
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-12 bg-white border border-dashed border-[#d1c4b4] rounded-3xl p-10 text-center">
              <p className="text-gray-600">
                We&apos;re drafting new plays for <span className="font-semibold">{selectedCategory}</span>.
                Subscribe to get them the moment they drop.
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}

export default BlogsPage

