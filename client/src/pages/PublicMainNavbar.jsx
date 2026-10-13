
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function PublicMainNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Skills", path: "/skills" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }

//     return location.pathname.startsWith(path);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   /* =====================================================
//      SCROLL ANIMATION
//   ===================================================== */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* =====================================================
//           ANIMATION ONLY
//       ===================================================== */}

//       <style>{`
//         /* ================= PAGE LOAD ================= */

//         @keyframes navbarLoad {
//           0% {
//             opacity: 0;
//             transform: translateY(-18px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes logoLoad {
//           0% {
//             opacity: 0;
//             transform: translateX(-20px) scale(0.96);
//           }

//           100% {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes navItemLoad {
//           0% {
//             opacity: 0;
//             transform: translateY(-10px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes ctaLoad {
//           0% {
//             opacity: 0;
//             transform: translateX(15px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         /* ================= SCROLL GLOW ================= */

//         @keyframes scrollGlow {
//           0%,
//           100% {
//             opacity: 0.5;
//           }

//           50% {
//             opacity: 0.9;
//           }
//         }

//         /* ================= ORANGE LINE ================= */

//         @keyframes navbarLine {
//           0% {
//             transform: scaleX(0.7);
//             opacity: 0.45;
//           }

//           50% {
//             transform: scaleX(1);
//             opacity: 1;
//           }

//           100% {
//             transform: scaleX(0.7);
//             opacity: 0.45;
//           }
//         }

//         /* ================= MOBILE MENU ================= */

//         @keyframes mobileItemReveal {
//           0% {
//             opacity: 0;
//             transform: translateX(-12px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         /* ================= REDUCE MOTION ================= */

//         @media (prefers-reduced-motion: reduce) {
//           .navbar-load-animation,
//           .navbar-logo-animation,
//           .navbar-item-animation,
//           .navbar-cta-animation {
//             animation: none !important;
//           }
//         }
//       `}</style>

//       {/* =====================================================
//           NAVBAR
//       ===================================================== */}

//       <header
//         className="
//           fixed
//           left-0
//           top-0
//           z-[100]
//           w-full
//           overflow-x-hidden
//         "
//         style={{
//           animation: "navbarLoad 0.7s cubic-bezier(0.22,1,0.36,1) both",
//         }}
//       >
//         <nav
//           className={`
//             relative
//             w-full
//             border-b
//             border-orange-500/[0.12]
//             bg-[#090909]/95
//             backdrop-blur-xl
//             transition-all
//             duration-500
//             ${scrolled ? "shadow-[0_8px_35px_rgba(0,0,0,0.22)]" : ""}
//           `}
//         >
//           {/* =================================================
//               BACKGROUND GRID
//           ================================================= */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.035]
//               [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
//               [background-size:55px_55px]
//             "
//           />

//           {/* =================================================
//               ORANGE GLOW
//           ================================================= */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -left-[100px]
//               -top-[150px]
//               h-[300px]
//               w-[300px]
//               rounded-full
//               bg-orange-500/[0.07]
//               blur-[100px]
//             "
//             style={{
//               animation: scrolled
//                 ? "scrollGlow 3s ease-in-out infinite"
//                 : "none",
//             }}
//           />

//           {/* =================================================
//               SCROLL ORANGE LINE
//           ================================================= */}

//           {scrolled && (
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-[-1px]
//                 left-0
//                 h-[1px]
//                 w-full
//                 origin-left
//                 bg-orange-500/30
//               "
//               style={{
//                 animation: "navbarLine 2.5s ease-in-out infinite",
//               }}
//             />
//           )}

//           {/* =================================================
//               NAV CONTENT
//           ================================================= */}

//           <div
//             className="
//               relative
//               mx-auto
//               flex
//               h-[82px]
//               w-full
//               max-w-[1500px]
//               items-center
//               justify-between
//               px-4
//               sm:px-6
//               lg:px-8
//               xl:px-10
//             "
//           >
//             {/* =================================================
//                 PREMIUM KOMAL JADHAV LOGO
//             ================================================= */}

//             {/* <Link to="/"
//               onClick={closeMenu}
//               className="
//                 group
//                 flex
//                 shrink-0
//                 items-center
//                 navbar-logo-animation
//               "
//               aria-label="Komal Jadhav Home"
//               style={{
//                 animation:
//                   "logoLoad 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both",
//               }}
//             >
//               <svg
//                 viewBox="0 0 190 70"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="
//                   h-[66px]
//                   w-[178px]
//                   overflow-visible
//                   transition-transform
//                   duration-300
//                   group-hover:scale-[1.02]
//                 "
//               >
                

//                 <rect
//                   x="1"
//                   y="1"
//                   width="188"
//                   height="68"
//                   rx="1"
//                   fill="#050505"
//                 />


//                 <circle
//                   cx="34"
//                   cy="35"
//                   r="26"
//                   fill="none"
//                   stroke="#d96b16"
//                   strokeWidth="2"
//                 />

             

//                 <circle
//                   cx="34"
//                   cy="35"
//                   r="21"
//                   fill="none"
//                   stroke="#9f4d0d"
//                   strokeWidth="1"
//                 />


//                 <path
//                   d="
//                     M25 20
//                     V50

//                     M25 35
//                     L44 20

//                     M31 32
//                     L45 50
//                   "
//                   fill="none"
//                   stroke="#d96b16"
//                   strokeWidth="2.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />


//                 <circle
//                   cx="34"
//                   cy="35"
//                   r="2"
//                   fill="#d96b16"
//                 />


//                 <line
//                   x1="70"
//                   y1="20"
//                   x2="80"
//                   y2="20"
//                   stroke="#d96b16"
//                   strokeWidth="1"
//                 />

             

//                 <text
//                   x="70"
//                   y="34"
//                   fill="#d96b16"
//                   fontSize="16"
//                   fontWeight="700"
//                   fontFamily="Georgia, 'Times New Roman', serif"
//                   letterSpacing="0.2"
//                 >
//                   Komal
//                 </text>


//                 <text
//                   x="70"
//                   y="48"
//                   fill="#F2F2F2"
//                   fontSize="12"
//                   fontWeight="600"
//                   fontFamily="Georgia, 'Times New Roman', serif"
//                   letterSpacing="0.8"
//                 >
//                   Jadhav
//                 </text>

//                 <line
//                   x1="70"
//                   y1="53"
//                   x2="137"
//                   y2="53"
//                   stroke="#9f4d0d"
//                   strokeWidth="1"
//                 />


//                 <text
//                   x="70"
//                   y="62"
//                   fill="#858585"
//                   fontSize="6.5"
//                   fontWeight="500"
//                   fontFamily="Arial, Helvetica, sans-serif"
//                   letterSpacing="2"
//                 >
//                   DEVELOPER
//                 </text>


//                 <circle
//                   cx="157"
//                   cy="27"
//                   r="2"
//                   fill="#d96b16"
//                 />


//                 <line
//                   x1="151"
//                   y1="39"
//                   x2="165"
//                   y2="39"
//                   stroke="#9f4d0d"
//                   strokeWidth="0.8"
//                 />


//                 <circle
//                   cx="171"
//                   cy="52"
//                   r="1"
//                   fill="#9f4d0d"
//                 />
//               </svg>
//             </Link> */}

//             {/* =====================================================
//     PROFESSIONAL KOMAL JADHAV LOGO
// ===================================================== */}

// <Link
//   to="/"
//   onClick={closeMenu}
//   className="
//     group
//     flex
//     shrink-0
//     items-center
//     select-none
//   "
//   aria-label="Komal Jadhav Home"
// >
//   <div
//     className="
//       flex
//       items-center
//       gap-[9px]
//       transition-transform
//       duration-300
//       group-hover:scale-[1.015]
//     "
//   >

//     {/* =================================================
//         KJ PREMIUM MONOGRAM
//     ================================================= */}

//     <svg
//       viewBox="0 0 78 62"
//       xmlns="http://www.w3.org/2000/svg"
//       className="
//         h-[57px]
//         w-[72px]
//         shrink-0
//         overflow-visible
//       "
//     >

//       {/* ---------------------------------------------
//           K — MAIN LETTER
//       --------------------------------------------- */}

//       <path
//         d="M12 8V48"
//         fill="none"
//         stroke="#F97316"
//         strokeWidth="7"
//         strokeLinecap="square"
//       />

//       <path
//         d="M16 29L39 8"
//         fill="none"
//         stroke="#F97316"
//         strokeWidth="7"
//         strokeLinecap="square"
//         strokeLinejoin="miter"
//       />

//       <path
//         d="M24 28L41 48"
//         fill="none"
//         stroke="#FDBA74"
//         strokeWidth="7"
//         strokeLinecap="square"
//         strokeLinejoin="miter"
//       />

//       {/* ---------------------------------------------
//           J — SECOND LETTER
//       --------------------------------------------- */}

//       <path
//         d="M51 8V38"
//         fill="none"
//         stroke="#F97316"
//         strokeWidth="7"
//         strokeLinecap="square"
//       />

//       <path
//         d="M51 42
//            C51 49 45 53 38 53
//            C33 53 29 51 26 47"
//         fill="none"
//         stroke="#F97316"
//         strokeWidth="7"
//         strokeLinecap="square"
//         strokeLinecap="round"
//       />

//       {/* ---------------------------------------------
//           PREMIUM ORANGE SWOOSH
//       --------------------------------------------- */}

//       <path
//         d="
//           M4 53
//           C19 57 39 56 55 49
//           C64 45 70 40 76 34
//         "
//         fill="none"
//         stroke="#F97316"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//       />

//       {/* ---------------------------------------------
//           SMALL GOLD ACCENT
//       --------------------------------------------- */}

//       <path
//         d="
//           M7 57
//           C25 60 45 57 61 49
//         "
//         fill="none"
//         stroke="#FDBA74"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         opacity="0.75"
//       />

//       {/* ---------------------------------------------
//           SMALL ACCENT DOT
//       --------------------------------------------- */}

//       <circle
//         cx="67"
//         cy="13"
//         r="2.2"
//         fill="#F97316"
//       />

//     </svg>


//     {/* =================================================
//         BRAND INFORMATION
//     ================================================= */}

//     <div
//       className="
//         flex
//         flex-col
//         justify-center
//         leading-none
//       "
//     >

//       {/* =================================================
//           NAME
//       ================================================= */}

//       <div
//         className="
//           whitespace-nowrap
//           text-[21px]
//           font-bold
//           tracking-[-0.025em]
//         "
//         style={{
//           fontFamily:
//             "'Inter', 'Helvetica Neue', Arial, sans-serif",
//         }}
//       >

//         <span className="text-white">
//           Komal
//         </span>

//         <span
//           className="
//             ml-[5px]
//             text-orange-500
//           "
//         >
//           Jadhav
//         </span>

//       </div>


//       {/* =================================================
//           DEVELOPER LINE
//       ================================================= */}

//       <div
//         className="
//           mt-[7px]
//           flex
//           items-center
//           gap-[7px]
//         "
//       >

//         {/* Orange line */}

//         <span
//           className="
//             h-[2px]
//             w-[27px]
//             shrink-0
//             bg-orange-500
//             transition-all
//             duration-300
//             group-hover:w-[34px]
//           "
//         />

//         {/* Developer text */}

//         <span
//           className="
//             whitespace-nowrap
//             text-[7.5px]
//             font-bold
//             tracking-[0.22em]
//             text-orange-400
//           "
//           style={{
//             fontFamily:
//               "'Inter', 'Helvetica Neue', Arial, sans-serif",
//           }}
//         >
//           FULL STACK WEB DEVELOPER
//         </span>

//       </div>

//     </div>

//   </div>
// </Link>

//             {/* =================================================
//                 DESKTOP NAVIGATION
//             ================================================= */}

//             <div
//               className="
//                 hidden
//                 items-center
//                 gap-6
//                 lg:flex
//                 xl:gap-8
//               "
//             >
//               {navItems.map((item, index) => {
//                 const active = isActive(item.path);

//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`
//                       group
//                       relative
//                       shrink-0
//                       px-1
//                       py-2
//                       text-[14px]
//                       font-medium
//                       transition-colors
//                       duration-300

//                       ${
//                         active
//                           ? "text-white"
//                           : "text-white/55 hover:text-white"
//                       }
//                     `}
//                     style={{
//                       animation: `navItemLoad 0.55s cubic-bezier(0.22,1,0.36,1) ${
//                         0.25 + index * 0.08
//                       }s both`,
//                     }}
//                   >
//                     {item.name}

//                     {/* ================= ACTIVE UNDERLINE ================= */}

//                     <span
//                       className={`
//                         absolute
//                         bottom-[-1px]
//                         left-1/2
//                         h-[2px]
//                         -translate-x-1/2
//                         bg-orange-500
//                         transition-all
//                         duration-300

//                         ${
//                           active
//                             ? "w-[22px]"
//                             : "w-0 group-hover:w-[18px]"
//                         }
//                       `}
//                     />

//                     {/* ================= ACTIVE DOT ================= */}

//                     {active && (
//                       <span
//                         className="
//                           absolute
//                           -right-2
//                           top-1/2
//                           h-[3px]
//                           w-[3px]
//                           -translate-y-1/2
//                           rounded-full
//                           bg-orange-500
//                         "
//                       />
//                     )}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* =================================================
//                 DESKTOP CTA
//             ================================================= */}

//             <Link
//               to="/contact"
//               className="
//                 group
//                 hidden
//                 shrink-0
//                 items-center
//                 gap-3
//                 border
//                 border-orange-500/50
//                 bg-orange-500/[0.06]
//                 px-5
//                 py-[11px]
//                 text-[13px]
//                 font-semibold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:border-orange-500
//                 hover:bg-orange-500
//                 hover:text-black
//                 hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]
//                 lg:inline-flex
//               "
//               style={{
//                 animation:
//                   "ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both",
//               }}
//             >
//               Let's Talk

//               <svg
//                 viewBox="0 0 24 24"
//                 className="
//                   h-[17px]
//                   w-[17px]
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M5 12h14" />
//                 <path d="m13 6 6 6-6 6" />
//               </svg>
//             </Link>

//             {/* =================================================
//                 MOBILE BUTTON
//             ================================================= */}

//             <button
//               type="button"
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="
//                 flex
//                 h-[42px]
//                 w-[42px]
//                 shrink-0
//                 items-center
//                 justify-center
//                 border
//                 border-white/10
//                 bg-white/[0.035]
//                 text-white
//                 transition
//                 hover:border-orange-500/40
//                 hover:text-orange-500
//                 lg:hidden
//               "
//               aria-label={
//                 menuOpen
//                   ? "Close navigation menu"
//                   : "Open navigation menu"
//               }
//               style={{
//                 animation:
//                   "ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both",
//               }}
//             >
//               <div className="flex w-[18px] flex-col gap-[5px]">

//                 {/* TOP */}

//                 <span
//                   className={`
//                     h-[2px]
//                     w-full
//                     bg-current
//                     transition-transform
//                     duration-300

//                     ${
//                       menuOpen
//                         ? "translate-y-[7px] rotate-45"
//                         : ""
//                     }
//                   `}
//                 />

//                 {/* CENTER */}

//                 <span
//                   className={`
//                     h-[2px]
//                     w-full
//                     bg-current
//                     transition-opacity
//                     duration-300

//                     ${
//                       menuOpen
//                         ? "opacity-0"
//                         : "opacity-100"
//                     }
//                   `}
//                 />

//                 {/* BOTTOM */}

//                 <span
//                   className={`
//                     h-[2px]
//                     w-full
//                     bg-current
//                     transition-transform
//                     duration-300

//                     ${
//                       menuOpen
//                         ? "-translate-y-[7px] -rotate-45"
//                         : ""
//                     }
//                   `}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* =================================================
//               MOBILE MENU
//           ================================================= */}

//           <div
//             className={`
//               overflow-hidden
//               border-t
//               border-white/[0.06]
//               bg-[#090909]/98
//               backdrop-blur-xl
//               transition-all
//               duration-300
//               lg:hidden

//               ${
//                 menuOpen
//                   ? "max-h-[500px] opacity-100"
//                   : "max-h-0 opacity-0"
//               }
//             `}
//           >
//             <div className="px-5 py-5 sm:px-8">
//               <div className="flex flex-col">

//                 {navItems.map((item, index) => {
//                   const active = isActive(item.path);

//                   return (
//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       onClick={closeMenu}
//                       className={`
//                         flex
//                         items-center
//                         justify-between
//                         border-b
//                         border-white/[0.06]
//                         py-4
//                         text-[14px]
//                         font-medium
//                         transition

//                         ${
//                           active
//                             ? "text-orange-500"
//                             : "text-white/60 hover:text-white"
//                         }
//                       `}
//                       style={{
//                         animation: menuOpen
//                           ? `mobileItemReveal 0.45s cubic-bezier(0.22,1,0.36,1) ${
//                               index * 0.08
//                             }s both`
//                           : "none",
//                       }}
//                     >
//                       <span>{item.name}</span>

//                       <span className="text-[9px] text-white/20">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </Link>
//                   );
//                 })}

//                 {/* =================================================
//                     MOBILE CTA
//                 ================================================= */}

//                 <Link
//                   to="/contact"
//                   onClick={closeMenu}
//                   className="
//                     mt-5
//                     flex
//                     items-center
//                     justify-between
//                     border
//                     border-orange-500
//                     bg-orange-500
//                     px-5
//                     py-3
//                     text-[13px]
//                     font-semibold
//                     text-black
//                     transition
//                     hover:bg-orange-400
//                   "
//                 >
//                   Let's Talk

//                   <svg
//                     viewBox="0 0 24 24"
//                     className="h-4 w-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m13 6 6 6-6 6" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }




import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PublicMainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        /* ================= PAGE LOAD ================= */

        @keyframes navbarLoad {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoLoad {
          0% {
            opacity: 0;
            transform: translateX(-20px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes navItemLoad {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaLoad {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ================= SCROLL GLOW ================= */

        @keyframes scrollGlow {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 0.9;
          }
        }

        /* ================= ORANGE LINE ================= */

        @keyframes navbarLine {
          0% {
            transform: scaleX(0.7);
            opacity: 0.45;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }

          100% {
            transform: scaleX(0.7);
            opacity: 0.45;
          }
        }

        /* ================= MOBILE MENU ================= */

        @keyframes mobileItemReveal {
          0% {
            opacity: 0;
            transform: translateX(-12px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ================= REDUCE MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .navbar-load-animation,
          .navbar-logo-animation,
          .navbar-item-animation,
          .navbar-cta-animation {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          overflow-x-hidden
        "
        style={{
          animation:
            "navbarLoad 0.7s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <nav
          className={`
            relative
            w-full
            border-b
            border-orange-500/[0.12]
            bg-[#090909]/95
            backdrop-blur-xl
            transition-all
            duration-500
            ${scrolled ? "shadow-[0_8px_35px_rgba(0,0,0,0.22)]" : ""}
          `}
        >
          {/* =================================================
              BACKGROUND GRID
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
              [background-size:55px_55px]
            "
          />

          {/* =================================================
              ORANGE GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[100px]
              -top-[150px]
              h-[300px]
              w-[300px]
              rounded-full
              bg-orange-500/[0.07]
              blur-[100px]
            "
            style={{
              animation: scrolled
                ? "scrollGlow 3s ease-in-out infinite"
                : "none",
            }}
          />

          {/* =================================================
              SCROLL ORANGE LINE
          ================================================= */}

          {scrolled && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-1px]
                left-0
                h-[1px]
                w-full
                origin-left
                bg-orange-500/30
              "
              style={{
                animation:
                  "navbarLine 2.5s ease-in-out infinite",
              }}
            />
          )}

          {/* =================================================
              NAV CONTENT
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              h-[82px]
              w-full
              max-w-[1500px]
              items-center
              justify-between
              px-4
              sm:px-6
              lg:px-8
              xl:px-10
            "
          >

            {/* =================================================
                PROFESSIONAL KOMAL JADHAV LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="
                group
                flex
                shrink-0
                items-center
                select-none
                navbar-logo-animation
              "
              aria-label="Komal Jadhav Home"
              style={{
                animation:
                  "logoLoad 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both",
              }}
            >
              <div
                className="
                  flex
                  items-center
                  gap-[6px]
                  transition-transform
                  duration-300
                  group-hover:scale-[1.015]
                "
              >

                {/* =================================================
                    KJ PREMIUM MONOGRAM
                ================================================= */}

                <svg
                  viewBox="0 0 78 62"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    h-[52px]
                    w-[64px]
                    shrink-0
                    overflow-visible
                  "
                >

                  {/* ================= K ================= */}

                  <path
                    d="M12 8V48"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="6.5"
                    strokeLinecap="square"
                  />

                  <path
                    d="M16 29L39 8"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="6.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />

                  <path
                    d="M24 28L41 48"
                    fill="none"
                    stroke="#FDBA74"
                    strokeWidth="6.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />

                  {/* ================= J ================= */}

                  <path
                    d="M51 8V38"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="6.5"
                    strokeLinecap="square"
                  />

                  <path
                    d="
                      M51 42
                      C51 49 45 53 38 53
                      C33 53 29 51 26 47
                    "
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />

                  {/* ================= PREMIUM SWOOSH ================= */}

                  <path
                    d="
                      M4 53
                      C19 57 39 56 55 49
                      C64 45 70 40 76 34
                    "
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="
                      M7 57
                      C25 60 45 57 61 49
                    "
                    fill="none"
                    stroke="#FDBA74"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    opacity="0.75"
                  />

                  {/* ================= ACCENT DOT ================= */}

                  <circle
                    cx="67"
                    cy="13"
                    r="2"
                    fill="#F97316"
                  />

                </svg>


                {/* =================================================
                    BRAND TEXT
                ================================================= */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    leading-none
                  "
                >

                  {/* ================= NAME ================= */}

                  <div
                    className="
                      whitespace-nowrap
                      text-[20px]
                      font-bold
                      tracking-[-0.025em]
                    "
                    style={{
                      fontFamily:
                        "'Inter', 'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    <span className="text-white">
                      Komal
                    </span>

                    <span
                      className="
                        ml-[5px]
                        text-orange-500
                      "
                    >
                      Jadhav
                    </span>
                  </div>


                  {/* ================= DESIGNATION ================= */}

                  <div
                    className="
                      mt-[7px]
                      flex
                      items-center
                      gap-[7px]
                    "
                  >

                    <span
                      className="
                        h-[2px]
                        w-[25px]
                        shrink-0
                        bg-orange-500
                        transition-all
                        duration-300
                        group-hover:w-[32px]
                      "
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-[7px]
                        font-bold
                        tracking-[0.21em]
                        text-orange-400
                      "
                      style={{
                        fontFamily:
                          "'Inter', 'Helvetica Neue', Arial, sans-serif",
                      }}
                    >
                      FULL STACK WEB DEVELOPER
                    </span>

                  </div>

                </div>

              </div>
            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div
              className="
                hidden
                items-center
                gap-6
                lg:flex
                xl:gap-8
              "
            >
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      group
                      relative
                      shrink-0
                      px-1
                      py-2
                      text-[14px]
                      font-medium
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-white"
                          : "text-white/55 hover:text-white"
                      }
                    `}
                    style={{
                      animation:
                        `navItemLoad 0.55s cubic-bezier(0.22,1,0.36,1) ${
                          0.25 + index * 0.08
                        }s both`,
                    }}
                  >
                    {item.name}

                    {/* ================= ACTIVE UNDERLINE ================= */}

                    <span
                      className={`
                        absolute
                        bottom-[-1px]
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        bg-orange-500
                        transition-all
                        duration-300

                        ${
                          active
                            ? "w-[22px]"
                            : "w-0 group-hover:w-[18px]"
                        }
                      `}
                    />

                    {/* ================= ACTIVE DOT ================= */}

                    {active && (
                      <span
                        className="
                          absolute
                          -right-2
                          top-1/2
                          h-[3px]
                          w-[3px]
                          -translate-y-1/2
                          rounded-full
                          bg-orange-500
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </div>


            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <Link
              to="/contact"
              className="
                group
                hidden
                shrink-0
                items-center
                gap-3
                border
                border-orange-500/50
                bg-orange-500/[0.06]
                px-5
                py-[11px]
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-orange-500
                hover:bg-orange-500
                hover:text-black
                hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]
                lg:inline-flex
              "
              style={{
                animation:
                  "ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both",
              }}
            >
              Let's Talk

              <svg
                viewBox="0 0 24 24"
                className="
                  h-[17px]
                  w-[17px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>


            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                border
                border-white/10
                bg-white/[0.035]
                text-white
                transition
                hover:border-orange-500/40
                hover:text-orange-500
                lg:hidden
              "
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              style={{
                animation:
                  "ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both",
              }}
            >
              <div className="flex w-[18px] flex-col gap-[5px]">

                {/* TOP */}

                <span
                  className={`
                    h-[2px]
                    w-full
                    bg-current
                    transition-transform
                    duration-300

                    ${
                      menuOpen
                        ? "translate-y-[7px] rotate-45"
                        : ""
                    }
                  `}
                />

                {/* CENTER */}

                <span
                  className={`
                    h-[2px]
                    w-full
                    bg-current
                    transition-opacity
                    duration-300

                    ${
                      menuOpen
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                />

                {/* BOTTOM */}

                <span
                  className={`
                    h-[2px]
                    w-full
                    bg-current
                    transition-transform
                    duration-300

                    ${
                      menuOpen
                        ? "-translate-y-[7px] -rotate-45"
                        : ""
                    }
                  `}
                />

              </div>
            </button>
          </div>


          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <div
            className={`
              overflow-hidden
              border-t
              border-white/[0.06]
              bg-[#090909]/98
              backdrop-blur-xl
              transition-all
              duration-300
              lg:hidden

              ${
                menuOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="px-5 py-5 sm:px-8">

              <div className="flex flex-col">

                {navItems.map((item, index) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={`
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.06]
                        py-4
                        text-[14px]
                        font-medium
                        transition

                        ${
                          active
                            ? "text-orange-500"
                            : "text-white/60 hover:text-white"
                        }
                      `}
                      style={{
                        animation: menuOpen
                          ? `mobileItemReveal 0.45s cubic-bezier(0.22,1,0.36,1) ${
                              index * 0.08
                            }s both`
                          : "none",
                      }}
                    >
                      <span>{item.name}</span>

                      <span className="text-[9px] text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  );
                })}


                {/* =================================================
                    MOBILE CTA
                ================================================= */}

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border
                    border-orange-500
                    bg-orange-500
                    px-5
                    py-3
                    text-[13px]
                    font-semibold
                    text-black
                    transition
                    hover:bg-orange-400
                  "
                >
                  Let's Talk

                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

              </div>
            </div>
          </div>

        </nav>
      </header>
    </>
  );
}




