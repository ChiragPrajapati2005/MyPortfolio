export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h1 className="text-2xl font-bold gradient-text">
            Chirag Prajapati
          </h1>

          <p className="text-slate-400 mt-3">
            Built with React + TailwindCSS
          </p>
        </div>

        <div className="flex gap-8 text-slate-400">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}
