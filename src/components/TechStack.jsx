
import { motion } from "framer-motion";

const techs = [
  "React.js",
  "JavaScript",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  
  "Git/GitHub",
];

export default function TechStack() {
  return (
    <section className="py-32 px-6 raone">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="glass rounded-3xl p-8 text-center glow hover:border-purple-500 transition"
            >
              <h3 className="text-2xl font-semibold gradient-text">
                {tech}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}