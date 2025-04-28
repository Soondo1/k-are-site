// app/components/NewsSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { client } from '../lib/sanity';
import { urlForImage } from '../lib/sanity.image';

type Article = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
};

async function getLatestArticles() {
  return await client.fetch(`
    *[_type == "article"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      summary,
      mainImage
    }
  `);
}

export default async function NewsSection() {
  const articles = await getLatestArticles() as Article[];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Latest Articles</h2>
        <Link 
          href="/blog" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View all →
        </Link>
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <div key={article._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {article.mainImage && (
                <div className="relative w-full h-40">
                  <Image
                    src={urlForImage(article.mainImage) || '/images/placeholder.jpg'}
                    alt={article.mainImage.alt || article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">
                  {article.publishedAt ? (
                    format(new Date(article.publishedAt), 'MMM d, yyyy')
                  ) : 'Date unavailable'}
                </div>
                
                <Link href={`/blog/${article.slug}`}>
                  <h3 className="font-semibold text-lg mb-2 text-blue-800 hover:text-blue-600 line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {article.summary}
                </p>
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 border border-gray-200 rounded-lg">
          <p>No articles available yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}