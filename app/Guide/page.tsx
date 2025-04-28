// app/guide/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Foreigner\'s Guide to Korean Healthcare | K-are',
  description: 'A comprehensive guide for foreigners navigating the Korean healthcare system.'
};

export default function GuidePage() {
  // Define guide sections
  const guideSections = [
    {
      id: 'health-insurance',
      title: 'Health Insurance',
      description: 'Understanding the Korean National Health Insurance System',
      href: '/guide/health-insurance'
    },
    {
      id: 'finding-hospitals',
      title: 'Finding Hospitals',
      description: 'How to locate and choose the right medical facility',
      href: '/guide/finding-hospitals'
    },
    {
      id: 'medical-terms',
      title: 'Essential Medical Terms',
      description: 'Key Korean phrases and terms for medical visits',
      href: '/guide/medical-terms'
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      description: 'What to do in case of medical emergencies',
      href: '/guide/emergency-care'
    },
    {
      id: 'medication',
      title: 'Medication & Pharmacies',
      description: 'Getting prescriptions and over-the-counter medicine',
      href: '/guide/medication'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Foreigner's Guide to Korean Healthcare
        </h1>
        
        <p className="text-lg mb-8">
          Navigating healthcare in a foreign country can be challenging. This guide provides essential 
          information for foreigners living in or visiting Korea, helping you access the care you need 
          with confidence.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {guideSections.map((section) => (
            <Link 
              href={section.href} 
              key={section.id}
              className="block p-6 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Need Personalized Help?</h2>
          <p className="mb-4">
            Our community of expats and healthcare experts is ready to assist with specific questions.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}