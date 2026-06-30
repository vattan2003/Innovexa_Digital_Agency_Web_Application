import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>

      {/*Code for navbar-------------------------------------------------------------------- */}

      <Navbar />

      {/*Code for Header */}

      <div className="" style={{ display: "flex", background: "rgba(15, 3, 12, 0.75)" }}>

        <h1
          className="font-extrabold"
          style={{
            fontSize: "64px",
            lineHeight: "75px",
            color: "#fff",
            maxWidth: "700px",
            letterSpacing: "1px",
            padding: "5px",
            textShadow: "0px 15px 20px rgba(0,0,0,.9)",
          }}
        >

          <span
            style={{
              display: "block",
              color: "#22d3ee",
              marginTop: "15px"
            }}
          >
            WELCOME TO
          </span>
        </h1>

        <img src="/images/logo_Agency.png" className="w-60"></img>


      </div>

      {/*Code for About section -----------------------------------------------------------*/}

      <div className="bg-slate-950  " style={{ display: "flex" }}>

        <p style={{ fontFamily: "Verdana, Geneva, sans-serif" }} className="bg-slate-950 text-white p-10">We are a digital agency with **5+ years of experience** delivering innovative web solutions for businesses of all sizes. Our team creates modern, responsive, and user-friendly digital products that help brands grow, improve customer engagement, and solve real-world business challenges through technology.
        </p>

        <img className="w-50  " style={{ borderRadius: "0%", objectFit: "" }} src="/images/ceo.png"></img>

      </div>


      <div className="bg-slate-950" style={{ display: "flex", justifyContent: 'end' }}>
        <Link href={"https://new-portfolio-gisv2w0nq-vattan2003s-projects.vercel.app/"} className="bg-slate-950 ">
          <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
            <span className="flex items-center gap-2">
              About CEO
              <span className="transition-transform duration-300 group-hover:translate-x-1">

              </span>
            </span>
          </button></Link> </div>



      {/*Code for Show Projects Using Grid -------------------------------------------------------*/}

      <div>

        <p className=" p-4 text-center  text-cyan-400  bg-slate-950 font-semibold tracking-widest uppercase">
          top Projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2v lg:grid-cols-2 gap-6 p-6  bg-slate-950 ">


          {/*card 1*/}

          <div className="  group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl mt-5 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]">

            <img src="images/prj1.png" className="w-80 h-80 rounded-2xl  flex items-center justify-center text-white mb-6 transition duration-500 group-hover:rotate-2"></img>

            <h3 className="text-2xl font-semibold text-white mb-4"> DevScope </h3>

            <p className="text-gray-400 leading-7">

              Developed DevScope, a responsive GitHub developer search application using React, integrating the GitHub API to display user profiles, repositories, and developer statistics with an intuitive UI.

            </p>

            <p className="text-gray-400 leading-7"><span className="text-cyan-400">Technologies</span>: React.js, JavaScript (ES6+), HTML5, CSS3,Tailwind CSS , GitHub REST API, Git, Vercel.</p>

            <Link href={"https://dev-scope-app.vercel.app/"}>

              <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="flex items-center gap-2">
                  View
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </Link>
          </div>

          {/*card 2 */}

          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl mt-5 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]" >

            <img src="images/prj2.png" className="w-80 h-80 rounded-2xl  flex items-center justify-center text-white mb-6 transition duration-500 group-hover:rotate-2"></img>

            <h3 className="text-2xl font-semibold text-white mb-4"> AI Text Transformer</h3>

            <p className="text-gray-400 leading-7">

              Designed and developed Text Transformer using Next.js, implementing dynamic text manipulation, real-time text analysis, clipboard functionality, and responsive UI to enhance productivity and user experience.

            </p>

            <p className="text-gray-400 leading-7"><span className="text-cyan-400">Technologies</span>: Next.js, JavaScript (ES6+), HTML5, CSS3,Tailwind CSS , OpenAI API, Git, Vercel.</p>

            <Link href={"https://ai-tranformer-app-next-js-dux4.vercel.app/"}>
              <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="flex items-center gap-2">
                  View
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </Link>

          </div>



          {/*card 3 */}


          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl mt-5 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]" >

           <img src="images/prj3.png" className="w-80 h-80 rounded-2xl  flex items-center justify-center text-white mb-6 transition duration-500 group-hover:rotate-2"></img>

            <h3 className="text-2xl font-semibold text-white mb-4">Weather Report App </h3>

            <p className="text-gray-400 leading-7">

              Designed and developed a Weather App using React.js, implementing REST API integration, asynchronous data fetching, dynamic UI rendering, city-based search, and responsive design to provide accurate real-time weather information.

            </p>

            <p className="text-gray-400 leading-7"><span className="text-cyan-400">Technologies</span>: React.js, JavaScript (ES6+), OpenWeather API, Axios/Fetch API, HTML5, CSS3,Tailwind CSS , Git, Vercel.</p>

            <Link href={"https://weather-app-ruby-psi.vercel.app/"}>
              <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="flex items-center gap-2">
                  View
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </Link>

          </div>



          {/*card 4 */}


          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl mt-5 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]" >

            <img src="images/prj4.png" className="w-80 h-80 rounded-2xl  flex items-center justify-center text-white mb-6 transition duration-500 group-hover:rotate-2"></img>

            <h3 className="text-2xl font-semibold text-white mb-4">

              Reestar Food Delivery App UI

            </h3>

            <p className="text-gray-400 leading-7">

              Created a Food Delivery App UI with HTML, CSS, and JavaScript, showcasing restaurant cards, food menus, category filtering, and a clean, user-friendly interface with responsive design.
            </p>

            <p className="text-gray-400 leading-7"><span className="text-cyan-400">Technologies</span>: JavaScript (ES6+), HTML5, CSS3, DOM Manipulation, Responsive Web Design, , Git, Vercel.</p>

            <Link href={"https://reestar.vercel.app/"}>
              <button className="group rounded-full border border-white/20 bg-white/10 px-8  m-3 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="flex items-center gap-2">
                  View
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </Link>

          </div>



        </div>
      </div>

    </>
  );
}