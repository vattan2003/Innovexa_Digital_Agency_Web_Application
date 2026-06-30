import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  return (
    <nav   style={{
    background: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderBottom: "1px solid rgba(255,255,255,.10)",
  }}  className=" shadow-md sticky top-0 z-50  ">
      <div className="max-w-7xl mx-auto px-6 h-16  gap-2 sm:gap-4 md:gap-6 lg:gap-8  flex items-center justify-between">

        {/* Logo */}
        <Link href="/" >
          <img src="images/logo_Agency.png"  className="w-30"></img>
        </Link>

        {/* Navigation Links */}
        <ul className="   flex items-center gap-3 font-medium  ">
          <li className="">
            <Link href="/"  className=" 
    group
    px-5
    py-2
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-500
    hover:border-cyan-400
    hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
    hover:-translate-y-1
  ">
              Home
            </Link>
          </li>

          <li>
            <Link href="/services" className=" w-32 sm:w-40 md:w-56 lg:w-72
    group
    px-5
    py-2
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-500
    hover:border-cyan-400
    hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
    hover:-translate-y-1
  ">
              Services
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className=" w-32 sm:w-40 md:w-56 lg:w-72 
    group
    px-5
    py-2
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-500
    hover:border-cyan-400
    hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
    hover:-translate-y-1
  ">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/contact" className=" w-32 sm:w-40 md:w-56 lg:w-72 
    group
    px-5
    py-2
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-500
    hover:border-cyan-400
    hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
    hover:-translate-y-1
  ">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}