{/*import needed icons ---------------------------------------------------------------------------- */ }

import {
  FaPalette,
  FaCode,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";

{/*code for services stored in a Array of Object------------------------------------------------------------- */ }


const services = [
  {
    icon: <FaPalette size={40} />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, user-friendly, and visually stunning interfaces that deliver exceptional user experiences.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Web Development",
    description:
      "Building fast, secure, and scalable websites with modern technologies tailored to your business goals.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Branding",
    description:
      "Creating memorable brand identities through creative strategy, logo design, and visual storytelling.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    description:
      "Driving business growth with SEO, social media, content marketing, and data-driven advertising campaigns.",
  },
];










export default function Services()
{





    return(
<>


<section className="bg-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/*code for  Header------------------------------------------------------------------------- */}

          <div className="text-center mb-16">

            <p className="text-cyan-400 font-semibold tracking-widest uppercase">
              Our Services
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              Digital Solutions For Every Business
            </h2>

            <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
              We help businesses establish a powerful digital presence through
              innovative design, cutting-edge development, and result-driven
              marketing strategies.
            </p>

          </div>

          {/*code for service Card -------------------------------------------------------------------------------*/}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]"
              >

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6 transition duration-500 group-hover:rotate-6">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">

                  {service.title}

                </h3>

                <p className="text-gray-400 leading-7">

                  {service.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



</>


    )
}