// 7. app/faq/page.tsx
export default function FAQPage() {
    const faqs = [
      {
        question: 'How do I register for health insurance in Korea?',
        answer: 'Visit your local NHIS office with your ARC and proof of residence. You’ll be guided through the registration process there.'
      },
      {
        question: 'Can I visit the hospital without insurance?',
        answer: 'Yes, but you will be required to pay full price for any medical services without coverage.'
      },
      {
        question: 'Are there English-speaking doctors available?',
        answer: 'Yes, especially in international clinics in Seoul and major cities. K-are provides a directory of such clinics.'
      },
    ];
  
    return (
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-lightBlue p-4 rounded-xl">
              <h2 className="font-semibold text-xl mb-2">{faq.question}</h2>
              <p className="text-base">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }