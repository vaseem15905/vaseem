"use client"
import React from "react"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

const Card = () => {
  return (
    <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-3">
      <div className="group-hover:duration-400 relative rounded-2xl 
                      w-96 h-48
                      bg-gradient-to-br from-green-500 to-green-800 
                      text-white flex flex-col justify-center items-center gap-2
                      before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] 
                      before:bg-gradient-to-br before:from-green-700 before:to-green-900
                      before:right-4 before:top-0 before:w-96 before:h-44 before:-z-10">
          
          <span className="text-4xl font-bold font-figtree">Mohammed Vaseem</span>
          <p className="text-green-200 font-thin text-lg">- Frontend Developer -</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <section className="w-full min-h-auto bg-primary flex justify-center items-center px-10 py-24">

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT — Card */}
        <div className="flex justify-center md:justify-start md:translate-y-4 scale-110 md:scale-125">
          <Card />
        </div>

        {/* RIGHT — Text */}
        <div className="text-secondary font-figtree leading-relaxed flex flex-col gap-8">

          {/* TAGLINE */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Your ideas, built into clean and impactful digital experiences.
          </h2>

          {/* PARAGRAPH */}
          <p className="text-lg md:text-xl text-secondary/80">
            I help individuals and businesses bring their ideas online through modern,
            responsive, and visually compelling websites. From landing pages to complete
            digital solutions, I focus on creating designs that are clean, engaging,
            and conversion-driven. Every project is crafted with clarity, precision,
            and a strong commitment to delivering meaningful user experiences.
          </p>

          {/* CONTACT ICONS */}
          <div className="flex gap-10 mt-4">

            <a href="mailto:mvaseemh@gmail.com"
              className="text-accent hover:text-accentdark transition-colors">
              <Mail size={42} />
            </a>

            <a href="tel:+918608252352"
              className="text-accent hover:text-accentdark transition-colors">
              <Phone size={42} />
            </a>

            <a href="https://github.com/vaseem15905" target="_blank"
              className="text-accent hover:text-accentdark transition-colors">
              <Github size={42} />
            </a>

            <a href="https://www.linkedin.com/in/mohammed-vaseem15905" target="_blank"
              className="text-accent hover:text-accentdark transition-colors">
              <Linkedin size={42} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
