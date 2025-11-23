"use client"
import React, { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-[90%] fixed top-10 left-10 px-10 py-4 z-50 bg-primary/80 rounded-full backdrop-blur-xl shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo / Name */}
        <div className="text-2xl font-figtree font-bold text-secondary">
          Vaseem.dev
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          <a className="font-figtree text-lg text-secondary hover:text-accent transition-colors" href="#home">
            Home
          </a>
          <a className="font-figtree text-lg text-secondary hover:text-accent transition-colors" href="#projects">
            Projects
          </a>
          <a className="font-figtree text-lg text-secondary hover:text-accent transition-colors" href="#skills">
            Skills
          </a>
          <a className="font-figtree text-lg text-secondary hover:text-accent transition-colors" href="#contact">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-primary rounded-lg shadow-lg p-4 flex flex-col gap-4">

          <a
            href="#home"
            className="font-figtree text-secondary text-lg hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#projects"
            className="font-figtree text-secondary text-lg hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>

          <a
            href="#skills"
            className="font-figtree text-secondary text-lg hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            className="font-figtree text-secondary text-lg hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
