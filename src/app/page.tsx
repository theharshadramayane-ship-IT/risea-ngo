import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-light py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6 max-w-4xl mx-auto leading-tight">
            Together We Can Make a <span className="text-brand-teal">Difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join us in our mission to create sustainable solutions for communities in need.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/donate" className="bg-brand-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition">
              Get Involved
            </Link>
            <Link href="#about" className="border-2 border-brand-teal text-brand-teal px-8 py-3 rounded-md font-semibold hover:bg-teal-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}