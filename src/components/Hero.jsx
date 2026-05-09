import { motion } from "framer-motion";
import {
  GithubIcon,
  Linkedin,
  Code2,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-slate-400 mb-4">
            Hi, I'm
          </h2>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Chirag
            <span className="gradient-text">
              {" "}Prajapati
            </span>
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
            Passionate full stack developer focused on building modern scalable web applications and premium UI experiences.
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
            <a
              href="https://github.com/ChiragPrajapati2005"
              target="_blank"
            >
              <GithubIcon className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/chirag-prajapati-58b3a7283/"
              target="_blank"
            >
              <Linkedin className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://leetcode.com/u/m1VGoAnXHS/"
              target="_blank"
            >
              <Code2 className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side UI */}

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="glass rounded-3xl p-8 glow"
        >
          <div className="grid grid-cols-2 gap-4">

            <div className="glass p-6 rounded-2xl">
              <p className="text-slate-400">
                Projects
              </p>

              <h2 className="text-4xl mt-4 font-bold">
                10+
              </h2>
            </div>

            <div className="glass p-6 rounded-2xl">
              <p className="text-slate-400">
                Internship
              </p>

              <h2 className="text-4xl mt-4 font-bold">
                2
              </h2>
            </div>

           <div className="glass p-8 rounded-2xl col-span-2">

  <h3 className="text-2xl font-bold mb-6">
    Tech Overview
  </h3>

  <div className="space-y-5">

    <div>
      <div className="flex justify-between mb-2">
        <span>React.js</span>
        <span>90%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/10">
        <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 w-[90%]" />
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span>Node.js</span>
        <span>80%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/10">
        <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 w-[80%]" />
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span>MongoDB</span>
        <span>75%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/10">
        <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 w-[75%]" />
      </div>
    </div>

  </div>

</div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
