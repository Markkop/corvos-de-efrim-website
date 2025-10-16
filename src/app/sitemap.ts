import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }))

  const routes = [
    '',
    '/about',
    '/jogos',
    '/jogos/dofus',
    '/jogos/dofus/membros',
    '/jogos/dofus/recrutamento',
    '/jogos/dofus/ganymede',
    '/jogos/waven',
    '/jogos/waven/builds',
    '/jogos/waven/dicas',
    '/jogos/waven/membros',
    '/jogos/waven/recrutamento',
    '/jogos/wakfu',
    '/jogos/wakfu/regimento',
    '/jogos/wakfu/membros',
    '/jogos/go-go-muffin',
    '/jogos/go-go-muffin/sobre',
    '/jogos/go-go-muffin/paper-plane',
  ].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
