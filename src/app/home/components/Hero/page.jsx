"use client"
import React from "react"
import Lanyard from "@/utils/lanyard"
import Magnet from "@/utils/magnetButton"

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-screen items-center px-10 py-20 bg-secondary">

      {/* LEFT SIDE */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start z-10 md:pl-24">

        {/* Subtitle */}
        <div className="text-xl font-figtree text-primary/80 font-medium mb-6 tracking-widest">
          Independent Web Developer
        </div>

        {/* Heading */}
        <div className="space-y-2 mb-8">
          <div className="text-6xl md:text-7xl font-figtree font-bold text-primary leading-tight">
            I create digital experiences that work
          </div>
        </div>

        {/* Description */}
        <div className="text-lg font-figtree text-primary/70 leading-relaxed max-w-lg mb-10">
          From single-page concepts to fully deployed platforms, 
          I deliver comprehensive web solutions tailored to your vision.
        </div>

        {/* CTA Button */}
        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <button
            className="px-10 py-4 bg-[#09DE09] text-black font-figtree font-semibold rounded-lg text-lg
                       hover:bg-[#07C007] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </button>
        </Magnet>

      </div>

      {/* RIGHT SIDE - 3D Model */}
      <div className="md:w-1/2 w-full flex justify-center items-center z-10 mt-10 md:mt-0">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>

    </div>
  )
}
