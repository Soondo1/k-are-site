// components/NewsSection.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  const news = [
    { 
      id: 1,
      title: 'News Article Title Number One ##', 
      image: '/images/news1.jpg',
      slug: 'news-article-1'
    },
    { 
      id: 2,
      title: 'News Article Title Number One ##', 
      image: '/images/news2.jpg',
      slug: 'news-article-2'
    },
    { 
      id: 3,
      title: 'News Article Title Number One ##', 
      image: '/images/news3.jpg',
      slug: 'news-article-3'
    }
  ];
  
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">Recent News</h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {news.map((article) => (
          <Link href={`/news/${article.slug}`} key={article.id}>
            <div className="relative overflow-hidden transition-all rounded-lg h-52 group hover:shadow-lg">
              <div className="absolute inset-0 bg-gray-800">
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              {/* We'll use a div for now since we don't have actual images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-xl font-bold text-white">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}