import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  ArrowRight,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0F19] flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Small Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/5
              text-cyan-400
              text-sm
              mb-6
            "
          >
            Full Stack Developer
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Chirag Prajapati
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-2xl">
            Computer Science undergraduate at ITM Gwalior,
            passionate about building scalable web applications
            using React, Node.js, Express.js, and MongoDB.
            Currently focused on full stack development and
            problem solving.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                bg-cyan-500
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Hire Me
              <ArrowRight size={18} />
            </a>

            <a
              href="/Resume.main.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              Resume
              <Download size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/ChiragPrajapati2005"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:text-cyan-400
                hover:border-cyan-400
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
                border
                border-white/10
                bg-white/5
                hover:text-cyan-400
                hover:border-cyan-400
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
                border
                border-white/10
                bg-white/5
                hover:text-cyan-400
                hover:border-cyan-400
                transition
              "
            >
              <Code2 size={20} />
            </a>

          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Image Container */}
            <div
              className="
                relative
                p-2
                rounded-full
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}image.jpeg`}
                alt="Chirag Prajapati"
                className="
                  w-[280px]
                  h-[280px]
                  md:w-[360px]
                  md:h-[360px]
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* Badge 1 */}
            <div
              className="
                absolute
                -left-6
                bottom-10
                px-4
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <h3 className="font-bold text-cyan-400">
                MERN Stack
              </h3>
              <p className="text-sm text-slate-400">
                Developer
              </p>
            </div>

            {/* Badge 2 */}
            <div
              className="
                absolute
                -right-6
                top-10
                px-4
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <h3 className="font-bold text-cyan-400">
                Open To
              </h3>
              <p className="text-sm text-slate-400">
                Internships
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}