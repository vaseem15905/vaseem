// "use client"

// import { useState } from "react"
// import CardSwap, { Card } from "@/utils/projectCards"
// import { projects } from "@/data/projectData"

// export default function Projects() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   return (
//     <section className="w-full min-h-screen bg-primary px-10 py-24 flex flex-col items-center justify-start overflow-visible">

//       {/* SECTION TITLE */}
//       <h1 className="text-6xl md:text-7xl font-bold text-center text-secondary mb-20">
//         Projects
//       </h1>

//       {/* MAIN GRID */}
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//         {/* LEFT — DYNAMIC CONTENT */}
//         <div className="flex flex-col gap-5 text-secondary font-figtree md:pl-8">

//           <h2 className="text-4xl font-bold leading-tight">
//             {projects[activeIndex].title}
//           </h2>

//           <p className="text-lg text-secondary/80 leading-relaxed">
//             {projects[activeIndex].description}
//           </p>

//           <div className="flex gap-4 mt-3">
//             <a
//               href={projects[activeIndex].live}
//               target="_blank"
//               className="px-6 py-2 bg-accent hover:bg-accentdark transition rounded-lg font-semibold text-black"
//             >
//               View Live
//             </a>

//             <a
//               href={projects[activeIndex].github}
//               target="_blank"
//               className="px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition rounded-lg font-semibold"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* RIGHT — SWAPPING CARDS */}
//         <div className="relative flex justify-center items-center overflow-visible md:pr-8">

//           <CardSwap
//             cardDistance={120}
//             verticalDistance={80}
//             delay={5000}
//             onFrontChange={(i) => setActiveIndex(i)}
//           >
//             {projects.map((project, i) => (
//               <Card key={i}>
//                 <img
//                   src={project.images[0]}
//                   className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 />
//               </Card>
//             ))}
//           </CardSwap>

//         </div>

//       </div>
//     </section>
//   )
// }




"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CardSwap, { Card } from "@/utils/projectCards"
import { projects } from "@/data/projectData"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const hollowRef = useRef(null)

  useEffect(() => {
    if (!hollowRef.current) return

    gsap.fromTo(
      hollowRef.current,
      { x: -150 }, // start movement
      {
        x: 150,     // end movement (small range so no overflow)
        ease: "none",
        scrollTrigger: {
          trigger: hollowRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-primary px-10 py-32 overflow-visible flex flex-col items-center">

      {/* ==========================================
          BIG HOLLOW PROJECTS HEADING
         ========================================== */}
      <h1
        ref={hollowRef}
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          pointer-events-none
          select-none
          whitespace-nowrap
          z-0
          text-center
          
          max-w-[90vw]
        "
        style={{
          fontSize: "clamp(3rem, 20vw, 20rem)", // scalable & stays inside screen
          color: "transparent",
          WebkitTextStroke: "3px #1E1E1E",      // secondary color outline
          lineHeight: "1",
          fontWeight: "800",
        }}
      >
        PROJECTS
      </h1>

      {/* ==========================================
          MAIN GRID SECTION
         ========================================== */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-40">

        {/* LEFT — Dynamic content */}
        <div className="flex flex-col gap-5 text-secondary font-figtree md:pl-8 transition-opacity duration-500">

          <h2 className="text-4xl font-bold leading-tight">
            {projects[activeIndex].title}
          </h2>

          <p className="text-lg text-secondary/80 leading-relaxed">
            {projects[activeIndex].description}
          </p>

          <div className="flex gap-4 mt-3">
            <a
              href={projects[activeIndex].live}
              target="_blank"
              className="px-6 py-2 bg-accent hover:bg-accentdark transition rounded-lg font-semibold text-black"
            >
              View Live
            </a>

            <a
              href={projects[activeIndex].github}
              target="_blank"
              className="px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition rounded-lg font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT — CardSwap */}
        <div className="relative flex justify-center items-center overflow-visible md:pr-8">
          <CardSwap
            cardDistance={120}
            verticalDistance={80}
            delay={5000}
            onFrontChange={(i) => setActiveIndex(i)}
          >
            {projects.map((project, i) => (
              <Card key={i}>
                <img
                  src={project.images[0]}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </Card>
            ))}
          </CardSwap>
        </div>

      </div>
    </section>
  )
}
