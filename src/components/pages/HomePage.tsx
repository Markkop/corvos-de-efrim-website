'use client'

import { BuildsSmallList } from '@/components/BuildsSmallList'
import { GamesSmallList } from '@/components/GamesSmallList'
import { blogPosts } from '@/lib/data'
import Link from 'next/link'
import { BlogPostCard } from '../BlogPostCard'

export function HomePage() {
  const latestPost = blogPosts[blogPosts.length - 1]
  const remainingPosts = blogPosts.slice(0, -1).reverse()

  return (
    <div className="pb-8 space-y-8">
      <section className="space-y-8">
        <BlogPostCard
          post={latestPost}
          featured
          cardLink={latestPost.cardLink}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remainingPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} cardLink={post.cardLink} />
        ))}
      </section>

      <section className="bg-[#2a2a2a] rounded-xl p-6 md:p-8">
        <Link href="/jogos" className="inline-block focus-visible:outline-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#e6d7c3] hover:scale-105 transition-transform">
            Presentes em
          </h2>
        </Link>
        <GamesSmallList />
      </section>

      <section className="bg-[#2a2a2a] rounded-xl p-6 md:p-8">
        <Link
          href="/jogos/waven/builds"
          className="inline-block focus-visible:outline-none"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#e6d7c3] hover:scale-105 transition-transform">
            Builds do Waven
          </h2>
        </Link>
        <BuildsSmallList />
      </section>
    </div>
  )
}
