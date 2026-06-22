import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const techs = [
  {
    name: "React.js",
    icon: <FaReact size={40} />,
    color: "text-cyan-400",
  },

  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
    color: "text-yellow-400",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs size={40} />,
    color: "text-green-400",
  },

  {
    name: "Express.js",
    icon: <SiExpress size={40} />,
    color: "text-gray-300",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
    color: "text-green-500",
  },

  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={40} />,
    color: "text-sky-400",
  },

  {
    name: "Java",
    icon: <FaJava size={40} />,
    color: "text-red-400",
  },

  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
    color: "text-blue-400",
  },

  {
    name: "Git & GitHub",
    icon: <FaGitAlt size={40} />,
    color: "text-orange-500",
  },

  {
    name: "Postman",
    icon: <SiPostman size={40} />,
    color: "text-orange-400",
  },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="raone py-32 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-cyan-400 font-medium mb-3">
            TECH STACK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            A collection of technologies and tools
            I use to build modern, scalable,
            and responsive web applications.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {techs.map((tech, index) => (
            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-4
                hover:border-cyan-500/30
                transition-all
                duration-300
              "
            >

              <div className={tech.color}>
                {tech.icon}
              </div>

              <h3 className="text-lg font-medium text-center">
                {tech.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}