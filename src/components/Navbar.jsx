import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass raone">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">CP.</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Portfolio/Resume.main.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-full bg-purple-600 hover:scale-105 transition"
        >
          Resume
        </a>

        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}
