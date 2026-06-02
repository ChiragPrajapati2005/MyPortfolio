import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";

const projects = [
  {
    title: "PassOP Password Manager",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    desc: "Secure password manager with CRUD functionality, authentication, encrypted storage and REST APIs.",
    github: "https://github.com/ChiragPrajapati2005",
    demo: "https://your-demo-link.com",
  },

  {
    title: "To-Do List Web App",
    tech: ["React", "TailwindCSS"],
    desc: "Dynamic task management app with add/edit/delete features and responsive UI.",
    github: "https://github.com/ChiragPrajapati2005",
    demo: "https://your-demo-link.com",
  },

  {
    title: "Bug Tracker",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Bug tracking system with issue management, filtering and DOM event handling.",
    github: "https://github.com/ChiragPrajapati2005",
    demo: "https://chiragprajapati2005.github.io/Bug-Tracker/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" raone py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden glow"
            >
              <div className="h-40 sm:h-56 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-70" />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-400 leading-7">{project.desc}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:scale-105 transition"
                  >
                    <GithubIcon size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
