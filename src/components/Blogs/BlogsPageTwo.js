'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import industryFallbackAvatar from '@/asset/industry/7.webp'
import Link from 'next/link'

const fallbackData = {
  hero: {
    tag: 'Operator Essays',
    title: 'Designing a compounding intelligence layer for your GTM team',
    description:
      'A deep-dive playbook on weaving AI copilots, human rituals, and actionable intelligence into your revenue engine without slowing teams down.',
    authorHighlight: {
      name: 'Anuj Sharma',
      title: 'Founder & Chief Operator, XBD',
      tags: ['AI Systems', 'Go-To-Market', 'Leadership'],
      readingTime: '12 min read',
      publishedOn: 'Oct 28, 2025',
      banner: {
        image:
          'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Operators collaborating in a modern workspace'
      }
    }
  },
  author: {
    avatar: industryFallbackAvatar,
    name: 'Anuj Sharma',
    role: 'Founder & Chief Operator, XBD',
    bio: 'Anuj installs compounding growth systems for scale-stage operators. Previously led revenue and GTM acceleration at high-growth SaaS companies across North America and APAC.',
    socials: [
      { label: 'LinkedIn', handle: '@anuj-xbd', href: 'https://www.linkedin.com/in/anujxbd' },
      { label: 'X / Twitter', handle: '@anuj_xbd', href: 'https://twitter.com/anuj_xbd' },
      { label: 'YouTube', handle: 'XBD Operators', href: 'https://youtube.com/@xbdoperators' },
      { label: 'Newsletter', handle: 'Signal > Noise', href: '/newsletter' }
    ]
  },
  sections: [
    {
      id: 'why-compounding-intelligence',
      heading: 'Why compounding intelligence matters now',
      type: 'richText',
      content: [
        "The GTM leader's challenge is no longer about finding more data. It's about compressing the distance between signals and decisions without adding friction to the team.",
        'Compounding intelligence systems blend automated telemetry, curated interpretation, and human judgment. When done well, they remove the guesswork from weekly operating cadences.'
      ]
    },
    {
      id: 'architecture',
      heading: 'The architecture we install inside XBD engagements',
      type: 'image',
      caption: 'Layered system architecture that ties telemetry, experiments, and decision rituals.',
      image: {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Team standing around a table reviewing architecture diagrams'
      },
      supportingText:
        'We anchor on a four-layer stack: telemetry foundation, AI-enabled pattern detection, playbook library, and leadership rituals that enforce momentum.'
    },
    {
      id: 'playbook-video',
      heading: 'Watch the operating cadence in action',
      type: 'video',
      youtubeId: 'dQw4w9WgXcQ',
      supportingText:
        "See how we run a 45-minute operating cadence that blends dashboards, AI copilots, and exec decision rules. This is the format we deploy during week two of an engagement."
    },
    {
      id: 'rollout',
      heading: 'Rollout roadmap for the first 30 days',
      type: 'richText',
      content: [
        'Week 1: Install telemetry baseline and define decision surface area. Align leadership on signal thresholds and escalation paths.',
        'Week 2: Layer in AI pattern detection and pair it with human review cadences. Launch the first co-pilot workflows inside RevOps.',
        'Week 3: Expand to GTM pods with scenario-based enablement. Measure decision velocity and experiment cycle time improvements.',
        'Week 4: Institutionalize rituals, publish the playbook, and hand off governance with a scorecard operators can own.'
      ]
    },
    {
      id: 'toolkit',
      heading: 'Toolkit download',
      type: 'callout',
      cta: {
        label: 'Get the toolkit',
        href: '/contact'
      },
      supportingText:
        'The toolkit includes our telemetry blueprint, AI prompt library, and weekly operating cadence worksheet. Operators use it to immediately instrument their teams.'
    }
  ],
  relatedPosts: [
    {
      id: 'ai-command-center',
      title: 'Stand up an AI command center without slowing teams down',
      category: 'AI Systems',
      tags: ['AI Systems', 'Decision Velocity'],
      href: '/blogs/ai-command-center',
      readTime: '7 min read'
    },
    {
      id: 'gtm-loops',
      title: 'From funnels to loops: redesigning GTM for compounding results',
      category: 'Go-To-Market',
      tags: ['Go-To-Market', 'Loops'],
      href: '/blogs/gtm-loops',
      readTime: '6 min read'
    },
    {
      id: 'leadership-rituals',
      title: 'Leadership rituals that keep operators ahead of exponential change',
      category: 'Leadership',
      tags: ['Leadership', 'Operating Rhythm'],
      href: '/blogs/leadership-rituals',
      readTime: '8 min read'
    },
    {
      id: 'pilot-to-rollout',
      title: 'Pilot-to-rollout pipelines that survive the messy middle',
      category: 'Playbooks',
      tags: ['Playbooks', 'Execution'],
      href: '/blogs/pilot-to-rollout',
      readTime: '9 min read'
    }
  ]
}

const BlogsPageTwo = ({ blogData }) => {
  const data = useMemo(() => {
    if (!blogData) return fallbackData

    return {
      ...fallbackData,
      ...blogData,
      hero: {
        ...fallbackData.hero,
        ...blogData.hero,
        authorHighlight: {
          ...fallbackData.hero.authorHighlight,
          ...blogData.hero?.authorHighlight
        }
      },
      author: {
        ...fallbackData.author,
        ...blogData.author,
        socials: blogData.author?.socials?.length ? blogData.author.socials : fallbackData.author.socials
      },
      sections: blogData.sections?.length ? blogData.sections : fallbackData.sections,
      relatedPosts: blogData.relatedPosts?.length ? blogData.relatedPosts : fallbackData.relatedPosts
    }
  }, [blogData])

  const tocItems = useMemo(
    () =>
      data.sections
        .filter((section) => section.heading)
        .map((section) => ({
          id: section.id,
          label: section.heading
        })),
    [data.sections]
  )

  const relatedByAffinity = useMemo(() => {
    const activeTags =
      data.hero.authorHighlight?.tags?.length > 0 ? data.hero.authorHighlight.tags : ['AI Systems']

    return data.relatedPosts
      .map((post) => {
        const overlap = post.tags?.filter((tag) => activeTags.includes(tag)) || []
        return {
          ...post,
          relevance: overlap.length + (post.category === data.hero.authorHighlight?.tags?.[0] ? 1 : 0)
        }
      })
      .sort((a, b) => b.relevance - a.relevance)
  }, [data.hero.authorHighlight, data.relatedPosts])

  return (
    <div className="bg-white md:mx-[15px] mx-[5px] ">
      <div className="mx-auto max-w-7xl px-4 pb-0 pt-0 lg:px-0 lg:pt-0">
        <section className=" p-6 sm:p-10 lg:p-14">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4 text-base font-medium uppercase text-white">
              <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#9d7035] to-[#c1a35e] px-6 py-2">
                {data.hero.tag}
              </span>
              <span className="text-xs font-semibold text-[#b58745]">
                {data.hero.authorHighlight?.publishedOn} • {data.hero.authorHighlight?.readingTime}
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                  {data.hero.title}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
                  {data.hero.description}
                </p>
              </div>
              <div className="relative h-60 overflow-hidden rounded-lg lg:h-80">
                {data.hero.authorHighlight?.banner?.image && (
                  <Image
                    src={data.hero.authorHighlight.banner.image}
                    alt={data.hero.authorHighlight.banner.alt || 'Blog banner'}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.4fr)] lg:items-start lg:gap-16">
            <article className="space-y-14">
              <section className="rounded-[28px] border border-[#efe7db]  p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:gap-8">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]">
                    {data.author.avatar && (
                      <Image src={data.author.avatar} alt={data.author.name} fill className="object-cover" unoptimized />
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl font-semibold text-black">{data.author.name}</h2>
                      <p className="text-sm font-medium uppercase text-[#b58745]">
                        {data.author.role}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{data.author.bio}</p>
                    <div className="flex flex-wrap gap-3 text-sm font-medium text-[#9d7035]">
                      {data.author.socials.map((social) => (
                        <Link
                          key={social.label}
                          href={social.href}
                          className="inline-flex items-center gap-2 rounded-full border border-[#e6d6bd] px-4 py-2 transition-colors duration-200 hover:border-[#c8a56d] hover:text-[#b07731]"
                          target={social.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                        >
                          <span className="text-xs uppercase ">{social.label}</span>
                          <span className="text-[#705331]">{social.handle}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {data.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 space-y-6">
                  {section.heading && (
                    <h2 className="text-2xl font-semibold text-black sm:text-3xl">{section.heading}</h2>
                  )}

                  {section.type === 'richText' && (
                    <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                      {section.content?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.type === 'image' && section.image && (
                    <div className="space-y-4">
                      <div className="relative h-64 overflow-hidden rounded-3xl bg-[#f4e4ca] sm:h-80">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt || section.heading || 'Blog illustration'}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {section.supportingText && (
                        <p className="text-sm leading-relaxed text-gray-600">{section.supportingText}</p>
                      )}
                      {section.caption && (
                        <p className="text-xs uppercase  text-[#b0874a]">{section.caption}</p>
                      )}
                    </div>
                  )}

                  {section.type === 'video' && section.youtubeId && (
                    <div className="space-y-4">
                      <div className="relative overflow-hidden rounded-3xl bg-black shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                        <div className="aspect-video">
                          <iframe
                            title={section.heading}
                            src={`https://www.youtube.com/embed/${section.youtubeId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                      {section.supportingText && (
                        <p className="text-sm leading-relaxed text-gray-600">{section.supportingText}</p>
                      )}
                    </div>
                  )}

                  {section.type === 'callout' && section.cta && (
                    <div className="rounded-[28px] border border-[#e8d8bc] p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-2">
                          {section.supportingText && (
                            <p className="text-sm font-medium uppercase  text-[#9d7035]">
                              Toolkit
                            </p>
                          )}
                          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                            {section.supportingText}
                          </p>
                        </div>
                        <Link
                          href={section.cta.href}
                          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#9d7035] to-[#c1a35e] px-5 py-3 text-sm font-semibold uppercase text-white transition-transform duration-200"
                        >
                          {section.cta.label}
                        </Link>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </article>

            <aside className="space-y-12">
              <div className="rounded-[28px] border border-[#efe4d1]  p-6">
                <p className="text-sm md:text-lg font-semibold uppercase  text-[#b58745]">Table of contents</p>
                <nav className="mt-4 space-y-3 text-sm text-gray-700">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-[#f4e5cd] hover:text-[#9d7035]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-[28px] border border-[#efe4d1] bg-white p-6 ">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase  text-[#b58745]">
                    Related operator plays
                  </p>
                  <span className="text-xs font-medium text-gray-500">
                    Based on tags • {data.hero.authorHighlight?.tags?.join(', ')}
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {relatedByAffinity.map((post) => (
                    <Link
                      key={post.id}
                      href={post.href}
                      className="group block rounded-2xl border border-transparent bg-[#fff9f0] px-4 py-4 transition-all duration-200 hover:border-[#e0c28a] hover:bg-white"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-xs uppercase  text-[#b58745]">
                          <span>{post.category}</span>
                          <span className="h-[1px] w-6 bg-[#e2c99b]" />
                          <span className="text-[#a0783d]">{post.readTime}</span>
                        </div>
                        <p className="text-base font-semibold text-black transition-colors duration-200 group-hover:text-[#9d7035]">
                          {post.title}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-[#f5e6cc] px-3 py-1 text-[11px] font-semibold uppercase  text-[#7d6032]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogsPageTwo


