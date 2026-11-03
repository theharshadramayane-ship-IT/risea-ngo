import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-brand-light py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6 max-w-4xl mx-auto leading-tight">
            Together We Can Make a <span className="text-brand-teal">Difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join us in our mission to create sustainable solutions for communities in need across India.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/donate" className="bg-brand-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition">
              Get Involved
            </Link>
            <Link href="#programs" className="border-2 border-brand-teal text-brand-teal px-8 py-3 rounded-md font-semibold hover:bg-teal-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Impact Stats Section */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">12,500+</h3>
              <p className="text-teal-100">People Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">35+</h3>
              <p className="text-teal-100">Countries</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">250+</h3>
              <p className="text-teal-100">Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-teal-100">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We focus on sustainable development through education, health, and empowerment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-brand-light p-8 rounded-lg shadow-sm hover:shadow-md border-t-4 border-brand-teal transition">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Education</h3>
              <p className="text-gray-600">
                Providing quality education and soft skills training to school students (1st to 9th grade) to prepare them for future challenges.
              </p>
            </div>
            
            {/* Program 2 */}
            <div className="bg-brand-light p-8 rounded-lg shadow-sm hover:shadow-md border-t-4 border-brand-teal transition">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Healthcare</h3>
              <p className="text-gray-600">
                Improving access to essential healthcare services and promoting preventive health practices in rural areas.
              </p>
            </div>

            {/* Program 3 */}
            <div className="bg-brand-light p-8 rounded-lg shadow-sm hover:shadow-md border-t-4 border-brand-teal transition">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Creating opportunities for sustainable livelihoods through microfinance and vocational skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}