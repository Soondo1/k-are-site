// app/sanity-test/page.tsx
import { client } from '../../lib/sanity';

// This page is just for testing your Sanity connection
export default async function SanityTestPage() {
  // Test query to fetch document types in your dataset
  const types = await client.fetch(`
    array::unique(*._type)
  `);
  
  // Get count of articles in your dataset
  const articleCount = await client.fetch(`
    count(*[_type == "article"])
  `);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sanity Connection Test</h1>
      
      <div className="bg-green-100 p-4 rounded-lg mb-8">
        <p className="text-green-800">
          ✅ Connected to Sanity Project: <strong>{process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}</strong>
        </p>
        <p className="text-green-800">
          ✅ Using Dataset: <strong>{process.env.NEXT_PUBLIC_SANITY_DATASET}</strong>
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Document Types in Dataset:</h2>
        <ul className="list-disc pl-6">
          {types.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-3">Content Statistics:</h2>
        <p>Number of articles: <strong>{articleCount}</strong></p>
      </div>
    </div>
  );
}