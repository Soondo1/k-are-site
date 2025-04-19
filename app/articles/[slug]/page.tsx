// 5. app/articles/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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
  const htmlContent = marked(content);

  return (
    <article className="prose prose-lg max-w-none">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}