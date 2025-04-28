// app/page.tsx
import GuideCard from '../components/GuideCard';
import Hero from '../components/Hero';
import TopQuestions from '../components/TopQuestions';
import NewsSection from '../components/NewsSection';
import Introduction from '../components/Introduction';

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <Hero />
        </div>
        <div className="md:col-span-2">
          <TopQuestions />
        </div>
      </div>
      
      <Introduction />
      <NewsSection />
    </>
  );
}