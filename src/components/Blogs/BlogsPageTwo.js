'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogBannerImage from '../../asset/blog-banner/Blog_banner.jpg'

const fallbackData = {
  hero: {
    tag: 'Enterprise AI Architecture',
    title: 'The Exponential Operating System (X-OS): How Intelligent Enterprises Will Win the Next Decade',
    description:
      'Enterprise architecture is entering a structural shift defined by the rise of Agentic AI. Discover how X-OS enables organizations to operate with continuous intelligence and respond to complex situations with precision.',
    authorHighlight: {
      name: 'Anuj Sharma',
      title: 'Founder & Chief Operator, XBD',
      tags: ['AI Systems', 'Enterprise Architecture', 'Agentic AI'],
      readingTime: '18 min read',
      publishedOn: 'Dec 23, 2024',
      banner: {
        image: BlogBannerImage,
        alt: 'The Exponential Operating System (X-OS)'
      }
    }
  },
  sections: [
    {
      id: 'intelligence-infrastructure',
      heading: 'The Shift No One Saw Coming: Intelligence Became the New Infrastructure',
      type: 'richText',
      content: [
        'The previous decade revolutionized how companies stored data and distributed software. But these changes digitalized workflows. Currently, what is emerging is much more fundamental. Intelligence is the new enterprise infrastructure.',
        'More organizations are leaning into systems that Agentic AI shapes. The models now understand context, reason about goals, and leverage structured cognition models instead of fixed logic.',
        'AI has shifted from being a "tool" to an organizing layer that governs how value flows in the enterprise. Modern intelligent architectures involve decision engines and multimodal models, focusing on autonomous behaviors that are culturally responsive and on real-time signal events.'
      ]
    },
    {
      id: 'complexity-challenge',
      heading: 'Why Enterprises Experience Complexity Instead of Clarity',
      type: 'richText',
      content: [
        'As enterprises rushed into AI adoption, they accumulated fragmented pilots. This has led to overlapping vendors and disconnected models. Many companies use AI across various functions, yet struggle to achieve measurable results.',
        'The result is tool sprawl, unpredictable pipelines, and operational inefficiency. With more tools, they ended up creating more complexity, not value.',
        'Leading companies demonstrate the same pattern: intelligence, not software, drives the system. Tesla improves its entire fleet through constant learning. Amazon uses anticipatory intelligence to cut decision dormancy across logistics. OpenAI exemplifies how intelligence combined with ecosystem design accelerates adoption.'
      ]
    },
    {
      id: 'transformation-failures',
      heading: 'Why Most Transformations Fail: The Fog of Complexity',
      type: 'richText',
      content: [
        'CXOs consistently express the same feeling: AI is essential, yet the options leave them confused. They have a flood of choices: platforms, models, copilots, AI agents, vendors, and shifting regulations.',
        'Enterprises run too many pilots and scale too few. Hundreds of organizations launch GenAI experiments every day. Only a small fraction can convert them into revenue outcomes or cost advantages.',
        'In many companies, 85-90% of AI initiatives fail as teams use tools without redesigning the workflows around them. They have high activity, but the business impact barely moves.',
        'Leaders who succeed assign clear ownership. They set challenging ROI targets and scale only use cases that transform entire value chains. They productize data, redesign workflows, and deploy agents that give value to the decisions, velocity, and customer experience.'
      ]
    },
    {
      id: 'xos-introduction',
      heading: 'Introducing the Exponential Operating System (X-OS)',
      type: 'richText',
      content: [
        'The answer is not another tool or another model. It is a new operating system built for Agentic AI and enterprise-grade cognition.',
        'X-OS is that intelligent system that brings revolution. It unifies Intelligence, Integration, and Experience into a single architecture. The aim is to aid the organization in making decisions, sensing, acting, and improving its operations in real time.',
        'This innovative system offers enterprises a systematic way to operationalize artificial intelligence, focusing on autonomy, decision-making, and system-wide orchestration.'
      ]
    },
    {
      id: 'xos-architecture',
      heading: 'The X-OS Architecture: Four Layers of Compounding Intelligence',
      type: 'image',
      caption: 'The complete X-OS stack showing how intelligence, integration, experience, and value networks compound',
      image: {
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Enterprise system architecture layers visualization'
      },
      supportingText:
        'X-OS turns intelligence into a system that continuously accelerates value creation through four interconnected layers that compound performance at every interaction.'
    },
    {
      id: 'layer1-intelligence',
      heading: 'Layer 1 — The Intelligence Layer',
      type: 'richText',
      content: [
        'The Intelligence Layer acts as the brain of the enterprise. It drives decisions and identifies patterns. These layers also guide the actions of every system, team, and agent that follows.',
        'The Intelligence Layer leverages pattern-based decision models and digital twin simulations to test decisions and workflows in virtual environments before agents execute them in the real world.',
        'As systems mature, enterprises unlock three stages of intelligence maturity: Predictive (forecasting demand, risk, or behavior), Prescriptive (recommending the best possible action), and Autonomous (executing multistep tasks with minimal oversight).',
        'Real-world examples: Tesla uses continuous fleet learning that updates decisions based on millions of miles of driving data. CRED applies behavioral intelligence to shape user actions. Amazon uses anticipatory intelligence to forecast demand and cut delivery times.'
      ]
    },
    {
      id: 'layer2-integration',
      heading: 'Layer 2 — The Integration Layer',
      type: 'richText',
      content: [
        'If the intelligence layer is the brain, the integration layer is the nervous system. It reliably sends signals in real time across every product or service.',
        'The Integration Layer establishes connectivity through an API-first architecture. APIs enable systems, agents, and services to connect and communicate quickly and reliably.',
        'A strong integration layer depends on network depth (strengthening internal loops) and network breadth (creating connections with merchants, marketplaces, platforms, and third-party developers).',
        'Examples in action: AirAsia Super App connects flights, payments, food delivery, loyalty, and travel within a single integrated ecosystem. Razorpay built an API-driven financial stack. Starbucks created a digital flywheel integrating payments, rewards, mobile ordering, and store operations.'
      ]
    },
    {
      id: 'layer3-experience',
      heading: 'Layer 3 — The Experience Layer',
      type: 'richText',
      content: [
        'When intelligence informs decisions and integration speeds flow, enterprises must create experiences that feel immediate, tailored, and emotionally meaningful.',
        'Intelligent enterprises treat Moments of Truth as a strategic advantage. They use behavioral signals, context, past interactions, and operational goals to guide what the customer sees with creativity and intent.',
        'Features include real-time recommendations that respond to intent, nudges from behavioral patterns and predicted needs, and adaptive interfaces that tailor layout, actions, and flows for each end-user.',
        'Examples: Netflix serves just-in-time personalization driving engagement through learning patterns. Blinkit uses real-time demand signals for instant delivery. Apple\'s design brings emotional resonance with seamless usability.'
      ]
    },
    {
      id: 'layer4-value-network',
      heading: 'Layer 4 — The Value Network Layer',
      type: 'richText',
      content: [
        'The Value Network Layer facilitates the organization\'s transition from internal strength to external advantage. It builds partnerships, integrations, and external collaborations using core capabilities.',
        'Value Exchange Networks function as cooperative exchange systems where the organization exposes specific capabilities. Partners use these capabilities to develop new products or enhance current ones.',
        'This layer exhibits three maturity stages: Connected (linking strategic partners), Collaborative (sharing assets and workflows for shared value), and Ecosystem-Driven (joining a bigger network that keeps growing).',
        'Real examples: Amazon powers millions of partners through marketplace, cloud, logistics, and identity systems. Tesla integrates partners, energy systems, vehicles, and charging networks into a single exchange loop.'
      ]
    },
    {
      id: 'convergence',
      heading: 'When All Four Layers Converge: The Compounding Flywheel',
      type: 'richText',
      content: [
        'Exponential growth occurs only when all four layers operate together as a single system. Smarter decisions, faster execution, richer experiences, and stronger partnerships transform into a compounding engine.',
        'The traditional equation 1 + 1 + 1 + 1 = 4 is no longer valid. When these layers align, the effect becomes 10x, 100x, or even 1000x.',
        'Each layer reinforces the others: The Intelligence Layer makes precise decisions. The Integration Layer distributes them instantly. The Experience Layer delivers personalized output. The Value Network Layer expands into larger ecosystems.',
        'The flywheel forms when all four layers reinforce one another. With every cycle, the system becomes smarter, faster, and more effective. This is how X-OS scales and how exponential organizations grow.'
      ]
    },
    {
      id: 'maturity-journey',
      heading: 'The Enterprise Maturity Journey',
      type: 'richText',
      content: [
        'No organization goes from basic automation to autonomous operations in a single day. Intelligent enterprises follow five deliberate stages:',
        'Stage 1 - Digitized: Organizations digitize processes with basic automation, fragmented data, and human-led decisions.',
        'Stage 2 - Connected: API-first thinking emerges, systems integrate, and data becomes standardized and accessible.',
        'Stage 3 - Intelligent: AI influences central decisions with predictive models, personalized experiences begin, and experimentation increases.',
        'Stage 4 - Adaptive: Real-time engines execute instantly, systems adapt workflows dynamically, and hybrid human-agent teams form.',
        'Stage 5 - Autonomous: Agentic systems coordinate and optimize most workflows with minimal oversight, achieving hyper-personalization and outcome-driven culture.'
      ]
    },
    {
      id: 'leadership-blueprint',
      heading: 'The New Leadership Blueprint',
      type: 'richText',
      content: [
        'Technology alone does not drive transformation. Leadership does. Moving from linear to exponential performance requires the entire CXO group to rethink how they operate.',
        'Key mindset shifts: Move from project mindset to system mindset. Move from automation to intelligence-first design. Move from silos to horizontal flows of value. Shift from annual planning to real-time guidance.',
        'Boards expect CXOs to demonstrate: A clearly articulated vision, complete business model overhaul, right governance structures, deployment of advanced systems, and outcome-driven leadership that quantifies growth and impact.',
        'CXOs must ensure that intelligence, integration, and experience are not separate projects but a continuous feedback loop.'
      ]
    },
    {
      id: 'implementation-roadmap',
      heading: 'Building Your Enterprise X-OS: 12-24 Month Roadmap',
      type: 'richText',
      content: [
        'Where to Start: Begin with data (build data products with real-time access), experience (map sequences and turn on real-time engines), ecosystem (build API-first partner integrations), and AI agents (deploy in targeted workflows).',
        'Where Not to Start: Avoid isolated pilots that cannot scale, model-first experimentation without workflow redesign, department-level initiatives, and tool shopping without system architecture.',
        'Quick Wins vs. Compounding Wins: Quick wins include agent copilots and predictive triggers. Compounding wins include multi-agent workflows, real-time decision engines, and adaptive experience systems.',
        'Implementation Sequence: Stabilize data foundation → Deploy core agents → Integrate systems via APIs → Activate adaptive experience flows → Scale into autonomous workflows.'
      ]
    },
    {
      id: 'industry-applications',
      heading: 'Industry Deep-Dives: X-OS in Action',
      type: 'richText',
      content: [
        'BFSI: X-OS supports proactive risk management, automated compliance, and personalized offerings at scale with real-time fraud prediction.',
        'Retail & Consumer: Dynamic personalization, demand forecasting, real-time inventory management, and adaptive pricing achieve higher conversion rates.',
        'Airlines & Mobility: Fleet optimization, route allocation, real-time customer service, and disruption management deliver 10x performance improvements.',
        'Manufacturing: Predictive maintenance, real-time production adjustments, and supply chain optimization reduce downtime and increase throughput.',
        'Healthcare: Real-time clinical decision support, automated patient care workflows, and predictive diagnostics improve outcomes and delivery speed.',
        'Telecom: Network control, customer needs anticipation, and personalized services reduce interruptions and increase loyalty.',
        'Real Estate & Smart Cities: Energy monitoring, traffic management, utility distribution, and predictive maintenance drive efficiency and sustainability.'
      ]
    },
    {
      id: 'future-vision',
      heading: 'The Future of Enterprise Design',
      type: 'richText',
      content: [
        'The upcoming decade will reward companies that think, act, and scale like intelligent systems. We are approaching a time of agentic enterprises where AI agents make real-time decisions and continually learn.',
        'These enterprises will run on low-cost, high-scale intelligence, where additional workflows run at almost zero marginal cost. The unit of business will become intelligent nodes in a value network.',
        'Enterprises that master X-OS will grow 10× to 50× faster than their legacy rivals—not because of incremental benefits, but because their system compounds value exponentially.',
        'XBD Consulting has a clear mandate: take leaders on a journey to build this system, not merely chase technology. We assist in designing the architecture to deploy intelligence for real, repeatable advantage.',
        'Here\'s the truth that will define the decade ahead: Exponential growth is not a strategy. It\'s a system.'
      ]
    },
  ],
  relatedPosts: [
    {
      id: 'agentic-ai-enterprise',
      title: 'From Generative AI to Agentic AI: The Enterprise Evolution',
      category: 'AI Systems',
      tags: ['AI Systems', 'Agentic AI', 'Enterprise Architecture'],
      href: '/blogs/agentic-ai-enterprise',
      readTime: '10 min read'
    },
    {
      id: 'intelligence-layer-design',
      title: 'Designing Intelligence Layers That Compound Business Value',
      category: 'Architecture',
      tags: ['Architecture', 'AI Systems', 'Decision Intelligence'],
      href: '/blogs/intelligence-layer-design',
      readTime: '12 min read'
    },
    {
      id: 'api-first-integration',
      title: 'Building API-First Integration for Exponential Scale',
      category: 'Integration',
      tags: ['Integration', 'APIs', 'Ecosystem'],
      href: '/blogs/api-first-integration',
      readTime: '8 min read'
    },
    {
      id: 'value-networks',
      title: 'From Products to Platforms: Building Value Networks That Scale',
      category: 'Ecosystem',
      tags: ['Ecosystem', 'Platforms', 'Network Effects'],
      href: '/blogs/value-networks',
      readTime: '11 min read'
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


