import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  return (
    <nav style={{}} className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" >
          <img src="images/logo_Agency.png"  className="w-30"></img>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}