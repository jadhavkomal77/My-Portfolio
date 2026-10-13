// import React from "react";
// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiTypescript,
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiTailwindcss,
//   SiRedux,
//   SiGithub,
//   SiBootstrap,
//   SiVite,
// } from "react-icons/si";
// import { FaCode, FaPlug } from "react-icons/fa6";

// const skills = [
//   {
//     name: "JavaScript",
//     icon: SiJavascript,
//     description: "Modern JavaScript for interactive applications.",
//   },
//   {
//     name: "React",
//     icon: SiReact,
//     description: "Building dynamic and responsive user interfaces.",
//   },
//   {
//     name: "Node.js",
//     icon: SiNodedotjs,
//     description: "Building scalable backend APIs and services.",
//   },
//   {
//     name: "TypeScript",
//     icon: SiTypescript,
//     description: "Typed JavaScript for reliable development.",
//   },
//   {
//     name: "Next.js",
//     icon: SiNextdotjs,
//     description: "Modern React framework for scalable applications.",
//   },
//   {
//     name: "Express",
//     icon: SiExpress,
//     description: "Fast and flexible backend framework.",
//   },
//   {
//     name: "MongoDB",
//     icon: SiMongodb,
//     description: "NoSQL database for modern applications.",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: SiTailwindcss,
//     description: "Utility-first styling for modern interfaces.",
//   },
//   {
//     name: "Redux Toolkit",
//     icon: SiRedux,
//     description: "Predictable state management for React apps.",
//   },
//   {
//     name: "React Native",
//     icon: SiReact,
//     description: "Cross-platform mobile application development.",
//   },
//   {
//     name: "Bootstrap",
//     icon: SiBootstrap,
//     description: "Responsive layouts and reusable UI components.",
//   },
//   {
//     name: "Git & GitHub",
//     icon: SiGithub,
//     description: "Version control and collaborative development.",
//   },
//   {
//     name: "REST API",
//     icon: FaPlug,
//     description: "Designing and integrating RESTful APIs.",
//   },
//   {
//     name: "Vite",
//     icon: SiVite,
//     description: "Fast development environment for modern apps.",
//   },
//   {
//     name: "HTML",
//     icon: FaCode,
//     description: "Semantic structure for modern web applications.",
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="
//         relative overflow-hidden
//         bg-[#09090b]
//         px-5 py-12
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
//             absolute left-[-140px] top-[80px]
//             h-[280px] w-[280px]
//             rounded-full
//             bg-orange-500/[0.045]
//             blur-[100px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-140px] top-[180px]
//             h-[300px] w-[300px]
//             rounded-full
//             bg-orange-500/[0.035]
//             blur-[110px]
//           "
//         />

//         <div
//           className="
//             absolute bottom-[-150px] left-1/2
//             h-[280px] w-[500px]
//             -translate-x-1/2
//             rounded-full
//             bg-orange-500/[0.025]
//             blur-[110px]
//           "
//         />

//         {/* Grid */}
//         <div
//           className="
//             absolute inset-0 opacity-[0.018]
//             [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />

//         {/* Small particles */}
//         <span
//           className="
//             absolute left-[10%] top-[20%]
//             h-[3px] w-[3px]
//             rounded-full
//             bg-orange-400/70
//           "
//         />

//         <span
//           className="
//             absolute right-[15%] top-[35%]
//             h-[2px] w-[2px]
//             rounded-full
//             bg-white/40
//           "
//         />

//         <span
//           className="
//             absolute left-[20%] bottom-[20%]
//             h-[2px] w-[2px]
//             rounded-full
//             bg-orange-400/60
//           "
//         />

//         <span
//           className="
//             absolute right-[30%] bottom-[12%]
//             h-[3px] w-[3px]
//             rounded-full
//             bg-orange-400/50
//           "
//         />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 mx-auto max-w-[1180px]">

//         {/* ================= HEADING ================= */}
//         <div className="mb-8 text-center">
//           <h2
//             className="
//               text-[38px]
//               font-bold
//               tracking-[-0.045em]
//               text-white
//               sm:text-[44px]
//               md:text-[50px]
//             "
//           >
//             My <span className="text-orange-500">Skills</span>
//           </h2>

//           <p
//             className="
//               mx-auto mt-2
//               max-w-[620px]
//               text-[14px]
//               leading-[1.6]
//               text-white/50
//               sm:text-[16px]
//             "
//           >
//             Technologies and tools I use to build modern, scalable and
//             user-friendly applications.
//           </p>

//           <div className="mx-auto mt-4 h-[4px] w-[58px] bg-orange-500" />
//         </div>

//         {/* ================= SKILLS GRID ================= */}
//         <div
//           className="
//             grid
//             grid-cols-2
//             gap-3
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-5
//           "
//         >
//           {skills.map((skill, index) => {
//             const Icon = skill.icon;

//             return (
//               <div
//                 key={skill.name}
//                 className="
//                   group
//                   relative
//                   min-h-[155px]
//                   overflow-hidden
//                   rounded-[10px]
//                   border border-white/[0.08]
//                   bg-white/[0.025]
//                   px-4 py-5
//                   text-center
//                   backdrop-blur-sm
//                   transition-all duration-300

//                   hover:-translate-y-1
//                   hover:border-orange-500/40
//                   hover:bg-white/[0.045]
//                   hover:shadow-[0_12px_35px_rgba(249,115,22,0.08)]
//                 "
//               >
//                 {/* Top Orange Line */}
//                 <div
//                   className="
//                     absolute left-1/2 top-0
//                     h-[2px] w-0
//                     -translate-x-1/2
//                     bg-orange-500
//                     transition-all duration-300
//                     group-hover:w-[45%]
//                   "
//                 />

//                 {/* ================= ICON ================= */}
//                 <div
//                   className="
//                     mx-auto mb-3
//                     flex h-[52px] w-[52px]
//                     items-center justify-center
//                     rounded-[12px]
//                     border border-white/[0.08]
//                     bg-[#151518]
//                     text-[25px]
//                     text-orange-500
//                     shadow-[0_8px_22px_rgba(249,115,22,0.05)]
//                     transition-all duration-300

//                     group-hover:scale-[1.06]
//                     group-hover:border-orange-500/30
//                     group-hover:shadow-[0_8px_25px_rgba(249,115,22,0.14)]
//                   "
//                 >
//                   <Icon />
//                 </div>

//                 {/* ================= NAME ================= */}
//                 <h3
//                   className="
//                     text-[15px]
//                     font-semibold
//                     tracking-[-0.02em]
//                     text-white
//                   "
//                 >
//                   {skill.name}
//                 </h3>

//                 {/* ================= DESCRIPTION ================= */}
//                 <p
//                   className="
//                     mx-auto mt-1.5
//                     max-w-[190px]
//                     text-[11px]
//                     leading-[1.45]
//                     text-white/45
//                   "
//                 >
//                   {skill.description}
//                 </p>

//                 {/* ================= NUMBER ================= */}
//                 <span
//                   className="
//                     absolute
//                     bottom-2
//                     right-3
//                     text-[9px]
//                     font-medium
//                     text-white/10
//                     transition
//                     group-hover:text-orange-500/30
//                   "
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiGithub,
  SiBootstrap,
  SiVite,
} from "react-icons/si";
import { FaCode, FaPlug } from "react-icons/fa6";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "Modern JavaScript for interactive applications.",
  },
  {
    name: "React",
    icon: SiReact,
    description: "Building dynamic and responsive user interfaces.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Building scalable backend APIs and services.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Typed JavaScript for reliable development.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Modern React framework for scalable applications.",
  },
  {
    name: "Express",
    icon: SiExpress,
    description: "Fast and flexible backend framework.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL database for modern applications.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first styling for modern interfaces.",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    description: "Predictable state management for React apps.",
  },
  {
    name: "React Native",
    icon: SiReact,
    description: "Cross-platform mobile application development.",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    description: "Responsive layouts and reusable UI components.",
  },
  {
    name: "Git & GitHub",
    icon: SiGithub,
    description: "Version control and collaborative development.",
  },
  {
    name: "REST API",
    icon: FaPlug,
    description: "Designing and integrating RESTful APIs.",
  },
  {
    name: "Vite",
    icon: SiVite,
    description: "Fast development environment for modern apps.",
  },
  {
    name: "HTML",
    icon: FaCode,
    description: "Semantic structure for modern web applications.",
  },
];


/* =========================================================
   SCROLL REVEAL
========================================================= */

function RevealOnScroll({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all
        duration-[850ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-10 scale-[0.97] opacity-0"
        }
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-[#09090b]
        px-5 py-12
        text-white
        sm:px-8
        md:px-10
        lg:px-12
      "
    >

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}

      <style>{`

        @keyframes skillsGlow {

          0%, 100% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: .45;
          }

          50% {
            transform: scale(1.12) translate3d(0, -12px, 0);
            opacity: .8;
          }

        }


        @keyframes skillsGlowReverse {

          0%, 100% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: .35;
          }

          50% {
            transform: scale(1.1) translate3d(0, 12px, 0);
            opacity: .65;
          }

        }


        @keyframes particleFloat {

          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: .35;
          }

          50% {
            transform: translateY(-14px) scale(1.5);
            opacity: 1;
          }

        }


        @keyframes headingLine {

          0%, 100% {
            transform: scaleX(1);
          }

          50% {
            transform: scaleX(1.18);
          }

        }


        @keyframes cardGlow {

          0%, 100% {
            box-shadow:
              0 8px 25px rgba(249,115,22,0.04);
          }

          50% {
            box-shadow:
              0 12px 35px rgba(249,115,22,0.09);
          }

        }


        .skills-glow {
          animation:
            skillsGlow
            8s
            ease-in-out
            infinite;
        }


        .skills-glow-reverse {
          animation:
            skillsGlowReverse
            9s
            ease-in-out
            infinite;
        }


        .particle-float {
          animation:
            particleFloat
            3.5s
            ease-in-out
            infinite;
        }


        .heading-line-animation {
          animation:
            headingLine
            4s
            ease-in-out
            infinite;
        }


        .skill-card-animation {
          animation:
            cardGlow
            5s
            ease-in-out
            infinite;
        }


        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>


      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            skills-glow
            absolute left-[-140px] top-[80px]
            h-[280px] w-[280px]
            rounded-full
            bg-orange-500/[0.045]
            blur-[100px]
          "
        />

        <div
          className="
            skills-glow-reverse
            absolute right-[-140px] top-[180px]
            h-[300px] w-[300px]
            rounded-full
            bg-orange-500/[0.035]
            blur-[110px]
          "
          style={{
            animationDelay: "1.5s",
          }}
        />

        <div
          className="
            skills-glow
            absolute bottom-[-150px] left-1/2
            h-[280px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[110px]
          "
          style={{
            animationDelay: "2.5s",
          }}
        />


        {/* Grid */}

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />


        {/* Small particles */}

        <span
          className="
            particle-float
            absolute left-[10%] top-[20%]
            h-[3px] w-[3px]
            rounded-full
            bg-orange-400/70
          "
        />

        <span
          className="
            particle-float
            absolute right-[15%] top-[35%]
            h-[2px] w-[2px]
            rounded-full
            bg-white/40
          "
          style={{
            animationDelay: ".7s",
          }}
        />

        <span
          className="
            particle-float
            absolute left-[20%] bottom-[20%]
            h-[2px] w-[2px]
            rounded-full
            bg-orange-400/60
          "
          style={{
            animationDelay: "1.4s",
          }}
        />

        <span
          className="
            particle-float
            absolute right-[30%] bottom-[12%]
            h-[3px] w-[3px]
            rounded-full
            bg-orange-400/50
          "
          style={{
            animationDelay: "2s",
          }}
        />

        <span
          className="
            particle-float
            absolute left-[45%] top-[13%]
            h-[2px] w-[2px]
            rounded-full
            bg-orange-400/40
          "
          style={{
            animationDelay: "2.5s",
          }}
        />

        <span
          className="
            particle-float
            absolute right-[8%] bottom-[35%]
            h-[2px] w-[2px]
            rounded-full
            bg-white/30
          "
          style={{
            animationDelay: "1.8s",
          }}
        />

      </div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1180px]">

        {/* ================= HEADING ================= */}

        <RevealOnScroll delay={50}>

          <div className="mb-8 text-center">

            <h2
              className="
                text-[38px]
                font-bold
                tracking-[-0.045em]
                text-white
                sm:text-[44px]
                md:text-[50px]
              "
            >
              My <span className="text-orange-500">Skills</span>
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-[620px]
                text-[14px]
                leading-[1.6]
                text-white/50
                sm:text-[16px]
              "
            >
              Technologies and tools I use to build modern, scalable and
              user-friendly applications.
            </p>

            <div
              className="
                heading-line-animation
                mx-auto mt-4
                h-[4px] w-[58px]
                bg-orange-500
              "
            />

          </div>

        </RevealOnScroll>


        {/* ================= SKILLS GRID ================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <RevealOnScroll
                key={skill.name}
                delay={100 + index * 65}
                className="h-full"
              >

                <div
                  className="
                    skill-card-animation
                    group
                    relative
                    min-h-[155px]
                    h-full
                    overflow-hidden
                    rounded-[10px]
                    border border-white/[0.08]
                    bg-white/[0.025]
                    px-4 py-5
                    text-center
                    backdrop-blur-sm
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-orange-500/40
                    hover:bg-white/[0.045]
                    hover:shadow-[0_12px_35px_rgba(249,115,22,0.08)]
                  "
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >

                  {/* Top Orange Line */}

                  <div
                    className="
                      absolute left-1/2 top-0
                      h-[2px] w-0
                      -translate-x-1/2
                      bg-orange-500
                      transition-all duration-300
                      group-hover:w-[45%]
                    "
                  />


                  {/* ================= ICON ================= */}

                  <div
                    className="
                      mx-auto mb-3
                      flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-[12px]
                      border border-white/[0.08]
                      bg-[#151518]
                      text-[25px]
                      text-orange-500
                      shadow-[0_8px_22px_rgba(249,115,22,0.05)]
                      transition-all duration-300

                      group-hover:scale-[1.06]
                      group-hover:border-orange-500/30
                      group-hover:shadow-[0_8px_25px_rgba(249,115,22,0.14)]
                    "
                  >
                    <Icon />
                  </div>


                  {/* ================= NAME ================= */}

                  <h3
                    className="
                      text-[15px]
                      font-semibold
                      tracking-[-0.02em]
                      text-white
                    "
                  >
                    {skill.name}
                  </h3>


                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      mx-auto mt-1.5
                      max-w-[190px]
                      text-[11px]
                      leading-[1.45]
                      text-white/45
                    "
                  >
                    {skill.description}
                  </p>


                  {/* ================= NUMBER ================= */}

                  <span
                    className="
                      absolute
                      bottom-2
                      right-3
                      text-[9px]
                      font-medium
                      text-white/10
                      transition
                      group-hover:text-orange-500/30
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </RevealOnScroll>

            );

          })}

        </div>

      </div>

    </section>
  );
}