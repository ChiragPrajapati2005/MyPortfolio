import { motion } from "framer-motion";
import { Briefcase, Code2, Trophy } from "lucide-react";

const experiences = [
  {
    icon: <Code2 size={24} />,
    title: "Full Stack Development",
    period: "2024 - Present",
    description:
      "Building full stack web applications using React, Node.js, Express.js, and MongoDB while focusing on clean code and scalable architecture.",
  },

  {
    icon: <Trophy size={24} />,
    title: "Data Structures & Algorithms",
    period: "2023 - Present",
    description:
      "Continuously solving coding problems to strengthen problem-solving skills and improve understanding of algorithms and data structures.",
  },

  {
    icon: <Briefcase size={24} />,
    title: "Open to Opportunities",
    period: "Current",
    description:
      "Actively seeking internships and full stack development opportunities to gain industry experience and contribute to real-world projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="raone py-32 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Journey & Achievements
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            My journey in software development, problem solving,
            and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 ml-10 relative"
            >

              {/* Icon Circle */}
              <div
                className="
                  absolute
                  -left-[54px]
                  top-0
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                "
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className="
                  p-8
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-cyan-500/30
                  transition-all
                  duration-300
                "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-cyan-400 mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-400 leading-8 mt-4">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}