// components/MeetTheTeam.tsx
import Image from 'next/image';

interface Member {
  name: string;
  photo: string;    // path under /public
  flag: string;     // path under /public
  quote: string;
  role: string;
  bio: string;
}

export default function MeetTheTeam() {
  const team: Member[] = [
    {
      name: 'Alex',
      photo: '/team/alex.jpg',
      flag: '/flags/china.svg',
      quote: '“If you want to go fast, go alone. But if you want to go further, go together.”',
      role: 'Development Officer',
      bio: 'Currently studying Mechanical Engineering in Yonsei University. Interested in learning new things, and solving problems.'
    },
    // ...add other members here
    {
      name: 'Soondo Mutewa',
      photo: '/team/soondo.jpg',
      flag: '/flags/zambia.svg',
      quote: '“Building bridges in healthcare starts with understanding.”',
      role: 'Technology Officer (Development)',
      bio: 'Founder of K‑are. Passionate about making Korean healthcare accessible to all foreigners.'
    },
  ];

  return (
    <section className="max-w-2xl mx-auto my-12 space-y-12">
      {team.map((member) => (
        <div
          key={member.name}
          className="overflow-hidden bg-white shadow-lg rounded-2xl"
        >
          {/* Photo + name overlay */}
          <div className="relative w-full h-64">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
            />
            <div className="absolute flex items-center space-x-3 bottom-4 left-4">
              <Image
                src={member.flag}
                alt=""
                width={32}
                height={32}
                className="border-2 border-white rounded-full"
              />
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                Meet {member.name}
              </h3>
            </div>
          </div>

          {/* Quote & details */}
          <div className="p-6 space-y-4">
            <blockquote className="p-4 text-lg italic rounded-lg bg-lightBlue text-darkBlue">
              {member.quote}
            </blockquote>

            <div className="flex items-start space-x-4">
              <svg
                className="flex-shrink-0 w-6 h-6 text-darkBlue"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* icon representing role */}
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div>
                <h4 className="text-xl font-semibold text-darkBlue">
                  {member.role}
                </h4>
                <p className="mt-2 text-gray-700">{member.bio}</p>
              </div>
            </div>
          </div>

          {/* K-are logo footer */}
          <div className="p-4 text-center border-t border-gray-200">
            <Image
              src="/logo-kare.svg"
              alt="K-are Logo"
              width={120}
              height={24}
              className="mx-auto opacity-75"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
