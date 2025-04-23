// components/ArticlesPreview.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function ArticlesPreview() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles')
  const filenames = fs.existsSync(articlesDir)
    ? fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md'))
    : []

  // Take the first 3 files
  const posts = filenames.slice(0, 3).map((name) => {
    const slug = name.replace(/\.md$/, '')
    const filePath = path.join(articlesDir, name)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, title: data.title as string }
  })

  return (
    <section className="max-w-4xl mx-auto my-12">
      <h3 className="mb-4 text-2xl font-bold">Latest Articles</h3>
      <ul className="space-y-4">
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/articles/${slug}`}
              className="text-mediumBlue hover:underline"
              legacyBehavior>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link
          href="/articles"
          className="px-4 py-2 text-white rounded-lg bg-mediumBlue"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
