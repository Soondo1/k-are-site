// app/articles/page.tsx
export const dynamic   = 'force-dynamic' 
export const revalidate = 0     
import Link from 'next/link'
import { sanityClient } from '../../lib/sanity'

type Post = {
  title: string
  summary: string
  slug: string
}

export default async function ArticlesPage() {
  // Fetch all articles, newest first
  const posts: Post[] = await sanityClient.fetch(
    `*[_type == "article"] | order(publishedAt desc) {
      title,
      summary,
      "slug": slug.current
    }`
  )

  return (
    <main className="max-w-4xl p-4 mx-auto my-12">
      <h1 className="mb-6 text-3xl font-bold">All Articles</h1>
      <ul className="space-y-8">
        {posts.map(({ slug, title, summary }) => (
          <li key={slug} className="p-6 transition rounded-lg bg-lightBlue hover:shadow-lg">
            <Link href={`/articles/${slug}`} className="block" legacyBehavior>
              <h2 className="text-2xl font-semibold text-darkBlue hover:underline">{title}</h2>
              <p className="mt-2 text-gray-700">{summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
