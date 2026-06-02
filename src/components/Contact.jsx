import { useState } from "react";

import {
  GithubIcon,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message Sent!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 raone"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass p-8 rounded-3xl">

            <h3 className="text-3xl font-bold mb-6">
              Let's Work Together
            </h3>

            <p className="text-slate-400 leading-8">
              I’m open to internships,
              freelance opportunities,
              and full stack development roles.
            </p>

            <div className="flex gap-5 mt-10">

              <a href="mailto:cp920848@gmail.com">
                <Mail className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://github.com/ChiragPrajapati2005">
                <GithubIcon className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://www.linkedin.com/in/chirag-prajapati-58b3a7283/">
                <Linkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://leetcode.com/u/m1VGoAnXHS/">
                <Code2 className="hover:text-cyan-400 transition" />
              </a>

            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl space-y-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 outline-none"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-white/10 outline-none"
            />

            <button className="w-full py-4 rounded-xl bg-purple-600 hover:scale-105 transition">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}