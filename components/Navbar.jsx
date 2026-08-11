import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,250,252,0.82))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(148,163,184,0.18)",
      }}
      className="
        sticky top-0 z-50
        shadow-[0_15px_45px_rgba(15,23,42,0.12)]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-3 sm:px-5 md:px-6 lg:px-8
          h-16 sm:h-[70px] md:h-20
          gap-1 sm:gap-2 md:gap-6 lg:gap-8
          flex items-center justify-between
        "
      >

        {/* Logo--------------------------------------------------------------------------------------------------------------- */}
        <Link
          href="/"
          className="
            flex items-center
            shrink-0
            transition-all duration-300
            hover:scale-105
          "
        >
          <img
            src="images/logo_Agency.png"
            className="
              w-20
              sm:w-24
              md:w-28
              lg:w-32
              object-contain
            "
          ></img>
        </Link>


        {/* Navigation Links ---------------------------------------------------------------------------------------*/}

        <ul
          className="
            flex items-center
            gap-1
            sm:gap-2
            md:gap-4
            lg:gap-6
            font-medium
          "
        >
          <li>
            <Link
              href="/"
              className="
                inline-flex items-center justify-center
                px-2 py-1.5
                text-[11px]
                rounded-full

                sm:px-3 sm:py-2 sm:text-xs
                md:px-5 md:py-2.5 md:text-sm
                lg:px-6 lg:py-3 lg:text-base

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                text-white
                font-semibold

                shadow-[0_5px_15px_rgba(37,99,235,0.20)]

                transition-all
                duration-300
                ease-out

                hover:from-blue-700
                hover:to-cyan-600
                hover:-translate-y-0.5
                hover:scale-[1.03]
                hover:shadow-[0_8px_22px_rgba(37,99,235,0.30)]
              "
            >
              Home
            </Link>
          </li>


          <li>
            <Link
              href="/services"
              className="
                inline-flex items-center justify-center
                px-2 py-1.5
                text-[11px]
                rounded-full

                sm:px-3 sm:py-2 sm:text-xs
                md:px-5 md:py-2.5 md:text-sm
                lg:px-6 lg:py-3 lg:text-base

                bg-white/70
                backdrop-blur-md

                text-slate-700
                font-semibold

                border border-slate-200/80

                shadow-[0_4px_12px_rgba(15,23,42,0.06)]

                transition-all
                duration-300
                ease-out

                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(37,99,235,0.20)]
              "
            >
              Services
            </Link>
          </li>


          <li>
            <Link
              href="/portfolio"
              className="
                inline-flex items-center justify-center
                px-2 py-1.5
                text-[11px]
                rounded-full

                sm:px-3 sm:py-2 sm:text-xs
                md:px-5 md:py-2.5 md:text-sm
                lg:px-6 lg:py-3 lg:text-base

                bg-white/70
                backdrop-blur-md

                text-slate-700
                font-semibold

                border border-slate-200/80

                shadow-[0_4px_12px_rgba(15,23,42,0.06)]

                transition-all
                duration-300
                ease-out

                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(37,99,235,0.20)]
              "
            >
              Portfolio
            </Link>
          </li>


          <li>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-2 py-1.5
                text-[11px]
                rounded-full

                sm:px-3 sm:py-2 sm:text-xs
                md:px-5 md:py-2.5 md:text-sm
                lg:px-6 lg:py-3 lg:text-base

                bg-white/70
                backdrop-blur-md

                text-slate-700
                font-semibold

                border border-slate-200/80

                shadow-[0_4px_12px_rgba(15,23,42,0.06)]

                transition-all
                duration-300
                ease-out

                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(37,99,235,0.20)]
              "
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}