import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor:"white",
      backdropFilter: "blur(20px)",
    }} className="shadow-[0_25px_60px_rgba(0,0,0,0.25)]  sticky top-0 z-50  ">
      <div className="max-w-7xl mx-auto px-6 h-16  gap-1 sm:gap-4 md:gap-6 lg:gap-8  flex items-center justify-between">

        {/* Logo--------------------------------------------------------------------------------------------------------------- */}
        <Link href="/" >
          <img src="images/logo_Agency.png" className="w-30"></img>
        </Link>

        {/* Navigation Links ---------------------------------------------------------------------------------------*/}

        <ul className="   flex items-center gap-3 font-medium    sm:gap-1

    md:gap-6 

    lg:gap-8  ">
          <li >
            <Link href="/" className="
    px-4 py-2
    text-sm
    rounded-full
    sm:px-3 sm:py-2 sm:text-base
    md:px-6 md:py-3 md:text-base
    lg:px-8 lg:py-3 lg:text-lg

    bg-blue-500
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-400
  ">
              Home
            </Link>
          </li>

          <li>
            <Link href="/services" className="
    px-4 py-2
    text-sm
    rounded-full

    sm:px-5 sm:py-2 sm:text-base

    md:px-6 md:py-3 md:text-base

    lg:px-8 lg:py-3 lg:text-lg

    bg-blue-500
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-400
  ">
              Services
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="
    px-4 py-2
    text-sm
    rounded-full

    sm:px-5 sm:py-2 sm:text-base

    md:px-6 md:py-3 md:text-base

    lg:px-8 lg:py-3 lg:text-lg

    bg-blue-500
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-400
  ">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/contact" className="
    px-4 py-2
    text-sm
    rounded-full
    sm:px-5 sm:py-2 sm:text-base
    md:px-6 md:py-3 md:text-base
    lg:px-8 lg:py-3 lg:text-lg
    bg-blue-500
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-400
  " >
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}