import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="raone bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left */}
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">
              Chirag
              <span className="text-cyan-400"> Prajapati</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Full Stack Developer specializing in MERN stack
              applications with a passion for building scalable
              and user-friendly web experiences.
            </p>
          </div>

          {/* Center Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <a
                href="#about"
                className="hover:text-cyan-400 transition"
              >
                About
              </a>

              <a
                href="#projects"
                className="hover:text-cyan-400 transition"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="hover:text-cyan-400 transition"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Right Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="mailto:cp920848@gmail.com"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <Mail size={20} />
              </a>

              <a
                href="https://github.com/ChiragPrajapati2005"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/chirag-prajapati-58b3a7283/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://leetcode.com/u/m1VGoAnXHS/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <Code2 size={20} />
              </a>

            </div>

            <a
              href="/Resume.main.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                text-cyan-400
                hover:text-cyan-300
                transition
              "
            >
              View Resume
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © {year} Chirag Prajapati. All rights reserved.
            </p>

            <p className="text-slate-500 text-sm">
              Built with React, Tailwind CSS & Node.js
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}