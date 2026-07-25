import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className=" raone
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        bg-[#0B0F19]/80
        backdrop-blur-xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="
            text-2xl
            font-bold
            tracking-tight
          "
        >
          Chirag
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-slate-300
                hover:text-cyan-400
                transition
                duration-300
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/Chirag.Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >
          <Download size={18} />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            p-2
            rounded-lg
            border
            border-white/10
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t
            border-white/10
            bg-[#0B0F19]
          "
        >
          <div className="flex flex-col px-6 py-6 gap-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Chirag.Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
              "
            >
              <Download size={18} />
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
}