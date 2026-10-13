
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ArrowIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[18px] w-[18px]"
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

// const TechShape = ({ className = "", variant = "orange" }) => {
//   const stroke =
//     variant === "white"
//       ? "rgba(255,255,255,.22)"
//       : "rgba(249,115,22,.45)";

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

// export default function About() {
//   const navigate = useNavigate();

//   const stats = [
//     { value: "2+", label: "Years Experience" },
//     { value: "10+", label: "Projects Completed" },
//     { value: "20+", label: "Technologies" },
//     { value: "5+", label: "Happy Clients" },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#080808] px-5 py-8 text-white sm:px-8 sm:py-10 md:px-10 lg:px-12"
//     >
//       {/* =========================
//           SAME HOME BACKGROUND
//       ========================== */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Main orange glow */}
//         <div
//           className="
//             absolute left-1/2 top-[15%]
//             h-[440px] w-[440px]
//             -translate-x-1/2 rounded-full
//             bg-orange-500/[0.07] blur-[130px]
//           "
//         />

//         {/* Top right orange glow */}
//         <div
//           className="
//             absolute right-[-180px] top-[-150px]
//             h-[430px] w-[430px]
//             rounded-full bg-orange-600/[0.055] blur-[120px]
//           "
//         />

//         {/* Bottom left orange glow */}
//         <div
//           className="
//             absolute bottom-[-220px] left-[-120px]
//             h-[420px] w-[420px]
//             rounded-full bg-orange-500/[0.045] blur-[120px]
//           "
//         />

//         {/* Same subtle grid */}
//         <div
//           className="
//             absolute inset-0 opacity-[0.12]
//             [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
//             [background-size:80px_80px]
//             [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]
//           "
//         />

//         {/* Same small stars / dots */}
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

//         {/* Same floating tech objects */}
//         <TechShape
//           variant="orange"
//           className="
//             left-[7%] top-[22%]
//             h-[72px] w-[72px]
//             rotate-[12deg] opacity-70
//             animate-[spin_18s_linear_infinite]
//           "
//         />

//         <TechShape
//           variant="white"
//           className="
//             right-[10%] top-[29%]
//             h-[76px] w-[76px]
//             rotate-[-12deg] opacity-45
//             animate-[spin_22s_linear_infinite_reverse]
//           "
//         />

//         <TechShape
//           variant="orange"
//           className="
//             bottom-[16%] left-[18%]
//             h-[58px] w-[58px]
//             rotate-[25deg] opacity-50
//             animate-[spin_20s_linear_infinite]
//           "
//         />

//         <TechShape
//           variant="white"
//           className="
//             bottom-[21%] right-[22%]
//             h-[65px] w-[65px]
//             rotate-[-18deg] opacity-35
//             animate-[spin_25s_linear_infinite_reverse]
//           "
//         />
//       </div>

//       {/* =========================
//           CONTENT
//       ========================== */}
//       <div className="relative z-10 mx-auto max-w-[1536px]">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-[42px] md:text-[48px] lg:text-[52px]">
//             About Me
//           </h1>

//           <p className="mt-2 text-[16px] font-normal text-white/55 sm:text-[18px] md:text-[19px]">
//             Get to know me better
//           </p>

//           <div className="mx-auto mt-4 h-[4px] w-[58px] bg-orange-500" />
//         </div>

//         {/* Main content */}
//         <div className="mt-8 grid items-center gap-5 sm:mt-10 sm:gap-7 md:grid-cols-[225px_1fr_310px] lg:grid-cols-[285px_1fr_360px] lg:gap-8 xl:grid-cols-[310px_1fr_400px] xl:gap-9">
//           {/* Profile image */}
//           <div className="mx-auto w-full max-w-[310px] md:max-w-none">
//             <div className="aspect-[1/1.03] overflow-hidden rounded-[7px] border border-white/[0.12] bg-white/[0.035] p-[2px] shadow-[0_10px_35px_rgba(0,0,0,0.25)]">
//               <img
//                 src="/profile.png"
//                 alt="Komal Jadhav"
//                 className="h-full w-full rounded-[5px] object-cover object-center"
//               />
//             </div>
//           </div>

//           {/* About text */}
//           <div className="min-w-0">
//   <p className="max-w-[650px] text-[14px] leading-[1.58] text-white/65 sm:text-[15px] md:text-[16px] lg:text-[17px]">
//     I&apos;m a{" "}
//     <span className="font-semibold text-white">
//       MERN Stack Developer
//     </span>{" "}
//     focused on building modern, responsive, and user-friendly web
//     applications. I work with JavaScript, React, Node.js, and modern
//     full-stack technologies to create clean interfaces and reliable
//     digital experiences.
//   </p>

//   <p className="mt-4 max-w-[650px] text-[14px] leading-[1.58] text-white/65 sm:text-[15px] md:text-[16px] lg:text-[17px]">
//     At{" "}
//     <span className="font-semibold text-white">Matic UI</span>, I contribute
//     to real-world applications by developing responsive interfaces,
//     integrating APIs, and building scalable full-stack features. My
//     experience includes working on projects such as a Medical Diagnostic
//     App and a SaaS Property Management Platform.
//   </p>

//   <button
//     type="button"
//     onClick={() => navigate("/aboutdetails")}
//     className="
//       mt-5 inline-flex items-center gap-3
//       rounded-[6px]
//       border border-white/[0.16]
//       bg-white/[0.035]
//       px-4 py-[9px]
//       text-[13px] font-medium text-white
//       shadow-[0_4px_15px_rgba(0,0,0,0.12)]
//       backdrop-blur-sm
//       transition-all duration-200
//       hover:-translate-y-[1px]
//       hover:border-orange-500/60
//       hover:bg-orange-500/[0.08]
//       hover:shadow-[0_6px_22px_rgba(249,115,22,0.12)]
//       sm:text-[14px]
//     "
//   >
//     <span>More About Me</span>

//     <span className="text-orange-400">
//       <ArrowIcon />
//     </span>
//   </button>
// </div>


//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-3 sm:gap-4">
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="
//                   flex min-h-[108px] flex-col items-center justify-center
//                   rounded-[7px]
//                   border border-white/[0.10]
//                   bg-white/[0.035]
//                   px-2 py-5 text-center
//                   shadow-[0_5px_20px_rgba(0,0,0,0.14)]
//                   backdrop-blur-sm
//                   sm:min-h-[120px] sm:py-6
//                 "
//               >
//                 <div className="text-[29px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[32px]">
//                   {item.value}
//                 </div>

//                 <div className="mt-3 whitespace-nowrap text-[11px] font-normal text-white/45 sm:text-[13px]">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* =========================================================
   ARROW ICON
========================================================= */
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px]"
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


/* =========================================================
   TECH SHAPE
========================================================= */
const TechShape = ({
  className = "",
  variant = "orange",
}) => {
  const stroke =
    variant === "white"
      ? "rgba(255,255,255,.22)"
      : "rgba(249,115,22,.45)";

  return (
    <div className={`pointer-events-none absolute ${className}`}>
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
   SCROLL ANIMATION HOOK
========================================================= */
const useScrollReveal = () => {
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
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};


/* =========================================================
   REVEAL WRAPPER
========================================================= */
const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const [ref, visible] = useScrollReveal();

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
    zoom: "scale-[0.94]",
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
            : `${directions[direction]} opacity-0`
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
   ABOUT PAGE
========================================================= */
export default function About() {
  const navigate = useNavigate();

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "20+", label: "Technologies" },
    { value: "5+", label: "Happy Clients" },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-[calc(100vh-78px)]
        overflow-hidden
        bg-[#080808]
        px-5
        py-8
        text-white
        sm:px-8
        sm:py-10
        md:px-10
        lg:px-12
      "
    >

      {/* =====================================================
          BACKGROUND ANIMATION
      ===================================================== */}
      <style>{`

        @keyframes orangeGlow {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }

          50% {
            opacity: .65;
            transform: scale(1.08);
          }
        }

        @keyframes floatingShape {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes reverseFloatingShape {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(15px) rotate(-5deg);
          }
        }

        @keyframes starBlink {
          0%, 100% {
            opacity: .25;
          }

          50% {
            opacity: 1;
          }
        }

        .orange-glow {
          animation: orangeGlow 7s ease-in-out infinite;
        }

        .floating-orange {
          animation: floatingShape 9s ease-in-out infinite;
        }

        .floating-white {
          animation: reverseFloatingShape 11s ease-in-out infinite;
        }

        .star-animation {
          animation: starBlink 3s ease-in-out infinite;
        }

        .about-card {
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease,
            background-color .35s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(249,115,22,.38);
          box-shadow:
            0 12px 35px rgba(249,115,22,.08);
        }

        .about-image {
          transition:
            transform .7s cubic-bezier(.22,1,.36,1),
            box-shadow .5s ease;
        }

        .about-image:hover {
          transform: scale(1.02);
          box-shadow:
            0 15px 45px rgba(249,115,22,.10);
        }

        .about-button {
          transition:
            transform .3s ease,
            border-color .3s ease,
            background-color .3s ease,
            box-shadow .3s ease;
        }

        .about-button:hover {
          transform: translateY(-3px);
          border-color: rgba(249,115,22,.6);
          background: rgba(249,115,22,.08);
          box-shadow:
            0 8px 25px rgba(249,115,22,.12);
        }

        .about-arrow {
          transition: transform .3s ease;
        }

        .about-button:hover .about-arrow {
          transform: translateX(5px);
        }

        .stat-number {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .about-card:hover .stat-number {
          color: #f97316;
          transform: scale(1.05);
        }

      `}</style>


      {/* =====================================================
          BACKGROUND ELEMENTS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main orange glow */}
        <div
          className="
            orange-glow
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

        {/* Top right glow */}
        <div
          className="
            orange-glow
            absolute
            right-[-180px]
            top-[-150px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-orange-600/[0.055]
            blur-[120px]
          "
          style={{ animationDelay: "1.5s" }}
        />

        {/* Bottom left glow */}
        <div
          className="
            orange-glow
            absolute
            bottom-[-220px]
            left-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-500/[0.045]
            blur-[120px]
          "
          style={{ animationDelay: "3s" }}
        />

        {/* Grid */}
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
        <span className="star-animation absolute left-[8%] top-[20%] h-[2px] w-[2px] rounded-full bg-orange-400/80" />

        <span
          className="star-animation absolute left-[18%] top-[72%] h-[1px] w-[1px] rounded-full bg-white/70"
          style={{ animationDelay: ".5s" }}
        />

        <span
          className="star-animation absolute left-[28%] top-[14%] h-[2px] w-[2px] rounded-full bg-white/60"
          style={{ animationDelay: "1s" }}
        />

        <span
          className="star-animation absolute left-[38%] top-[78%] h-[1px] w-[1px] rounded-full bg-orange-400/70"
          style={{ animationDelay: "1.5s" }}
        />

        <span
          className="star-animation absolute right-[18%] top-[24%] h-[2px] w-[2px] rounded-full bg-white/70"
          style={{ animationDelay: "2s" }}
        />

        <span
          className="star-animation absolute right-[8%] top-[67%] h-[1px] w-[1px] rounded-full bg-orange-400/80"
          style={{ animationDelay: "2.5s" }}
        />

        <span
          className="star-animation absolute right-[28%] top-[12%] h-[1px] w-[1px] rounded-full bg-white/70"
          style={{ animationDelay: "1.2s" }}
        />

        <span
          className="star-animation absolute left-[7%] top-[48%] h-[1px] w-[1px] rounded-full bg-white/50"
          style={{ animationDelay: "1.8s" }}
        />

        <span
          className="star-animation absolute right-[39%] top-[45%] h-[2px] w-[2px] rounded-full bg-orange-400/70"
          style={{ animationDelay: ".8s" }}
        />

        <span
          className="star-animation absolute left-[47%] top-[9%] h-[1px] w-[1px] rounded-full bg-orange-300/70"
          style={{ animationDelay: "2.2s" }}
        />


        {/* Floating tech objects */}
        <TechShape
          variant="orange"
          className="
            floating-orange
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
            floating-white
            right-[10%]
            top-[29%]
            h-[76px]
            w-[76px]
            rotate-[-12deg]
            opacity-45
          "
        />

        <TechShape
          variant="orange"
          className="
            floating-orange
            bottom-[16%]
            left-[18%]
            h-[58px]
            w-[58px]
            rotate-[25deg]
            opacity-50
          "
          style={{ animationDelay: "2s" }}
        />

        <TechShape
          variant="white"
          className="
            floating-white
            bottom-[21%]
            right-[22%]
            h-[65px]
            w-[65px]
            rotate-[-18deg]
            opacity-35
          "
          style={{ animationDelay: "2.5s" }}
        />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-[1536px]">


        {/* =================================================
            HEADER
        ================================================= */}
        <Reveal direction="down">

          <div className="text-center">

            <h1
              className="
                text-[36px]
                font-bold
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-[42px]
                md:text-[48px]
                lg:text-[52px]
              "
            >
              About Me
            </h1>

            <p
              className="
                mt-2
                text-[16px]
                font-normal
                text-white/55
                sm:text-[18px]
                md:text-[19px]
              "
            >
              Get to know me better
            </p>

            <div
              className="
                mx-auto
                mt-4
                h-[4px]
                w-[58px]
                bg-orange-500
              "
            />

          </div>

        </Reveal>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}
        <div
          className="
            mt-8
            grid
            items-center
            gap-5
            sm:mt-10
            sm:gap-7
            md:grid-cols-[225px_1fr_310px]
            lg:grid-cols-[285px_1fr_360px]
            lg:gap-8
            xl:grid-cols-[310px_1fr_400px]
            xl:gap-9
          "
        >


          {/* =================================================
              PROFILE IMAGE
          ================================================= */}
          <Reveal
            direction="left"
            delay={100}
          >

            <div className="mx-auto w-full max-w-[310px] md:max-w-none">

              <div
                className="
                  aspect-[1/1.03]
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-white/[0.12]
                  bg-white/[0.035]
                  p-[2px]
                  shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  about-image
                "
              >

                <img
                  src="/profile.png"
                  alt="Komal Jadhav"
                  className="
                    h-full
                    w-full
                    rounded-[5px]
                    object-cover
                    object-center
                  "
                />

              </div>

            </div>

          </Reveal>


          {/* =================================================
              ABOUT TEXT
          ================================================= */}
          <Reveal
            direction="right"
            delay={180}
          >

            <div className="min-w-0">

              <p
                className="
                  max-w-[650px]
                  text-[14px]
                  leading-[1.58]
                  text-white/65
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                "
              >
                I&apos;m a{" "}
                <span className="font-semibold text-white">
                  MERN Stack Developer
                </span>{" "}
                focused on building modern, responsive, and user-friendly web
                applications. I work with JavaScript, React, Node.js, and modern
                full-stack technologies to create clean interfaces and reliable
                digital experiences.
              </p>


              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-[14px]
                  leading-[1.58]
                  text-white/65
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                "
              >
                At{" "}
                <span className="font-semibold text-white">
                  Matic UI
                </span>
                , I contribute to real-world applications by developing
                responsive interfaces, integrating APIs, and building scalable
                full-stack features. My experience includes working on projects
                such as a Medical Diagnostic App and a SaaS Property Management
                Platform.
              </p>


              {/* More About */}
              <button
                type="button"
                onClick={() => navigate("/aboutdetails")}
                className="
                  about-button
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-[6px]
                  border
                  border-white/[0.16]
                  bg-white/[0.035]
                  px-4
                  py-[9px]
                  text-[13px]
                  font-medium
                  text-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                  backdrop-blur-sm
                  sm:text-[14px]
                "
              >

                <span>
                  More About Me
                </span>

                <span className="about-arrow text-orange-400">
                  <ArrowIcon />
                </span>

              </button>

            </div>

          </Reveal>


          {/* =================================================
              STATS
          ================================================= */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {stats.map((item, index) => (
              <Reveal
                key={item.label}
                direction="up"
                delay={100 + index * 120}
              >

                <div
                  className="
                    about-card
                    flex
                    min-h-[108px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-white/[0.10]
                    bg-white/[0.035]
                    px-2
                    py-5
                    text-center
                    shadow-[0_5px_20px_rgba(0,0,0,0.14)]
                    backdrop-blur-sm
                    sm:min-h-[120px]
                    sm:py-6
                  "
                >

                  <div
                    className="
                      stat-number
                      text-[29px]
                      font-bold
                      leading-none
                      tracking-[-0.04em]
                      text-white
                      sm:text-[32px]
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-3
                      whitespace-nowrap
                      text-[11px]
                      font-normal
                      text-white/45
                      sm:text-[13px]
                    "
                  >
                    {item.label}
                  </div>

                </div>

              </Reveal>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}