// 7. components/TopQuestions.tsx
export default function TopQuestions() {
  const questions = [
    'What documentation do I need to bring to the hospital?',
    'How to register for health insurance?',
    'Can I get emergency care without insurance?'
  ];
  return (
    <section className="p-8 mb-12 bg-lavender rounded-2xl">
      <h3 className="mb-6 text-2xl font-semibold">Top Questions</h3>
      <ol className="space-y-3 text-sm list-decimal list-inside text-darkBlue">
        {questions.map((q,i) => (
          <li key={i}>
            <a href="#" className="hover:underline">{q}</a>
          </li>
        ))}
      </ol>
    </section>
  );
}