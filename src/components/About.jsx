import { GraduationCap, BrainCircuit, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building scalable applications
            <br />
            with modern web technologies.
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl leading-8 text-lg">
            I'm a Computer Science undergraduate at ITM Gwalior,
            passionate about full stack development and problem solving.
            I enjoy building performant web applications using the MERN stack
            while continuously improving my understanding of software engineering.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Education */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              group
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              hover:border-cyan-500/40
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <GraduationCap className="text-cyan-400" size={28} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Education
            </h3>

            <p className="text-slate-400 leading-8">
              Pursuing <span className="text-white font-medium">B.Tech in Computer Science</span>
              from <span className="text-white font-medium">ITM Gwalior</span>
              (2023–2027), with a strong foundation in software engineering fundamentals.
            </p>
          </motion.div>

          {/* Core CS */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              hover:border-purple-500/40
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <BrainCircuit className="text-purple-400" size={28} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Core CS
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>• Data Structures & Algorithms</li>
              <li>• Object Oriented Programming</li>
              <li>• DBMS & SQL</li>
              <li>• Operating Systems</li>
              <li>• Computer Networks</li>
            </ul>
          </motion.div>

          {/* Development */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              hover:border-pink-500/40
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
              <Code2 className="text-pink-400" size={28} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Development
            </h3>

            <p className="text-slate-400 leading-8">
              Building modern web applications using
              React, Node.js, Express, and MongoDB with
              a focus on performance, scalability,
              and clean architecture.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}