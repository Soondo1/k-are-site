// app/blog/page.tsx
import Link from 'next/link';
import { client } from '../../lib/sanity';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | K-are',
  description: 'Healthcare insights and stories from the expat community in Korea.'
};

// Define the Article type
type Article = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  summary: string;
};

// Revalidate page data every 60 seconds in development/preview mode
// or when someone publishes new content in Sanity
export const revalidate = 60;

async function getArticles() {
  return await client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      summary
    }
  `);
}

export default async function BlogPage() {
  const articles = await getArticles() as Article[];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Blog
        </h1>
        
        <p className="text-lg mb-12">
          Stories, insights, and helpful information about navigating healthcare in Korea.
          Learn from our community's experiences and stay updated on healthcare developments.
        </p>
        
        <div className="space-y-10">
          {articles.length > 0 ? (
            articles.map((article) => (
              <article key={article._id} className="border-b border-gray-200 pb-8 last:border-0">
                <Link href={`/blog/${article.slug}`}>
                  <h2 className="text-2xl font-semibold text-blue-800 hover:text-blue-600 mb-2">
                    {article.title}
                  </h2>
                </Link>
                
                <div className="text-sm text-gray-500 mb-3">
                  {article.publishedAt ? (
                    format(new Date(article.publishedAt), 'MMMM d, yyyy')
                  ) : 'Date unavailable'}
                </div>
                
                <p className="text-gray-700">
                  {article.summary || 'No summary available.'}
                </p>
                
                <div className="mt-4">
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No articles found. Check back soon for new content!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}