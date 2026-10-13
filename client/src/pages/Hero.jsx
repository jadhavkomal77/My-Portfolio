
// import React, { useEffect, useState } from "react";

// /* =========================================================
//    ICONS
// ========================================================= */

// const GithubIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[19px] w-[19px]"
//     fill="currentColor"
//   >
//     <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
//   </svg>
// );

// const LinkedinIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[19px] w-[19px]"
//     fill="currentColor"
//   >
//     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V9H3.54v11.45Z" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[19px] w-[19px]"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//   >
//     <rect x="3" y="5" width="18" height="14" rx="2" />
//     <path d="m4 7 8 6 8-6" />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-5 w-5"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M5 12h14" />
//     <path d="m13 6 6 6-6 6" />
//   </svg>
// );

// const MailButtonIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[21px] w-[21px]"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//   >
//     <rect x="3" y="5" width="18" height="14" rx="2" />
//     <path d="m4 7 8 6 8-6" />
//   </svg>
// );

// /* =========================================================
//    ORANGE TECH SHAPE
// ========================================================= */

// const TechShape = ({ className = "", variant = "orange" }) => {
//   const stroke =
//     variant === "white"
//       ? "rgba(255,255,255,.35)"
//       : "rgba(249,115,22,.55)";

//   return (
//     <div className={`pointer-events-none absolute ${className}`}>
//       <svg
//         viewBox="0 0 100 100"
//         className="h-full w-full"
//         fill="none"
//       >
//         <polygon
//           points="50,5 85,25 90,65 58,92 18,76 12,34"
//           stroke={stroke}
//           strokeWidth="1"
//         />

//         <polygon
//           points="50,20 73,34 76,60 55,76 29,65 26,39"
//           stroke={stroke}
//           strokeWidth="0.8"
//         />

//         <path
//           d="M12 34L50 20L85 25M18 76L55 76L90 65M50 5L50 20M50 20L55 76M26 39L73 34M29 65L76 60"
//           stroke={stroke}
//           strokeWidth="0.65"
//         />
//       </svg>
//     </div>
//   );
// };

// /* =========================================================
//    HOME
// ========================================================= */

// export default function Home() {
//   const roles = [
//     "Full Stack Developer",
//     "Mobile App Developer",
//     "Freelancer",
//   ];

//   const [roleIndex, setRoleIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [deleting, setDeleting] = useState(false);

//   /* =======================================================
//      TYPING EFFECT
//   ======================================================= */

//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     const speed = deleting ? 45 : 85;

//     const timer = setTimeout(() => {
//       if (!deleting) {
//         setDisplayText(
//           currentRole.slice(0, displayText.length + 1)
//         );

//         if (displayText === currentRole) {
//           setTimeout(() => setDeleting(true), 1100);
//         }
//       } else {
//         setDisplayText(
//           currentRole.slice(0, displayText.length - 1)
//         );

//         if (displayText === "") {
//           setDeleting(false);
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [displayText, deleting, roleIndex]);

//   /* =======================================================
//      CONTACT
//   ======================================================= */

//   const handleContact = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   /* =======================================================
//      PROJECTS
//   ======================================================= */

//   const handleProjects = () => {
//     document.getElementById("projects")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home"
//       className="
//         relative
//         min-h-[calc(100vh-78px)]
//         overflow-hidden
//         bg-[#080808]
//         text-white
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Main orange glow */}

//         <div
//           className="
//             absolute
//             left-1/2
//             top-[15%]
//             h-[440px]
//             w-[440px]
//             -translate-x-1/2
//             rounded-full
//             bg-orange-500/[0.07]
//             blur-[130px]
//           "
//         />

//         {/* Top right orange glow */}

//         <div
//           className="
//             absolute
//             right-[-180px]
//             top-[-150px]
//             h-[430px]
//             w-[430px]
//             rounded-full
//             bg-orange-600/[0.055]
//             blur-[120px]
//           "
//         />

//         {/* Bottom left orange glow */}

//         <div
//           className="
//             absolute
//             bottom-[-220px]
//             left-[-120px]
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-orange-500/[0.045]
//             blur-[120px]
//           "
//         />

//         {/* =================================================
//             SUBTLE GRID
//         ================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.12]
//             [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
//             [background-size:80px_80px]
//             [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]
//           "
//         />

//         {/* =================================================
//             SMALL STARS / DOTS
//         ================================================== */}

//         <span className="absolute left-[8%] top-[20%] h-[2px] w-[2px] rounded-full bg-orange-400/80" />

//         <span className="absolute left-[18%] top-[72%] h-[1px] w-[1px] rounded-full bg-white/70" />

//         <span className="absolute left-[28%] top-[14%] h-[2px] w-[2px] rounded-full bg-white/60" />

//         <span className="absolute left-[38%] top-[78%] h-[1px] w-[1px] rounded-full bg-orange-400/70" />

//         <span className="absolute right-[18%] top-[24%] h-[2px] w-[2px] rounded-full bg-white/70" />

//         <span className="absolute right-[8%] top-[67%] h-[1px] w-[1px] rounded-full bg-orange-400/80" />

//         <span className="absolute right-[28%] top-[12%] h-[1px] w-[1px] rounded-full bg-white/70" />

//         <span className="absolute left-[7%] top-[48%] h-[1px] w-[1px] rounded-full bg-white/50" />

//         <span className="absolute right-[39%] top-[45%] h-[2px] w-[2px] rounded-full bg-orange-400/70" />

//         <span className="absolute left-[47%] top-[9%] h-[1px] w-[1px] rounded-full bg-orange-300/70" />

//         {/* =================================================
//             FLOATING TECH OBJECTS
//         ================================================== */}

//         <TechShape
//           variant="orange"
//           className="
//             left-[7%]
//             top-[22%]
//             h-[72px]
//             w-[72px]
//             rotate-[12deg]
//             opacity-70
//             animate-[spin_18s_linear_infinite]
//           "
//         />

//         <TechShape
//           variant="white"
//           className="
//             right-[10%]
//             top-[29%]
//             h-[76px]
//             w-[76px]
//             rotate-[-12deg]
//             opacity-45
//             animate-[spin_22s_linear_infinite_reverse]
//           "
//         />

//         <TechShape
//           variant="orange"
//           className="
//             bottom-[16%]
//             left-[18%]
//             h-[58px]
//             w-[58px]
//             rotate-[25deg]
//             opacity-50
//             animate-[spin_20s_linear_infinite]
//           "
//         />

//         <TechShape
//           variant="white"
//           className="
//             bottom-[21%]
//             right-[22%]
//             h-[65px]
//             w-[65px]
//             rotate-[-18deg]
//             opacity-35
//             animate-[spin_25s_linear_infinite_reverse]
//           "
//         />
//       </div>

//       {/* =====================================================
//           TOP BORDER
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           left-0
//           right-0
//           top-0
//           h-px
//           bg-white/[0.08]
//         "
//       />

//       {/* =====================================================
//           HERO CONTENT
//       ====================================================== */}

//       <div
//         className="
//           relative
//           mx-auto
//           flex
//           min-h-[calc(100vh-78px)]
//           max-w-[1600px]
//           items-center
//           justify-center
//           px-5
//           py-8
//           sm:px-8
//           md:px-12
//           lg:px-16
//         "
//       >
//         <div
//           className="
//             relative
//             z-10
//             flex
//             w-full
//             max-w-[1250px]
//             flex-col
//             items-center
//             text-center
//           "
//         >

//           {/* =================================================
//               SMALL TOP LABEL
//           ================================================== */}

//           <div className="mb-4 flex items-center gap-3 sm:mb-5">

//             <span
//               className="
//                 h-px
//                 w-8
//                 bg-orange-500
//                 sm:w-12
//               "
//             />

//             <span
//               className="
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.38em]
//                 text-orange-400
//                 sm:text-[11px]
//               "
//             >
//               Welcome to my portfolio
//             </span>

//             <span
//               className="
//                 h-px
//                 w-8
//                 bg-orange-500
//                 sm:w-12
//               "
//             />

//           </div>

//           {/* =================================================
//               MAIN NAME
//           ================================================== */}
// <h1
//   className="
//     font-sans
//     max-w-full
//     text-center
//     text-[44px]
//     font-bold
//     leading-[0.95]
//     tracking-[-0.045em]
//     sm:text-[56px]
//     md:text-[68px]
//     lg:text-[80px]
//     xl:text-[92px]
//   "
// >
//   <span
//     className="
//       bg-gradient-to-r
//       from-white
//       via-white
//       to-white
//       bg-clip-text
//       text-transparent
//     "
//   >
//     Komal Jadhav
//   </span>
// </h1>
//           <div
//             className="
//               mt-4
//               flex
//               min-h-[42px]
//               items-center
//               justify-center
//               text-center
//               sm:mt-5
//               sm:min-h-[50px]
//             "
//           >
//             <span
//               className="
//                 text-[21px]
//                 font-medium
//                 tracking-[-0.02em]
//                 text-orange-400
//                 sm:text-[27px]
//                 md:text-[31px]
//                 lg:text-[35px]
//               "
//             >
//               {displayText}
//             </span>

//             <span
//               className="
//                 ml-[4px]
//                 inline-block
//                 h-[31px]
//                 w-[2px]
//                 animate-pulse
//                 bg-orange-500
//                 sm:h-[37px]
//                 md:h-[42px]
//               "
//             />
//           </div>

//           {/* =================================================
//               DESCRIPTION
//           ================================================== */}

//           <p
//             className="
//               mt-5
//               max-w-[780px]
//               text-[15px]
//               font-medium
//               leading-7
//               text-white/60
//               sm:mt-6
//               sm:text-[17px]
//               sm:leading-8
//               md:text-[18px]
//             "
//           >
//             I build modern websites, mobile applications, and custom
//             software that help startups, businesses, and organizations
//             transform ideas into fast, secure, and scalable digital
//             solutions.
//           </p>

//           {/* =================================================
//               BUTTONS
//           ================================================== */}

//           <div
//             className="
//               mt-6
//               flex
//               flex-col
//               items-center
//               justify-center
//               gap-4
//               sm:flex-row
//               sm:gap-5
//             "
//           >

//             {/* =================================================
//                 VIEW PROJECTS
//             ================================================== */}

//             <button
//               type="button"
//               onClick={handleProjects}
//               className="
//                 group
//                 inline-flex
//                 min-w-[205px]
//                 items-center
//                 justify-center
//                 gap-4
//                 rounded-full
//                 bg-gradient-to-r
//                 from-orange-500
//                 via-orange-500
//                 to-orange-500
//                 px-7
//                 py-[16px]
//                 text-[15px]
//                 font-bold
//                 text-white
//                 shadow-[0_12px_45px_rgba(249,115,22,0.20)]
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:shadow-[0_18px_55px_rgba(249,115,22,0.32)]
//               "
//             >
//               <span>View Projects</span>

//               <span
//                 className="
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//               >
//                 <ArrowIcon />
//               </span>
//             </button>

//             {/* =================================================
//                 HIRE ME
//             ================================================== */}

//             <button
//               type="button"
//               onClick={handleContact}
//               className="
//                 group
//                 inline-flex
//                 min-w-[205px]
//                 items-center
//                 justify-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-orange-500
//                 bg-transparent
//                 px-7
//                 py-[15px]
//                 text-[15px]
//                 font-bold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:bg-orange-500/10
//                 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)]
//               "
//             >
//               <span>Hire Me</span>

//               <span
//                 className="
//                   text-orange-400
//                   transition-transform
//                   duration-300
//                   group-hover:scale-110
//                 "
//               >
//                 <MailButtonIcon />
//               </span>
//             </button>

//           </div>

//           {/* =================================================
//               SOCIAL ICONS
//           ================================================== */}

//           <div
//             className="
//               mt-7
//               flex
//               items-center
//               justify-center
//               gap-4
//               sm:mt-8
//               sm:gap-5
//             "
//           >

//             {/* GitHub */}

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="
//                 flex
//                 h-[58px]
//                 w-[58px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/[0.13]
//                 bg-white/[0.025]
//                 text-white/55
//                 backdrop-blur-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-white/40
//                 hover:bg-white/[0.08]
//                 hover:text-white
//               "
//             >
//               <GithubIcon />
//             </a>

//             {/* LinkedIn */}

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="
//                 flex
//                 h-[58px]
//                 w-[58px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/[0.13]
//                 bg-white/[0.025]
//                 text-white/55
//                 backdrop-blur-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-white/40
//                 hover:bg-white/[0.08]
//                 hover:text-white
//               "
//             >
//               <LinkedinIcon />
//             </a>

//             {/* Email */}

//             <a
//               href="mailto:yourmail@gmail.com"
//               aria-label="Email"
//               className="
//                flex
//                 h-[58px]
//                 w-[58px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/[0.13]
//                 bg-white/[0.025]
//                 text-white/55
//                 backdrop-blur-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-white/40
//                 hover:bg-white/[0.08]
//                 hover:text-white
//               "
//             >
//               <MailIcon />
//             </a>

//           </div>



//         </div>
//       </div>

  

//     </section>
//   );
// }






import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   ICONS
========================================================= */

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V9H3.54v11.45Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const MailButtonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[21px] w-[21px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);


/* =========================================================
   TECH SHAPE
========================================================= */

const TechShape = ({
  className = "",
  variant = "orange",
}) => {
  const stroke =
    variant === "white"
      ? "rgba(255,255,255,.35)"
      : "rgba(249,115,22,.55)";

  return (
    <div
      className={`pointer-events-none absolute ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        fill="none"
      >
        <polygon
          points="50,5 85,25 90,65 58,92 18,76 12,34"
          stroke={stroke}
          strokeWidth="1"
        />

        <polygon
          points="50,20 73,34 76,60 55,76 29,65 26,39"
          stroke={stroke}
          strokeWidth="0.8"
        />

        <path
          d="M12 34L50 20L85 25M18 76L55 76L90 65M50 5L50 20M50 20L55 76M26 39L73 34M29 65L76 60"
          stroke={stroke}
          strokeWidth="0.65"
        />
      </svg>
    </div>
  );
};


/* =========================================================
   SCROLL REVEAL
========================================================= */

const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenPosition = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
    zoom: "scale-90",
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all
        duration-[900ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-x-0 translate-y-0 scale-100 opacity-100"
            : `${hiddenPosition[direction]} scale-100 opacity-0`
        }
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};


/* =========================================================
   HOME
========================================================= */

export default function Home() {

  const roles = [
    "Full Stack Developer",
    "Mobile App Developer",
    "Freelancer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);


  /* =======================================================
     TYPING EFFECT
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {

      if (!deleting) {

        setDisplayText(
          currentRole.slice(
            0,
            displayText.length + 1
          )
        );

        if (displayText === currentRole) {

          setTimeout(
            () => setDeleting(true),
            1100
          );

        }

      } else {

        setDisplayText(
          currentRole.slice(
            0,
            displayText.length - 1
          )
        );

        if (displayText === "") {

          setDeleting(false);

          setRoleIndex(
            (prev) => (prev + 1) % roles.length
          );

        }

      }

    }, speed);

    return () => clearTimeout(timer);

  }, [
    displayText,
    deleting,
    roleIndex,
  ]);


  /* =======================================================
     CONTACT
  ======================================================= */

  const handleContact = () => {

    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };


  /* =======================================================
     PROJECTS
  ======================================================= */

  const handleProjects = () => {

    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };


  return (

    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-78px)]
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}

      <style>{`

        @keyframes orangeGlowMove {

          0%, 100% {
            transform: scale(1);
            opacity: .45;
          }

          50% {
            transform: scale(1.12);
            opacity: .75;
          }

        }


        @keyframes floatingGlow {

          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }

        }


        @keyframes starPulse {

          0%, 100% {
            opacity: .25;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }

        }


        @keyframes softPulse {

          0%, 100% {
            box-shadow:
              0 12px 45px rgba(249,115,22,.20);
          }

          50% {
            box-shadow:
              0 18px 65px rgba(249,115,22,.38);
          }

        }


        .orange-glow-animation {
          animation:
            orangeGlowMove
            8s
            ease-in-out
            infinite;
        }


        .floating-animation {
          animation:
            floatingGlow
            6s
            ease-in-out
            infinite;
        }


        .star-animation {
          animation:
            starPulse
            3s
            ease-in-out
            infinite;
        }


        .project-button-animation {
          animation:
            softPulse
            4s
            ease-in-out
            infinite;
        }


        .social-animation {
          transition:
            transform .35s ease,
            border-color .35s ease,
            background-color .35s ease,
            color .35s ease,
            box-shadow .35s ease;
        }


        .social-animation:hover {
          transform:
            translateY(-6px)
            scale(1.06);

          box-shadow:
            0 10px 30px
            rgba(249,115,22,.14);
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


      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* Main orange glow */}

        <div
          className="
            orange-glow-animation
            absolute
            left-1/2
            top-[15%]
            h-[440px]
            w-[440px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.07]
            blur-[130px]
          "
        />


        {/* Top right orange glow */}

        <div
          className="
            orange-glow-animation
            absolute
            right-[-180px]
            top-[-150px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-orange-600/[0.055]
            blur-[120px]
          "
          style={{
            animationDelay: "1.5s",
          }}
        />


        {/* Bottom left orange glow */}

        <div
          className="
            orange-glow-animation
            absolute
            bottom-[-220px]
            left-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-500/[0.045]
            blur-[120px]
          "
          style={{
            animationDelay: "3s",
          }}
        />


        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
            [background-size:80px_80px]
            [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]
          "
        />


        {/* Stars */}

        <span
          className="
            star-animation
            absolute
            left-[8%]
            top-[20%]
            h-[2px]
            w-[2px]
            rounded-full
            bg-orange-400/80
          "
        />

        <span
          className="
            star-animation
            absolute
            left-[18%]
            top-[72%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-white/70
          "
          style={{ animationDelay: ".5s" }}
        />

        <span
          className="
            star-animation
            absolute
            left-[28%]
            top-[14%]
            h-[2px]
            w-[2px]
            rounded-full
            bg-white/60
          "
          style={{ animationDelay: "1s" }}
        />

        <span
          className="
            star-animation
            absolute
            left-[38%]
            top-[78%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-orange-400/70
          "
          style={{ animationDelay: "1.5s" }}
        />

        <span
          className="
            star-animation
            absolute
            right-[18%]
            top-[24%]
            h-[2px]
            w-[2px]
            rounded-full
            bg-white/70
          "
          style={{ animationDelay: "2s" }}
        />

        <span
          className="
            star-animation
            absolute
            right-[8%]
            top-[67%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-orange-400/80
          "
          style={{ animationDelay: "2.5s" }}
        />

        <span
          className="
            star-animation
            absolute
            right-[28%]
            top-[12%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-white/70
          "
          style={{ animationDelay: "1.2s" }}
        />

        <span
          className="
            star-animation
            absolute
            left-[7%]
            top-[48%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-white/50
          "
          style={{ animationDelay: "1.8s" }}
        />

        <span
          className="
            star-animation
            absolute
            right-[39%]
            top-[45%]
            h-[2px]
            w-[2px]
            rounded-full
            bg-orange-400/70
          "
          style={{ animationDelay: ".8s" }}
        />

        <span
          className="
            star-animation
            absolute
            left-[47%]
            top-[9%]
            h-[1px]
            w-[1px]
            rounded-full
            bg-orange-300/70
          "
          style={{ animationDelay: "2.2s" }}
        />


        {/* =================================================
            FLOATING TECH OBJECTS
        ================================================== */}

        <TechShape
          variant="orange"
          className="
            floating-animation
            left-[7%]
            top-[22%]
            h-[72px]
            w-[72px]
            rotate-[12deg]
            opacity-70
          "
        />

        <TechShape
          variant="white"
          className="
            floating-animation
            right-[10%]
            top-[29%]
            h-[76px]
            w-[76px]
            rotate-[-12deg]
            opacity-45
          "
          style={{
            animationDelay: "1.5s",
          }}
        />

        <TechShape
          variant="orange"
          className="
            floating-animation
            bottom-[16%]
            left-[18%]
            h-[58px]
            w-[58px]
            rotate-[25deg]
            opacity-50
          "
          style={{
            animationDelay: "2s",
          }}
        />

        <TechShape
          variant="white"
          className="
            floating-animation
            bottom-[21%]
            right-[22%]
            h-[65px]
            w-[65px]
            rotate-[-18deg]
            opacity-35
          "
          style={{
            animationDelay: "2.5s",
          }}
        />

      </div>


      {/* =====================================================
          TOP BORDER
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-white/[0.08]
        "
      />


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-78px)]
          max-w-[1600px]
          items-center
          justify-center
          px-5
          py-8
          sm:px-8
          md:px-12
          lg:px-16
        "
      >

        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[1250px]
            flex-col
            items-center
            text-center
          "
        >


          {/* =================================================
              SMALL TOP LABEL
          ================================================== */}

          <Reveal
            direction="down"
            delay={100}
          >

            <div
              className="
                mb-4
                flex
                items-center
                gap-3
                sm:mb-5
              "
            >

              <span
                className="
                  h-px
                  w-8
                  bg-orange-500
                  sm:w-12
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]
                  text-orange-400
                  sm:text-[11px]
                "
              >
                Welcome to my portfolio
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-orange-500
                  sm:w-12
                "
              />

            </div>

          </Reveal>


          {/* =================================================
              MAIN NAME
          ================================================== */}

          <Reveal
            direction="up"
            delay={220}
          >

            <h1
              className="
                max-w-full
                text-center
                font-sans
                text-[44px]
                font-bold
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-[56px]
                md:text-[68px]
                lg:text-[80px]
                xl:text-[92px]
              "
            >

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-white
                  to-white
                  bg-clip-text
                  text-transparent
                "
              >
                Komal Jadhav
              </span>

            </h1>

          </Reveal>


          {/* =================================================
              TYPING TEXT
          ================================================== */}

          <Reveal
            direction="up"
            delay={350}
          >

            <div
              className="
                mt-4
                flex
                min-h-[42px]
                items-center
                justify-center
                text-center
                sm:mt-5
                sm:min-h-[50px]
              "
            >

              <span
                className="
                  text-[21px]
                  font-medium
                  tracking-[-0.02em]
                  text-orange-400
                  sm:text-[27px]
                  md:text-[31px]
                  lg:text-[35px]
                "
              >
                {displayText}
              </span>

              <span
                className="
                  ml-[4px]
                  inline-block
                  h-[31px]
                  w-[2px]
                  animate-pulse
                  bg-orange-500
                  sm:h-[37px]
                  md:h-[42px]
                "
              />

            </div>

          </Reveal>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <Reveal
            direction="up"
            delay={480}
          >

            <p
              className="
                mt-5
                max-w-[780px]
                text-[15px]
                font-medium
                leading-7
                text-white/60
                sm:mt-6
                sm:text-[17px]
                sm:leading-8
                md:text-[18px]
              "
            >
              I build modern websites, mobile applications, and custom
              software that help startups, businesses, and organizations
              transform ideas into fast, secure, and scalable digital
              solutions.
            </p>

          </Reveal>


          {/* =================================================
              BUTTONS
          ================================================== */}
<Reveal
  direction="up"
  delay={600}
>
  <div
    className="
      mt-6
      flex
      flex-col
      items-center
      justify-center
      gap-4
      sm:flex-row
      sm:gap-5
    "
  >

    {/* =================================================
        DOWNLOAD RESUME
    ================================================= */}

    <a
      href="/komal%20jadhav%20Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        inline-flex
        min-w-[205px]
        items-center
        justify-center
        gap-4
        rounded-full
        bg-gradient-to-r
        from-orange-500
        via-orange-500
        to-orange-500
        px-7
        py-[16px]
        text-[15px]
        font-bold
        text-white
        shadow-[0_12px_45px_rgba(249,115,22,0.20)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_55px_rgba(249,115,22,0.32)]
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500/50
        focus:ring-offset-2
        focus:ring-offset-[#080808]
      "
    >

      <span>
        Download Resume
      </span>

      <span
        className="
          flex
          items-center
          justify-center
          text-[22px]
          leading-none
          transition-transform
          duration-300
          group-hover:translate-y-1
        "
      >
        ↓
      </span>

    </a>


    {/* =================================================
        HIRE ME
    ================================================= */}

    <button
      type="button"
      onClick={handleContact}
      className="
        group
        inline-flex
        min-w-[205px]
        items-center
        justify-center
        gap-3
        rounded-full
        border
        border-orange-500
        bg-transparent
        px-7
        py-[15px]
        text-[15px]
        font-bold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-500/10
        hover:shadow-[0_0_35px_rgba(249,115,22,0.15)]
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500/50
        focus:ring-offset-2
        focus:ring-offset-[#080808]
      "
    >

      <span>
        Hire Me
      </span>

      <span
        className="
          flex
          items-center
          justify-center
          text-orange-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <MailButtonIcon />
      </span>

    </button>

  </div>
</Reveal>
          {/* =================================================
              SOCIAL ICONS
          ================================================== */}

          <Reveal
            direction="up"
            delay={760}
          >

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-4
                sm:mt-8
                sm:gap-5
              "
            >

              {/* GitHub */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  social-animation
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-white/[0.025]
                  text-white/55
                  backdrop-blur-sm
                  hover:border-orange-500/60
                  hover:bg-orange-500/[0.08]
                  hover:text-orange-400
                "
              >
                <GithubIcon />
              </a>


              {/* LinkedIn */}

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  social-animation
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-white/[0.025]
                  text-white/55
                  backdrop-blur-sm
                  hover:border-orange-500/60
                  hover:bg-orange-500/[0.08]
                  hover:text-orange-400
                "
              >
                <LinkedinIcon />
              </a>


              {/* Email */}

              <a
                href="mailto:yourmail@gmail.com"
                aria-label="Email"
                className="
                  social-animation
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-white/[0.025]
                  text-white/55
                  backdrop-blur-sm
                  hover:border-orange-500/60
                  hover:bg-orange-500/[0.08]
                  hover:text-orange-400
                "
              >
                <MailIcon />
              </a>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

