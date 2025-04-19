// 6. components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center p-8 mb-12 text-white bg-darkBlue rounded-2xl md:flex-row">
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="mb-4 text-4xl font-bold">Foreigner’s Guide to Korea</h2>
        <p className="mb-6">Helping you navigate the Korean healthcare system</p>
        <button className="px-6 py-3 font-medium rounded-full bg-blue hover:bg-mediumBlue">
          View
        </button>
      </div>
      <div className="flex-1">
        {/* Replace with actual book illustration image */}
        <div className="w-full h-48 bg-gradient-to-r from-blue to-lightBlue rounded-xl"></div>
      </div>
    </section>
  );
}
