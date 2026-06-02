import { motion } from "framer-motion";
import { GithubIcon, Linkedin, Code2 } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="raone min-h-screen flex items-center px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-slate-400 mb-4">Hi, I'm</h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Chirag
            <span className="gradient-text"> Prajapati</span>
          </h1>

          <div className="text-2xl mt-6 text-cyan-400 font-semibold">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-slate-400 max-w-xl text-lg leading-8">
            Passionate full stack developer focused on building modern scalable
            web applications and premium UI experiences.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-8 py-4 rounded-xl bg-purple-600 hover:scale-105 transition">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-purple-600 hover:scale-105 transition inline-block"
              >
                Hire Me
              </a>
            </button>

            <button className="px-8 py-4 rounded-xl glass hover:bg-white/10 transition">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl glass hover:bg-white/10 transition inline-block"
              >
                View Projects
              </a>
            </button>
          </div>

          <div className="flex gap-5 mt-10">
            <a href="https://github.com/ChiragPrajapati2005" target="_blank">
              <GithubIcon className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/chirag-prajapati-58b3a7283/"
              target="_blank"
            >
              <Linkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://leetcode.com/u/m1VGoAnXHS/" target="_blank">
              <Code2 className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side UI */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 4,
            },
          }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-purple-600/30 rounded-full blur-[100px]" />

          {/* Gradient Border */}
          <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
            <img
              src={`${import.meta.env.BASE_URL}image.jpeg`}
              alt="Chirag Prajapati"
              className="
        w-[220px]
h-[220px]
sm:w-[280px]
sm:h-[280px]
md:w-[320px]
md:h-[320px]
        object-cover
        rounded-full
        border-4
        border-slate-900
        shadow-[0_0_60px_rgba(168,85,247,0.5)]
      "
            />
          </div>

          {/* Experience Badge */}
          <div
            className="absolute absolute bottom-0 left-0
sm:bottom-5
sm:-left-8 glass px-6 py-4 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
            <p className="text-slate-400 text-sm">Stack Developer</p>
          </div>

          {/* Projects Badge */}
          <div className="absolute top-0 right-0
sm:top-10
sm:-right-10 glass px-6 py-4 rounded-2xl">
            <h3 className="text-2xl font-bold text-purple-400">10+</h3>
            <p className="text-slate-400 text-sm">Projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
