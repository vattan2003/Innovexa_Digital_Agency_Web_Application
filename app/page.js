import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      backgroundImage: "url('/images/bg_agency.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "900px",
      width: "100%"
    }}  >

      {/*Nav Component*/}

      <Navbar />


      {/*Main Component-------------------------------------------------------------------------------------------------------------*/}
      <main className=" mx-auto px-10 py-10 ">
        <h1
          className="font-extrabold"
          style={{
            fontSize: "64px",
            lineHeight: "75px",
            color: "#fff",
            maxWidth: "700px",
            letterSpacing: "1px",
            textShadow: "0px 5px 20px rgba(0,0,0,.4)",
          }}
        >
          Transforming Ideas Into
          <span
            style={{
              display: "block",
              color: "#22d3ee",
            }}
          >
            Digital Excellence With Innovexa
          </span>
        </h1>

        <p className="mt-4" style={{
          color: "#d1d5db",
          maxWidth: "650px",
          marginTop: "30px",
          fontSize: "20px",
          lineHeight: "36px",
          letterSpacing: ".3px"
        }}>
          We design beautiful interfaces, build scalable web applications, and create data-driven digital marketing strategies that help brands grow online.
        </p>



        {/*code for get started Button--------------------------------------------------------------------------------- */}
        <Link href={"/services"}>
          <button className="group rounded-full border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
            <span className="flex items-center gap-2">
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </Link>

        {/*code for view work Button----------------------------------------------------------------------------------------------*/}
        <Link href={"/portfolio"}>
          <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
            <span className="flex items-center gap-2">
              View work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </Link>


      </main>
    </div>
  );
}