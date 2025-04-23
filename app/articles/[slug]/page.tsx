// app/articles/[slug]/page.tsx
'use client'               // if you need client-only interactivity

// 1) Force this page to run purely at request time
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { notFound }        from 'next/navigation'
import { PortableText }     from '@portabletext/react'
import { sanityClient }     from '../../../lib/sanity'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await sanityClient.fetch(
    `*[_type=='article' && slug.current == $slug][0]{ title, summary, body, publishedAt }`,
    { slug: params.slug }
  )
  if (!article) return notFound()

  return (
    <article className="prose mx-auto my-12 px-4">
      <h1>{article.title}</h1>
      <time className="block text-gray-500 mb-4">
        {new Date(article.publishedAt).toLocaleDateString()}
      </time>
      <p className="lead">{article.summary}</p>
      <PortableText value={article.body} />
    </article>
  )
}
