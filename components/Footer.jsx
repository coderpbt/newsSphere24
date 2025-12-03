
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-gray-300 pt-12 pb-3">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-white font-bold text-xl mb-3">NewsSphere 24</h2>
          <p className="text-gray-400 leading-relaxed">
            Your trusted source for breaking news in Finance, Technology, Health,
            Politics, and more.
          </p>
        </div>


        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>


        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Categories</h2>
          <ul className="space-y-2">
            <li><Link href="/Finance" className="hover:text-white">Finance</Link></li>
            <li><Link href="/Technology" className="hover:text-white">Technology</Link></li>
            <li><Link href="/Health" className="hover:text-white">Health</Link></li>
            <li><Link href="/Education" className="hover:text-white">Education</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">Twitter</Link> •{" "}
              <Link href="#" className="hover:text-white">Facebook</Link> •{" "}
              <Link href="#" className="hover:text-white">LinkedIn</Link> •{" "}
              <Link href="#" className="hover:text-white">Instagram</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-3 pt-3 text-center text-gray-400 text-sm">
        © 2025 NewsSphere 24. All rights reserved.
      </div>
    </footer>

    </>
  );
};

export default Footer;