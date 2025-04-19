// 8. components/NewsSection.tsx
export default function NewsSection() {
  const news = [
    { title: 'News Article Title Number One', img: '/images/news1.jpg' },
    { title: 'News Article Title Number Two', img: '/images/news2.jpg' },
    { title: 'News Article Title Number Three', img: '/images/news3.jpg' }
  ];
  return (
    <section className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Recent News</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {news.map((n,i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl group">
            <img src={n.img} alt={n.title} className="object-cover w-full h-48" />
            <div className="absolute inset-0 flex items-end p-4 transition bg-black bg-opacity-40 group-hover:bg-opacity-60">
              <h4 className="text-lg font-semibold text-white">{n.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
