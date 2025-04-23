// app/about/page.tsx

export default function AboutPage() {
    const team = [
      { name: 'TBD',   role: 'Development Officer' },
      { name: 'TBD',   role: 'Research Consultant' },
      { name: 'TBD',   role: 'Research Officer' },
      { name: 'TBD',   role: 'Operations Officer' },
      { name: 'TBD',   role: 'Operations Officer' },       // second slot
      { name: 'TBD',   role: 'Marketing Officer' },
      { name: 'TBD',   role: 'Marketing Officer' },       // second slot
      { name: 'Soondo', role: 'Technology Officer (Development)' },
      { name: 'TBD',   role: 'Technology Officer (Designer)' },
    ];
  
    return (
      <div className="max-w-4xl mx-auto my-12 p-4 space-y-12">
        {/* About Intro */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-mediumBlue">About K‑are</h1>
          <p className="text-lg">
            K‑are is a centralized guide for foreigners to understand and navigate
            the Korean healthcare system.
          </p>
        </section>
  
        {/* Mission */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-darkBlue">Our Mission</h2>
          <p>
            To empower expatriates with clear, concise information and resources
            about healthcare in Korea.
          </p>
        </section>
  
        {/* Vision */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-darkBlue">Our Vision</h2>
          <p>
            A community where every foreigner feels confident in accessing quality
            healthcare services in Korea.
          </p>
        </section>
  
        {/* Meet the Team */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-darkBlue">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-lightBlue rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{member.role}</h3>
                <p className="text-sm text-darkBlue">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  