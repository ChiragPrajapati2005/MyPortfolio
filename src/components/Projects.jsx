import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "PassOP Password Manager",

    description:
      "A secure password manager built with the MERN stack featuring CRUD operations, encrypted storage, and responsive UI.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
    ],

    github:
      "https://github.com/ChiragPrajapati2005",

    demo:
      "https://password-manager-dusky-delta.vercel.app",

    image:
      `${import.meta.env.BASE_URL}passop.png`,
  },
  {
  title: "Mini Project",

  description:
    "A full-stack web application built with Node.js, Express, MongoDB, and EJS featuring authentication, CRUD operations, and a responsive user interface.",

  tech: [
    "Node.js",
    "Express",
    "MongoDB",
    "EJS",
    "Bootstrap",
  ],

  github:
    "https://github.com/ChiragPrajapati2005/Mini_project",

  demo:
    "https://mini-project-gnt9.onrender.com",

  image:
    `${import.meta.env.BASE_URL}Mini.png`,
},

  {
    title: "Bug Tracker",

    description:
      "A web-based bug tracking system with issue management, filtering, and dynamic DOM interactions.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github:
      "https://github.com/ChiragPrajapati2005",

    demo:
      "https://chiragprajapati2005.github.io/Bug-Tracker/",

    image:
      `${import.meta.env.BASE_URL}Bug.png`,
  },


];

export default function Projects() {
  return (
    <section
      id="projects"
      className="raone py-32 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium mb-3">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            A collection of projects showcasing
            my skills in full stack development,
            problem solving, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-cyan-500/30
                transition-all
                duration-300
              "
            >

              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-52
                  object-cover
                "
              />

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      hover:border-cyan-400
                      transition
                    "
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-3
                        rounded-xl
                        bg-cyan-500
                        text-black
                        font-medium
                        hover:scale-105
                        transition
                      "
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}