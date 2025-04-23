// components/TopQuestions.tsx
'use client'

const faqs = [
  {
    q: 'What documentation do I need to bring to the hospital?',
    a: 'You’ll need your ARC, passport, proof of residence, and insurance card when visiting most clinics.'
  },
  {
    q: 'How do I register for health insurance?',
    a: 'Visit your local NHIS branch with your ARC and proof of residence to enroll in the National Health Insurance scheme.'
  },
  {
    q: 'Can I get emergency care without insurance?',
    a: 'Yes — emergency treatment is available, but you will be billed at full cost unless you have prior coverage.'
  },
]

export default function TopQuestions() {
  return (
    <section id="top-questions" className="bg-blue/20 p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold text-darkBlue mb-6">
        Top Questions
      </h3>
      <div className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <details
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <summary className="cursor-pointer font-medium text-mediumBlue">
              {q}
            </summary>
            <p className="mt-2 text-gray-700">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
