// app/page.tsx
import Hero from '../components/Hero'
import TopQuestions from '../components/TopQuestions'
import NewsSection from '../components/NewsSection'

export default function HomePage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4 pt-8">
      <Hero />
      <TopQuestions />
      <NewsSection />
    </div>
  )
}
