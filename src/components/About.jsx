export default function About() {
  return (
    <section
      id="about"
      className=" raone py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Education
            </h3>

            <p className="text-slate-400 leading-8">
              B.Tech in Computer Science from
              ITM Gwalior (2023–2027).
              Focused on DSA, DBMS, OOPS,
              Operating Systems and
              Computer Networks.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Skills
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Java",
                "Golang",
                "TailwindCSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
