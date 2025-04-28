// app/blog/[slug]/page.tsx
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../lib/sanity.image';

// Define PortableText components for rendering Sanity content blocks
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative w-full h-96">
          <Image
            src={urlForImage(value)}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      );
    },
  },
};

// Define types for our article data
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
  body: any; // PortableText content
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
      };
    };
  };
};

// Page will revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for known articles
export async function generateStaticParams() {
  const articles = await client.fetch(`
    *[_type == "article"] {
      "slug": slug.current
    }
  `);
  
  return articles.map((article: { slug: string }) => ({
    slug: article.slug,
  }));
}

// Fetch article data by slug
async function getArticle(slug: string) {
  return await client.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      summary,
      mainImage,
      body,
      "author": author->{name, image}
    }
  `, { slug });
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | K-are',
      description: 'The requested article could not be found.',
    };
  }
  
  return {
    title: `${article.title} | K-are Blog`,
    description: article.summary,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug) as Article | null;
  
  if (!article) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-block mb-6 text-blue-600 hover:text-blue-800"
        >
          ← Back to all articles
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {article.title}
        </h1>
        
        <div className="text-gray-500 mb-6">
          {article.publishedAt ? (
            format(new Date(article.publishedAt), 'MMMM d, yyyy')
          ) : 'Date unavailable'}
          {article.author?.name && (
            <span> • By {article.author.name}</span>
          )}
        </div>
        
        {article.mainImage && (
          <div className="relative w-full h-80 md:h-96 mb-8">
            <Image
              src={urlForImage(article.mainImage)}
              alt={article.mainImage.alt || article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <PortableText value={article.body} components={ptComponents} />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}