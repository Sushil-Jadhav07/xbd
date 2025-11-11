'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      category: 'AI Systems',
      title: 'Designing an AI command center that actually ships decisions',
      excerpt:
        'Inside the 4-layer stack we deploy to convert AI pilots into durable advantage—from data contracts to human escalation paths.',
      date: 'Oct 11, 2025',
      readTime: '6 min read',
      author: 'Team XBD',
      link: '#',
      image: null,
      tags: ['AI Ops', 'Decision Velocity']
    },
    {
      id: 2,
      category: 'Go-To-Market',
      title: 'From funnels to flywheels: building compounding GTM motions',
      excerpt:
        'Frameworks for stitching demand, activation, and expansion into a single loop that compounds without heroic launches.',
      date: 'Oct 4, 2025',
      readTime: '5 min read',
      author: 'Anuj Sharma',
      link: '#',
      image: null,
      tags: ['Revenue Architecture', 'Loops']
    },
    {
      id: 3,
      category: 'Leadership',
      title: 'Decision rules every exponential leadership team installs first',
      excerpt:
        'How to codify governance so scale does not create drag. Includes the 7 prompts we use to align exec tables in week one.',
      date: 'Sep 27, 2025',
      readTime: '8 min read',
      author: 'Team XBD',
      link: '#',
      image: null,
      tags: ['Leadership', 'Governance']
    },
    {
      id: 4,
      category: 'Playbooks',
      title: 'Field guide: standing up a pilot-to-rollout pipeline in 30 days',
      excerpt:
        'Step-by-step blueprint for leaders who need to compress experiment velocity while protecting customer experience.',
      date: 'Sep 16, 2025',
      readTime: '9 min read',
      author: 'Anuj Sharma',
      link: '#',
      image: null,
      tags: ['Execution', 'Pilot Design']
    },
    {
      id: 5,
      category: 'Case Studies',
      title: 'How a financial services brand cut launch time by 62%',
      excerpt:
        'A behind-the-scenes look at the plays, cadences, and tooling that turned fragmented teams into a compounding growth engine.',
      date: 'Sep 02, 2025',
      readTime: '7 min read',
      author: 'Team XBD',
      link: '#',
      image: null,
      tags: ['Case Study', 'Time-to-Value']
    },
    {
      id: 6,
      category: 'AI Systems',
      title: 'The intelligence stack: integrating human judgment with machine speed',
      excerpt:
        'Why the most resilient operating models treat AI as a teammate, not a tool—and the rituals that make it real.',
      date: 'Aug 24, 2025',
      readTime: '6 min read',
      author: 'Anuj Sharma',
      link: '#',
      image: null,
      tags: ['AI Strategy', 'Org Design']
    }
  ],
  newsletter: {
    title: 'Stay ahead of exponential shifts',
    description:
      "One weekly briefing with experiments, templates, and decision rules we're deploying right now. No noise, just leverage you can use.",
    cta: {
      text: 'Join the newsletter',
      link: '/newsletter'
    }
  }
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
        {/* Hero */}
        <section className="text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-900 rounded-full text-sm font-medium">
              {data.hero.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {data.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              {data.hero.primaryButton && (
                <Link
                  href={data.hero.primaryButton.link || '#'}
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800  inline-flex justify-center items-center px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#9d7035] to-[#c1a35e] hover:from-[#b88446] hover:to-[#d9ba69] transition-all duration-200 shadow-[0_12px_30px_rgba(157,112,53,0.25)]"
                >
                  {data.hero.primaryButton.text}
                </Link>
              )}
              {data.hero.secondaryButton && (
                <Link
                  href={data.hero.secondaryButton.link || '#'}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-semibold border border-gray-400 text-black hover:border-gray-600 transition-all duration-200 bg-white"
                >
                  {data.hero.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff7ec] via-[#f3e3c7] to-[#e0c9a6] p-[1px] shadow-[0_20px_60px_rgba(157,112,53,0.2)]">
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] aspect-[16/10] bg-white">
                {data.featured.image?.url ? (
                  <Image
                    src={data.featured.image.url}
                    alt={data.featured.image.alt || data.featured.title}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#f7efe1] via-[#ecd8b7] to-[#d5bb90]" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-lg font-semibold text-black">Browse by theme</h2>
            <span className="text-sm text-gray-500">
              {data.posts.length} {data.posts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
          <div className="mt-6 flex flex-row flex-nowrap gap-3 justify-center -mx-2 overflow-x-auto pb-3">
            <div className="flex gap-3 px-2 min-w-max">
              {data.categories.map((category) => {
                const isActive = selectedCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#9d7035] to-[#c1a35e] text-white shadow-md'
                        : 'bg-white text-gray-600 hover:text-black hover:bg-[#f3e9db]'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured (mobile) */}
        <section className="mt-10 md:hidden">
          <div className="rounded-3xl bg-gradient-to-br from-[#fff7ec] via-[#f3e3c7] to-[#e0c9a6] p-[1px] shadow-[0_16px_40px_rgba(157,112,53,0.15)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] aspect-[16/10] bg-white">
              {data.featured.image?.url ? (
                <Image
                  src={data.featured.image.url}
                  alt={data.featured.image.alt || data.featured.title}
                  fill
                  sizes="(max-width: 767px) 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#f7efe1] via-[#ecd8b7] to-[#d5bb90]" />
              )}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id || post.title}
                className="group overflow-hidden rounded-3xl bg-white border border-[#ede8df] hover:border-[#d1c4b4] hover:shadow-[0_24px_50px_rgba(26,24,22,0.1)] transition-all duration-200 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  {post.image?.url ? (
                    <Image
                      src={post.image.url}
                      alt={post.image.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#f7efe1] via-[#ecd8b7] to-[#d5bb90]" />
                  )}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full bg-black/80 text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-black leading-tight group-hover:text-[#9d7035] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="mt-auto space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-2">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={post.link || '#'}
                      className="inline-flex items-center gap-2 text-[#9d7035] font-semibold text-sm"
                    >
                      Read more <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
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

