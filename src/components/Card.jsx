import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    title: "Full Stack Development",
    description:
      "Building scalable web applications using React, Node.js, Express, and MongoDB with modern development practices.",
    tag: "MERN Stack",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Problem Solving",
    description:
      "Strong foundation in Data Structures & Algorithms with continuous practice on coding platforms.",
    tag: "DSA",
  },

  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Software Engineering",
    description:
      "Knowledge of DBMS, OOPs, Operating Systems, and Computer Networks for building robust systems.",
    tag: "Core CS",
  },
];

export default function Card() {
  return (
    <section className="py-24 px-6 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-cyan-400 font-medium mb-2">
            EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Areas of Focus
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl leading-8">
            Focused on building production-ready applications,
            solving algorithmic problems, and mastering
            software engineering fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cardData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                group
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
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <span
                  className="
                    inline-block
                    px-3 py-1
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                    text-sm
                    mb-4
                  "
                >
                  {card.tag}
                </span>

                <h3 className="text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {card.description}
                </p>

                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-cyan-400
                    hover:text-cyan-300
                    transition
                  "
                >
                  Learn More
                  <ExternalLink size={18} />
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}