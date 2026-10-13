// import React from "react";
// import { useNavigate } from "react-router-dom";

// const projects = [
//   {
//     id: "swiggy-clone",
//     title: "Swiggy Clone",
//     description:
//       "A modern food delivery web application inspired by Swiggy, featuring restaurant discovery, food browsing, search, user authentication and a responsive ordering experience.",
//     image: "/swiggypro.png",
//     tech: ["React", "Node.js", "MongoDB"],
//     liveUrl: "https://swiggy-clone-pi-eight.vercel.app/",
//   },
//   {
//     id: "grid-ai",
//     title: "GRID AI",
//     description:
//       "An AI-powered networking platform designed to capture contacts, remember conversations and automate personalized follow-ups through a modern SaaS experience.",
//     image: "/gridpro.png",
//     tech: ["React", "Node.js", "MongoDB"],
//     liveUrl: "https://grid-project-theta-tawny.vercel.app/",
//   },
//   {
//     id: "castrex",
//     title: "Castrex Engineering",
//     description:
//       "A modern industrial engineering website for precision aluminium die casting, showcasing manufacturing capabilities, products, value-added services and engineering solutions.",
//     image: "/castrex.png",
//     tech: ["React", "Tailwind CSS", "JavaScript"],
//     liveUrl: "https://new-castrex-client.vercel.app/",
//   },
//  {
//   id: "mauli-marble",
//   title: "Mauli Marble",
//   description:
//     "A premium marble and stone website designed to showcase marble collections, products, projects and services with a modern and elegant user experience.",
//   image: "/mauli-marble.png",
//   tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
//   liveUrl: "https://mauli-marble.vercel.app/",
// },
// {
//   id: "shetmitra",
//   title: "Shetmitra",
//   description:
//     "A modern Marathi digital agriculture platform designed to help farmers with weather updates, market prices, crop information, government schemes and useful farming knowledge.",
//   image: "/shetamitr.png",
//   tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
//   liveUrl: "https://shetamitr.vercel.app/",
// },
// ];

// const ArrowIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[17px] w-[17px]"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M5 12h14" />
//     <path d="m13 6 6 6-6 6" />
//   </svg>
// );

// export default function Projects() {
//   const navigate = useNavigate();

//   return (
//     <section
//       id="projects"
//       className="
//         relative overflow-hidden
//         bg-[#09090b]
//         px-5 py-10
//         text-white
//         sm:px-8
//         md:px-10
//         lg:px-12
//       "
//     >
//       {/* ================= BACKGROUND ================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-[-150px] top-[100px]
//             h-[320px] w-[320px]
//             rounded-full
//             bg-orange-500/[0.055]
//             blur-[110px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-150px] top-[180px]
//             h-[350px] w-[350px]
//             rounded-full
//             bg-blue-500/[0.035]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute bottom-[-180px] left-1/2
//             h-[320px] w-[550px]
//             -translate-x-1/2
//             rounded-full
//             bg-orange-500/[0.035]
//             blur-[120px]
//           "
//         />

//         <span className="absolute left-[9%] top-[25%] h-[3px] w-[3px] rounded-full bg-orange-400/70" />
//         <span className="absolute right-[12%] top-[32%] h-[2px] w-[2px] rounded-full bg-white/40" />
//         <span className="absolute left-[25%] bottom-[15%] h-[2px] w-[2px] rounded-full bg-orange-400/60" />

//         <div
//           className="
//             absolute inset-0 opacity-[0.018]
//             [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 mx-auto max-w-[1250px]">

//         {/* Heading */}
//         <div className="mb-8 text-center">
//           <h2
//             className="
//               text-[38px] font-bold
//               tracking-[-0.045em]
//               text-white
//               sm:text-[44px]
//               md:text-[50px]
//             "
//           >
//             My <span className="text-orange-500">Projects</span>
//           </h2>

//           <p className="mx-auto mt-2 max-w-[650px] text-[15px] leading-[1.6] text-white/50 sm:text-[17px]">
//             A collection of modern web applications and software solutions
//             built with clean design, scalable architecture and modern
//             technologies.
//           </p>

//           <div className="mx-auto mt-4 h-[4px] w-[58px] bg-orange-500" />
//         </div>

//         {/* ================= 3 PROJECTS ================= */}
//         <div className="grid gap-5 md:grid-cols-3">
//           {projects.map((project) => (
//             <article
//               key={project.id}
//               className="
//                 group overflow-hidden
//                 rounded-[10px]
//                 border border-white/[0.09]
//                 bg-white/[0.025]
//                 shadow-[0_10px_35px_rgba(0,0,0,0.18)]
//                 backdrop-blur-sm
//                 transition-all duration-300
//                 hover:-translate-y-1
//                 hover:border-orange-500/30
//                 hover:shadow-[0_15px_40px_rgba(249,115,22,0.08)]
//               "
//             >
//               {/* Image */}
//               <div className="h-[205px] overflow-hidden bg-[#111113]">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                     h-full w-full object-cover
//                     transition-transform duration-500
//                     group-hover:scale-[1.035]
//                   "
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white">
//                   {project.title}
//                 </h3>

//                 <p className="mt-2 text-[14px] leading-[1.6] text-white/55">
//                   {project.description}
//                 </p>

//                 {/* Tech */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.map((item) => (
//                     <span
//                       key={item}
//                       className="
//                         rounded-full
//                         border border-white/[0.08]
//                         bg-white/[0.05]
//                         px-3 py-[5px]
//                         text-[11px]
//                         font-medium
//                         text-white/70
//                       "
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Details */}
//               <a
//   href={project.liveUrl}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="
//     mt-5 inline-flex items-center gap-2
//     rounded-[6px]
//     border border-orange-500
//     bg-orange-500
//     px-4 py-[9px]
//     text-[13px] font-semibold
//     text-white
//     transition-all duration-200
//     hover:bg-orange-600
//     hover:shadow-[0_8px_20px_rgba(249,115,22,0.18)]
//   "
// >
//   View Live Project
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[15px] w-[15px]"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M14 5h5v5" />
//     <path d="M10 14 19 5" />
//     <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
//   </svg>
// </a>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* ================= VIEW ALL ================= */}
//         <div className="mt-7 flex justify-center">
//           <button
//             type="button"
//             onClick={() => navigate("/projects")}
//             className="
//               inline-flex items-center gap-3
//               rounded-[6px]
//               border border-orange-500
//               bg-orange-500
//               px-5 py-[10px]
//               text-[14px] font-semibold
//               text-white
//               shadow-[0_8px_25px_rgba(249,115,22,0.15)]
//               transition-all duration-200
//               hover:bg-orange-600
//               hover:shadow-[0_10px_30px_rgba(249,115,22,0.22)]
//             "
//           >
//             View All Projects
//             <ArrowIcon />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "swiggy-clone",
    title: "Swiggy Clone",
    description:
      "A modern food delivery web application inspired by Swiggy, featuring restaurant discovery, food browsing, search, user authentication and a responsive ordering experience.",
    image: "/swiggypro.png",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://swiggy-clone-pi-eight.vercel.app/",
  },
  {
    id: "grid-ai",
    title: "GRID AI",
    description:
      "An AI-powered networking platform designed to capture contacts, remember conversations and automate personalized follow-ups through a modern SaaS experience.",
    image: "/gridpro.png",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://grid-project-theta-tawny.vercel.app/",
  },
  {
    id: "castrex",
    title: "Castrex Engineering",
    description:
      "A modern industrial engineering website for precision aluminium die casting, showcasing manufacturing capabilities, products, value-added services and engineering solutions.",
    image: "/castrex.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://new-castrex-client.vercel.app/",
  },
  {
    id: "mauli-marble",
    title: "Mauli Marble",
    description:
      "A premium marble and stone website designed to showcase marble collections, products, projects and services with a modern and elegant user experience.",
    image: "/mauli-marble.png",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://mauli-marble.vercel.app/",
  },
  {
    id: "shetmitra",
    title: "Shetmitra",
    description:
      "A modern Marathi digital agriculture platform designed to help farmers with weather updates, market prices, crop information, government schemes and useful farming knowledge.",
    image: "/shetamitr.png",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://shetamitr.vercel.app/",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function Projects() {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ===============================
           BACKGROUND ANIMATIONS
        =============================== */

        @keyframes projectsGlowOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate3d(18px, -15px, 0) scale(1.08);
            opacity: 0.8;
          }
        }

        @keyframes projectsGlowTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translate3d(-18px, 15px, 0) scale(1.06);
            opacity: 0.75;
          }
        }

        @keyframes projectsParticle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translateY(-16px) scale(1.35);
            opacity: 0.9;
          }
        }

        @keyframes projectsLine {
          0%,
          100% {
            transform: scaleX(1);
          }

          50% {
            transform: scaleX(1.18);
          }
        }

        /* ===============================
           HEADING ANIMATION
        =============================== */

        .projects-heading-animation {
          opacity: 0;
          transform: translateY(25px);
        }

        .projects-heading-animation.show {
          animation: projectsHeadingReveal 0.8s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes projectsHeadingReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===============================
           CARD ANIMATION
        =============================== */

        .project-card-animation {
          opacity: 0;
          transform: translateY(35px) scale(0.98);
        }

        .project-card-animation.show {
          animation: projectCardReveal 0.75s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes projectCardReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ===============================
           IMAGE ANIMATION
        =============================== */

        .project-image-animation {
          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ===============================
           TECH TAG ANIMATION
        =============================== */

        .project-tech-animation {
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background-color 0.25s ease;
        }

        .project-tech-animation:hover {
          transform: translateY(-2px);
        }

        /* ===============================
           BUTTON ANIMATION
        =============================== */

        .project-button-animation {
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background-color 0.2s ease;
        }

        .project-button-animation:hover {
          transform: translateY(-2px);
        }

        /* ===============================
           ACCESSIBILITY
        =============================== */

        @media (prefers-reduced-motion: reduce) {
          .projects-heading-animation,
          .project-card-animation {
            opacity: 1;
            transform: none;
          }

          .projects-heading-animation.show,
          .project-card-animation.show {
            animation: none;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects"
        className="
          relative overflow-hidden
          bg-[#09090b]
          px-5 py-10
          text-white
          sm:px-8
          md:px-10
          lg:px-12
        "
      >
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute left-[-150px] top-[100px]
              h-[320px] w-[320px]
              rounded-full
              bg-orange-500/[0.055]
              blur-[110px]
            "
            style={{
              animation: "projectsGlowOne 6s ease-in-out infinite",
            }}
          />

          <div
            className="
              absolute right-[-150px] top-[180px]
              h-[350px] w-[350px]
              rounded-full
              bg-blue-500/[0.035]
              blur-[120px]
            "
            style={{
              animation: "projectsGlowTwo 7s ease-in-out infinite",
            }}
          />

          <div
            className="
              absolute bottom-[-180px] left-1/2
              h-[320px] w-[550px]
              -translate-x-1/2
              rounded-full
              bg-orange-500/[0.035]
              blur-[120px]
            "
            style={{
              animation: "projectsGlowOne 8s ease-in-out infinite",
            }}
          />

          <span
            className="
              absolute left-[9%] top-[25%]
              h-[3px] w-[3px]
              rounded-full
              bg-orange-400/70
            "
            style={{
              animation: "projectsParticle 3s ease-in-out infinite",
            }}
          />

          <span
            className="
              absolute right-[12%] top-[32%]
              h-[2px] w-[2px]
              rounded-full
              bg-white/40
            "
            style={{
              animation: "projectsParticle 4s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />

          <span
            className="
              absolute left-[25%] bottom-[15%]
              h-[2px] w-[2px]
              rounded-full
              bg-orange-400/60
            "
            style={{
              animation: "projectsParticle 3.5s ease-in-out infinite",
              animationDelay: "1.2s",
            }}
          />

          <div
            className="
              absolute inset-0 opacity-[0.018]
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto max-w-[1250px]">

          {/* ================= HEADING ================= */}

          <div
            className={`
              mb-8 text-center
              projects-heading-animation
              ${sectionVisible ? "show" : ""}
            `}
          >
            <h2
              className="
                text-[38px] font-bold
                tracking-[-0.045em]
                text-white
                sm:text-[44px]
                md:text-[50px]
              "
            >
              My <span className="text-orange-500">Projects</span>
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-[650px]
                text-[15px]
                leading-[1.6]
                text-white/50
                sm:text-[17px]
              "
            >
              A collection of modern web applications and software solutions
              built with clean design, scalable architecture and modern
              technologies.
            </p>

            <div
              className="mx-auto mt-4 h-[4px] w-[58px] bg-orange-500"
              style={{
                animation: sectionVisible
                  ? "projectsLine 2s ease-in-out infinite"
                  : "none",
              }}
            />
          </div>

          {/* ================= 3 PROJECTS ================= */}

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`
                  group overflow-hidden
                  rounded-[10px]
                  border border-white/[0.09]
                  bg-white/[0.025]
                  shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/30
                  hover:shadow-[0_15px_40px_rgba(249,115,22,0.08)]
                  project-card-animation
                  ${sectionVisible ? "show" : ""}
                `}
                style={{
                  animationDelay: `${200 + index * 140}ms`,
                }}
              >
                {/* ================= IMAGE ================= */}

                <div className="h-[205px] overflow-hidden bg-[#111113]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.035]
                      project-image-animation
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-5">
                  <h3
                    className="
                      text-[20px]
                      font-semibold
                      tracking-[-0.02em]
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-[1.6]
                      text-white/55
                    "
                  >
                    {project.description}
                  </p>

                  {/* ================= TECH ================= */}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border border-white/[0.08]
                          bg-white/[0.05]
                          px-3 py-[5px]
                          text-[11px]
                          font-medium
                          text-white/70
                          project-tech-animation
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* ================= DETAILS ================= */}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5 inline-flex items-center gap-2
                      rounded-[6px]
                      border border-orange-500
                      bg-orange-500
                      px-4 py-[9px]
                      text-[13px]
                      font-semibold
                      text-white
                      transition-all duration-200
                      hover:bg-orange-600
                      hover:shadow-[0_8px_20px_rgba(249,115,22,0.18)]
                      project-button-animation
                    "
                  >
                    View Live Project

                    <svg
                      viewBox="0 0 24 24"
                      className="h-[15px] w-[15px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 5h5v5" />
                      <path d="M10 14 19 5" />
                      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* ================= VIEW ALL ================= */}

          <div
            className={`
              mt-7 flex justify-center
              projects-heading-animation
              ${sectionVisible ? "show" : ""}
            `}
            style={{
              animationDelay: "950ms",
            }}
          >
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="
                inline-flex items-center gap-3
                rounded-[6px]
                border border-orange-500
                bg-orange-500
                px-5 py-[10px]
                text-[14px]
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(249,115,22,0.15)]
                transition-all duration-200
                hover:bg-orange-600
                hover:shadow-[0_10px_30px_rgba(249,115,22,0.22)]
                project-button-animation
              "
            >
              View All Projects
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}