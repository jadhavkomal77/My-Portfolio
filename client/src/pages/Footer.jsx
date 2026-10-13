import React from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#070709] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Orange glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[360px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.045]
            blur-[120px]
          "
        />

        <span className="absolute left-[10%] top-[35%] h-[3px] w-[3px] rounded-full bg-orange-500/60" />
        <span className="absolute right-[15%] top-[45%] h-[2px] w-[2px] rounded-full bg-white/30" />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 md:px-10 lg:px-12">

        {/* ================= FOOTER CONTENT ================= */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">

          {/* ================= BRAND ================= */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-3"
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  bg-orange-500
                  text-[17px]
                  font-bold
                  text-white
                  transition
                  group-hover:bg-orange-600
                "
              >
                K
              </span>

              <div className="text-left">
                <h3 className="text-[18px] font-bold tracking-[-0.02em]">
                  Komal Jadhav
                </h3>

                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                  Full Stack Developer
                </p>
              </div>
            </button>

            <p className="mt-5 max-w-[350px] text-[13px] leading-[1.7] text-white/35">
              I build modern, responsive and scalable web applications with
              clean interfaces and practical full-stack solutions.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">

              {/* GitHub */}
              <a
                href="https://github.com/jadhavkomal77"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/50
                  transition
                  hover:border-orange-500/40
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <FiGithub size={16} />
              </a>

              {/* Email */}
              <a
                href="mailto:komaljadhav2535@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/50
                  transition
                  hover:border-orange-500/40
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <FiMail size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/komal-jadhav-9b8573351"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/50
                  transition
                  hover:border-orange-500/40
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <FiLinkedin size={16} />
              </a>

            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigation
            </h4>

            <div className="space-y-3">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="
                    block
                    text-[13px]
                    text-white/45
                    transition
                    hover:translate-x-1
                    hover:text-orange-500
                  "
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Explore
            </h4>

            <div className="space-y-3">

              <a
                href="https://github.com/jadhavkomal77"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-1
                  text-[13px]
                  text-white/45
                  transition
                  hover:text-orange-500
                "
              >
                GitHub
                <FiArrowUpRight size={13} />
              </a>

              <a
                href="mailto:komaljadhav2535@gmail.com"
                className="
                  flex
                  items-center
                  gap-1
                  text-[13px]
                  text-white/45
                  transition
                  hover:text-orange-500
                "
              >
                Email Me
                <FiArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/komal-jadhav-9b8573351"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-1
                  text-[13px]
                  text-white/45
                  transition
                  hover:text-orange-500
                "
              >
                LinkedIn
                <FiArrowUpRight size={13} />
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="
                  text-[13px]
                  text-white/45
                  transition
                  hover:text-orange-500
                "
              >
                My Projects
              </button>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Contact
            </h4>

            <a
              href="mailto:komaljadhav2535@gmail.com"
              className="
                block
                break-all
                text-[13px]
                font-medium
                text-white/65
                transition
                hover:text-orange-500
              "
            >
              komaljadhav2535@gmail.com
            </a>

            <a
              href="tel:+917709171195"
              className="
                mt-3
                block
                text-[13px]
                font-medium
                text-white/45
                transition
                hover:text-orange-500
              "
            >
              +91 7709171195
            </a>

            <p className="mt-3 text-[12px] leading-[1.6] text-white/25">
              Chhatrapati Sambhajinagar,
              <br />
              Maharashtra, India
            </p>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.07]
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[11px] text-white/25">
            © {currentYear} Komal Jadhav. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-white/25">
            Built with
            <FiHeart
              size={12}
              className="fill-orange-500 text-orange-500"
            />
            and code.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-2
              text-[11px]
              font-medium
              text-white/35
              transition
              hover:text-orange-500
            "
          >
            Back to top

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                border
                border-white/[0.08]
                transition
                group-hover:border-orange-500/40
              "
            >
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}