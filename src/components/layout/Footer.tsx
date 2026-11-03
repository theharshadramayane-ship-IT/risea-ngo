export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Info */}
        <div>
          <h2 className="text-2xl font-bold text-brand-amber mb-4">Risea</h2>
          <p className="text-gray-400">
            Working together to create sustainable solutions for communities in need across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-amber">Home</a></li>
            <li><a href="#" className="hover:text-brand-amber">About Us</a></li>
            <li><a href="#" className="hover:text-brand-amber">Programs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@risea.org</p>
          <p className="text-gray-400">Phone: +91 123 456 7890</p>
        </div>

      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; 2025 Risea. All Rights Reserved.</p>
      </div>
    </footer>
  );
}