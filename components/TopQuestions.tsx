// components/TopQuestions.tsx
import Link from 'next/link';

export default function TopQuestions() {
  const questions = [
    'What documentation do I need to bring to the hospital?',
    'What documentation do I need to bring to the hospital?',
    'What documentation do I need to bring to the hospital?',
    'What documentation do I need to bring to the hospital?',
    'What documentation do I need to bring to the hospital?'
  ];
  
  return (
    <section className="p-6 rounded-lg bg-lavender">
      <h3 className="mb-6 text-2xl font-semibold text-center text-darkBlue">
        Top Questions
      </h3>
      <ol className="space-y-3">
        {questions.map((question, index) => (
          <li key={index} className="flex">
            <span className="inline-block w-6 font-semibold text-mediumBlue">
              {index + 1}.
            </span>
            <Link 
              href={`/faq/${index + 1}`} 
              className="text-gray-700 hover:underline hover:text-darkBlue"
            >
              {question}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}