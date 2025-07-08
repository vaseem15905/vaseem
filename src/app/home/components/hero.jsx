"use client"
import React from 'react'
import Lanyard from '@/utils/lanyard'
import SplitText from '@/utils/splitText'
import Particles from '@/utils/particles'
import Magnet from '@/utils/magnetButton'

export default function Hero() {
  return (
    <div className="relative flex flex-row w-full h-screen items-center overflow-hidden bg-black">
      {/* Fullscreen particles background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Particles
          particleColors={['#09DE09', '#A4DB65']}
          particleCount={300}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Gradient blurred green circles */}
      <div
        className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #09DE09 0%, rgba(9,222,9,0.2) 70%, transparent 100%)",
          filter: "blur(230px)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #09DE09 0%, rgba(9,222,9,0.2) 70%, transparent 100%)",
          filter: "blur(200px)",
          opacity: 0.6,
        }}
      />


      <div className="w-1/2 flex flex-col gap-6  justify-center items-start z-0 pl-24">
        <SplitText
          text="Independent Web Developer"
          className="text-4xl pb-2 text-white font-normal font-raleway text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
        
          text="I make"
          className="text-7xl p-2 text-white font-bold  leading-20 font-unbounded text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
          <SplitText
          text="web work"
          className="text-7xl p-2 text-white font-bold  leading-20 font-unbounded text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
        
          text="for you :)"
          className="text-7xl p-2 text-white font-bold  leading-20 font-unbounded text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
        
          text="From single-page ideas to fully deployed platforms, I deliver end-to-end."
          className="text-4xl text-white leading-14 font-normal font-raleway text-left"
          delay={30}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      <Magnet padding={70} disabled={false} magnetStrength={2}>
        <button
          className="mt-10 px-8 py-4 bg-[#09DE09] text-black font-bold rounded-md shadow-lg text-xl hover:bg-green-500 transition-colors duration-200"
          style={{ outline: "none", border: "none", cursor: "pointer" }}
        >
          Hire Me!
        </button>
        
      </Magnet>
      
      </div>
      

      <div className="w-1/2 flex justify-center items-center z-10">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </div>
  )
}

