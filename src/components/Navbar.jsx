import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass raone">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          CP.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Resume */}
        <a
          href="/Resume.main.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-full bg-purple-600"
        >
          Resume
        </a>

        {/* Mobile Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0B0F19]">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="/Resume.main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-purple-600"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}