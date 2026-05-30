import { motion } from "framer-motion";

const experiences = [
  {
    role: "Java Full Stack Developer Virtual Internship",
    company: "Institute of Technology & Management, Gwalior",
    date: "Oct 2024 – Dec 2024",
    points: [
      "Learned core Java concepts",
      "Worked with OOP and Collections",
      "Hands-on coding exercises",
    ],
  },
  {
    role: "AI-ML Virtual Internship",
    company: "EduSkills (Supported by Google for Developers)",
    date: "Jan 2026 – Mar 2026",
    points: [
      "Learned ML fundamentals",
      "Worked with NumPy and Pandas",
      "Built mini ML projects",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 raone px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="relative border-l border-purple-500 pl-10 space-y-16">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="absolute -left-[50px] top-2 w-5 h-5 rounded-full bg-cyan-400 glow" />

              <div className="glass p-8 rounded-3xl">

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {exp.company}
                </p>

                <p className="text-slate-500 mt-2">
                  {exp.date}
                </p>

                <ul className="mt-6 space-y-3 text-slate-400">
                  {exp.points.map((point) => (
                    <li key={point}>
                      • {point}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
