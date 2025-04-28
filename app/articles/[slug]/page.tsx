// app/articles/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Add correct revalidation options
export const dynamic = 'force-dynamic';
// Or alternatively use a specific revalidation time:
// export const revalidate = 60; // revalidate every 60 seconds

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'));
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = marked.parse(content);

  return (
    <article className="prose prose-lg max-w-none">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}