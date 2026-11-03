import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-brand-teal">
          Risea
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-brand-teal font-medium transition">About Us</Link>
          <Link href="#programs" className="text-gray-600 hover:text-brand-teal font-medium transition">Programs</Link>
          <Link href="#contact" className="text-gray-600 hover:text-brand-teal font-medium transition">Contact</Link>
        </nav>

        {/* Donate Button */}
        <div>
          <Link 
            href="/donate" 
            className="bg-brand-amber text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
          >
            Donate Now
          </Link>
        </div>

      </div>
    </header>
  );
}