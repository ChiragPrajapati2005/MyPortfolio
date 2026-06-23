import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Send,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
      "https://myportfolio-api-cl9o.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="raone py-32 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            Open to internships, freelance projects,
            and full stack development opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
            "
          >
            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              Have a project idea or internship opportunity?
              Feel free to reach out. I usually respond quickly.
            </p>

            <div className="space-y-4">

              <a
                href="mailto:cp920848@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <Mail size={20} />
                <span>cp920848@gmail.com</span>
              </a>

              <a
                href="https://github.com/ChiragPrajapati2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chirag-prajapati-58b3a7283/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/m1VGoAnXHS/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <Code2 size={20} />
                <span>LeetCode</span>
              </a>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
              space-y-6
            "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border border-white/10
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border border-white/10
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border border-white/10
                outline-none
                resize-none
                focus:border-cyan-400
                transition
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                hover:scale-[1.02]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}