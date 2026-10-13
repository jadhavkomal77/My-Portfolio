// import React, { useState } from "react";
// import {
//   CalendarDays,
//   MapPin,
//   Mail,
//   Phone,
//   GraduationCap,
//   BriefcaseBusiness,
// } from "lucide-react";

// const ORANGE = "#ff7800";

// const AboutDetails = () => {
//   const [activeTab, setActiveTab] = useState("Personal");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const tabs = ["Bio", "Education", "Personal"];

//   return (
//     <section className="min-h-screen bg-[#080808] text-white px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-hidden">

//       {/* =====================================================
//           ANIMATION STYLES
//       ===================================================== */}
//       <style>{`
//         @keyframes pageFade {
//           0% {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes titleFade {
//           0% {
//             opacity: 0;
//             transform: translateY(-18px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes lineGrow {
//           0% {
//             width: 0;
//             opacity: 0;
//           }
//           100% {
//             width: 96px;
//             opacity: 1;
//           }
//         }

//         @keyframes cardFade {
//           0% {
//             opacity: 0;
//             transform: translateY(18px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .page-animation {
//           animation: pageFade 0.7s ease-out both;
//         }

//         .title-animation {
//           animation: titleFade 0.7s ease-out both;
//         }

//         .line-animation {
//           animation: lineGrow 0.8s ease-out 0.4s both;
//         }

//         .card-animation {
//           animation: cardFade 0.55s ease-out both;
//         }

//         .card-hover {
//           transition:
//             border-color 0.3s ease,
//             box-shadow 0.3s ease,
//             transform 0.3s ease,
//             background-color 0.3s ease;
//         }

//         .card-hover:hover {
//           transform: translateY(-4px);
//           border-color: #ff7800;
//           box-shadow:
//             0 0 0 1px rgba(255, 120, 0, 0.15),
//             0 10px 35px rgba(255, 120, 0, 0.08);
//         }

//         .orange-transition {
//           transition:
//             color 0.3s ease,
//             border-color 0.3s ease,
//             background-color 0.3s ease,
//             box-shadow 0.3s ease;
//         }
//       `}</style>


//       {/* =====================================================
//           MAIN CONTAINER
//       ===================================================== */}
//       <div className="max-w-[1400px] mx-auto">


//         {/* =====================================================
//             PAGE TITLE
//         ===================================================== */}
//         <div className="text-center mb-7 lg:mb-8 title-animation">

//           <h1
//             className="
//               text-3xl
//               sm:text-4xl
//               lg:text-5xl
//               font-serif
//               font-semibold
//               tracking-tight
//               text-white
//             "
//           >
//             About Me
//           </h1>

//           <p
//             className="
//               mt-2
//               text-xs
//               sm:text-sm
//               lg:text-base
//               font-serif
//               tracking-[0.15em]
//               text-gray-400
//               uppercase
//             "
//           >
//             Get To Know Me Better
//           </p>

//           <div
//             className="
//               h-[3px]
//               bg-white
//               mx-auto
//               mt-5
//               line-animation
//             "
//           ></div>

//         </div>


//         {/* =====================================================
//             MAIN GRID
//         ===================================================== */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             lg:grid-cols-[0.92fr_1fr]
//             gap-6
//             lg:gap-8
//             items-start
//             page-animation
//           "
//         >


//           {/* =================================================
//               LEFT IMAGE
//           ================================================= */}
//           {/* <div className="w-full">

//             <div
//               className="
//                 w-full
//                 h-[390px]
//                 sm:h-[460px]
//                 lg:h-[555px]
//                 overflow-hidden
//                 rounded-lg
//                 border
//                 border-[#252525]
//                 bg-[#111]
//               "
//             >

//               <img
//                 src="/profile.png"
//                 alt="Komal Jadhav"
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                   object-center
//                   transition-transform
//                   duration-700
//                   hover:scale-[1.02]
//                 "
//               />

//             </div>

//           </div> */}


// <div className="w-full">

//   <div
//     className="
//       flex
//       w-full
//       h-[340px]
//       sm:h-[400px]
//       lg:h-[480px]
//       items-center
//       justify-center
//       overflow-hidden
//       rounded-lg
//       border
//       border-[#252525]
//       bg-[#111]
//     "
//   >

//     <img
//       src="/profile.png"
//       alt="Komal Jadhav"
//       className="
//         h-[72%]
//         w-[72%]
//         object-contain
//         object-center
//         transition-transform
//         duration-700
//         hover:scale-[1.02]
//       "
//     />

//   </div>

// </div>

//           {/* =================================================
//               RIGHT CONTENT
//           ================================================= */}
//           <div className="w-full">


//             {/* =================================================
//                 TABS
//             ================================================= */}
//             <div
//               className="
//                 w-full
//                 bg-[#242424]
//                 border
//                 border-[#2b2b2b]
//                 rounded-lg
//                 p-1
//                 flex
//                 items-center
//                 mb-5
//               "
//             >

//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`
//                     flex-1
//                     py-2
//                     px-2
//                     rounded-md
//                     text-sm
//                     sm:text-base
//                     font-medium
//                     transition-all
//                     duration-300
//                     ${
//                       activeTab === tab
//                         ? "bg-[#080808] text-white"
//                         : "text-gray-400 hover:text-white"
//                     }
//                   `}
//                 >
//                   {tab}
//                 </button>
//               ))}

//             </div>


//             {/* =================================================
//                 BIO TAB
//             ================================================= */}
//             {activeTab === "Bio" && (
//               <div className="card-animation">

//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//                   Hello There!
//                 </h2>

//                 <div
//                   className="
//                     space-y-4
//                     text-gray-400
//                     text-sm
//                     sm:text-base
//                     leading-7
//                   "
//                 >

//                   <p>
//                     I'm{" "}
//                     <span className="text-white font-medium">
//                       Komal Jadhav
//                     </span>
//                     , a passionate MERN Stack Developer focused on
//                     creating modern, responsive and user-friendly
//                     web applications.
//                   </p>

//                   <p>
//                     I enjoy turning ideas into clean and functional
//                     digital experiences. I focus on creating interfaces
//                     that are simple, attractive and easy to use.
//                   </p>

//                   <p>
//                     My technical skills include React.js, JavaScript,
//                     Node.js, Express.js, MongoDB, Tailwind CSS and
//                     REST APIs.
//                   </p>

//                   <p>
//                     I continuously learn new technologies and improve
//                     my development skills to build better and scalable
//                     web applications.
//                   </p>

//                 </div>


//                 {/* BIO CARDS */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

//                   {/* CARD 1 */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("specialization")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#292929]
//                       rounded-lg
//                       p-4
//                       bg-[#0b0b0b]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <BriefcaseBusiness
//                       className="w-5 h-5 mb-2 orange-transition"
//                       style={{
//                         color:
//                           hoveredCard === "specialization"
//                             ? ORANGE
//                             : "#ff7800",
//                       }}
//                     />

//                     <p
//                       className="text-xs orange-transition"
//                       style={{
//                         color:
//                           hoveredCard === "specialization"
//                             ? ORANGE
//                             : "#737373",
//                       }}
//                     >
//                       Specialization
//                     </p>

//                     <p
//                       className="text-sm sm:text-base font-semibold mt-1 orange-transition"
//                       style={{
//                         color:
//                           hoveredCard === "specialization"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       MERN Stack Development
//                     </p>

//                   </div>


//                   {/* CARD 2 */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("profession")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#292929]
//                       rounded-lg
//                       p-4
//                       bg-[#0b0b0b]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <GraduationCap
//                       className="w-5 h-5 mb-2 orange-transition"
//                       style={{
//                         color: ORANGE,
//                       }}
//                     />

//                     <p
//                       className="text-xs orange-transition"
//                       style={{
//                         color:
//                           hoveredCard === "profession"
//                             ? ORANGE
//                             : "#737373",
//                       }}
//                     >
//                       Profession
//                     </p>

//                     <p
//                       className="text-sm sm:text-base font-semibold mt-1 orange-transition"
//                       style={{
//                         color:
//                           hoveredCard === "profession"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Full Stack Developer
//                     </p>

//                   </div>

//                 </div>

//               </div>
//             )}


//             {/* =================================================
//                 EDUCATION TAB
//             ================================================= */}
//             {activeTab === "Education" && (
//               <div className="space-y-4 card-animation">

//                 {/* BSC */}
//                 <div
//                   onMouseEnter={() => setHoveredCard("bsc")}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className="
//                     border
//                     border-[#282828]
//                     rounded-lg
//                     p-5
//                     bg-[#090909]
//                     card-hover
//                     cursor-default
//                   "
//                 >

//                   <div className="flex items-start gap-4">

//                     <div
//                       className="
//                         shrink-0
//                         w-11
//                         h-11
//                         rounded-full
//                         bg-[#202020]
//                         flex
//                         items-center
//                         justify-center
//                         orange-transition
//                       "
//                       style={{
//                         backgroundColor:
//                           hoveredCard === "bsc"
//                             ? "#2a1608"
//                             : "#202020",
//                       }}
//                     >

//                       <GraduationCap
//                         className="w-5 h-5"
//                         style={{
//                           color: ORANGE,
//                         }}
//                       />

//                     </div>

//                     <div>

//                       <h3
//                         className="
//                           text-lg
//                           sm:text-xl
//                           font-bold
//                           orange-transition
//                         "
//                         style={{
//                           color:
//                             hoveredCard === "bsc"
//                               ? ORANGE
//                               : "#ffffff",
//                         }}
//                       >
//                        Bachelor of Computer Science (BCS)
//                       </h3>

//                       <p
//                         className="
//                           text-sm
//                           sm:text-base
//                           mt-1
//                           orange-transition
//                         "
//                         style={{
//                           color:
//                             hoveredCard === "bsc"
//                               ? ORANGE
//                               : "#9ca3af",
//                         }}
//                       >
//                         Dr. Babasaheb Ambedkar Marathwada University
//                       </p>

//                       <p
//                         className="
//                           text-sm
//                           mt-1
//                           orange-transition
//                         "
//                         style={{
//                           color:
//                             hoveredCard === "bsc"
//                               ? ORANGE
//                               : "#6b7280",
//                         }}
//                       >
//                         Chhatrapati Sambhajinagar
//                       </p>

//                     </div>

//                   </div>

//                 </div>


//                 {/* FULL STACK */}
//                 <div
//                   onMouseEnter={() => setHoveredCard("developer")}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className="
//                     border
//                     border-[#282828]
//                     rounded-lg
//                     p-5
//                     bg-[#090909]
//                     card-hover
//                     cursor-default
//                   "
//                 >

//                   <div className="flex items-start gap-4">

//                     <div
//                       className="
//                         shrink-0
//                         w-11
//                         h-11
//                         rounded-full
//                         bg-[#202020]
//                         flex
//                         items-center
//                         justify-center
//                       "
//                     >

//                       <BriefcaseBusiness
//                         className="w-5 h-5"
//                         style={{
//                           color: ORANGE,
//                         }}
//                       />

//                     </div>

//                     <div>

//                       <h3
//                         className="
//                           text-lg
//                           sm:text-xl
//                           font-bold
//                           orange-transition
//                         "
//                         style={{
//                           color:
//                             hoveredCard === "developer"
//                               ? ORANGE
//                               : "#ffffff",
//                         }}
//                       >
//                         Full Stack Web Development
//                       </h3>

//                       <p
//                         className="
//                           text-sm
//                           sm:text-base
//                           mt-1
//                           leading-6
//                           orange-transition
//                         "
//                         style={{
//                           color:
//                             hoveredCard === "developer"
//                               ? ORANGE
//                               : "#9ca3af",
//                         }}
//                       >
//                         Building modern web applications using
//                         React.js, Node.js, Express.js and MongoDB.
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//               </div>
//             )}


//             {/* =================================================
//                 PERSONAL TAB
//             ================================================= */}
//             {activeTab === "Personal" && (
//               <div className="card-animation">

//                 <div
//                   className="
//                     grid
//                     grid-cols-1
//                     sm:grid-cols-2
//                     gap-3
//                   "
//                 >

//                   {/* =================================================
//                       DATE OF BIRTH
//                   ================================================= */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("dob")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#282828]
//                       rounded-lg
//                       p-5
//                       min-h-[125px]
//                       bg-[#090909]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <CalendarDays
//                       className="w-6 h-6 mb-4 orange-transition"
//                       style={{
//                         color: ORANGE,
//                       }}
//                     />

//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "dob"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Date of Birth
//                     </p>

//                     <p
//                       className="
//                         text-base
//                         sm:text-lg
//                         mt-2
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "dob"
//                             ? ORANGE
//                             : "#9ca3af",
//                       }}
//                     >
//                       17 April
//                     </p>

//                   </div>


//                   {/* =================================================
//                       LOCATION
//                   ================================================= */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("location")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#282828]
//                       rounded-lg
//                       p-5
//                       min-h-[125px]
//                       bg-[#090909]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <MapPin
//                       className="w-6 h-6 mb-4"
//                       style={{
//                         color: ORANGE,
//                       }}
//                     />

//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "location"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Location
//                     </p>

//                     <p
//                       className="
//                         text-base
//                         sm:text-lg
//                         mt-2
//                         leading-6
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "location"
//                             ? ORANGE
//                             : "#9ca3af",
//                       }}
//                     >
//                       Chhatrapati Sambhajinagar,
//                       Maharashtra
//                     </p>

//                   </div>


//                   {/* =================================================
//                       EMAIL
//                   ================================================= */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("email")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#282828]
//                       rounded-lg
//                       p-5
//                       min-h-[125px]
//                       bg-[#090909]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <Mail
//                       className="w-6 h-6 mb-4"
//                       style={{
//                         color: ORANGE,
//                       }}
//                     />

//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "email"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Email
//                     </p>

//                     <p
//                       className="
//                         text-sm
//                         sm:text-base
//                         font-medium
//                         mt-2
//                         break-all
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "email"
//                             ? ORANGE
//                             : "#9ca3af",
//                       }}
//                     >
//                       komaljadhav2535@gmail.com
//                     </p>

//                   </div>


//                   {/* =================================================
//                       PHONE
//                   ================================================= */}
//                   <div
//                     onMouseEnter={() => setHoveredCard("phone")}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="
//                       border
//                       border-[#282828]
//                       rounded-lg
//                       p-5
//                       min-h-[125px]
//                       bg-[#090909]
//                       card-hover
//                       cursor-default
//                     "
//                   >

//                     <Phone
//                       className="w-6 h-6 mb-4"
//                       style={{
//                         color: ORANGE,
//                       }}
//                     />

//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "phone"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Phone
//                     </p>

//                     <p
//                       className="
//                         text-base
//                         sm:text-lg
//                         mt-2
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "phone"
//                             ? ORANGE
//                             : "#9ca3af",
//                       }}
//                     >
//                       7709171195
//                     </p>

//                   </div>

//                 </div>


//                 {/* =================================================
//                     LANGUAGES
//                 ================================================= */}
//                 <div
//                   onMouseEnter={() => setHoveredCard("languages")}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className="
//                     border
//                     border-[#282828]
//                     rounded-lg
//                     p-5
//                     mt-4
//                     bg-[#090909]
//                     card-hover
//                     cursor-default
//                   "
//                 >

//                   <h3
//                     className="
//                       text-xl
//                       font-bold
//                       mb-4
//                       orange-transition
//                     "
//                     style={{
//                       color:
//                         hoveredCard === "languages"
//                           ? ORANGE
//                           : "#ffffff",
//                     }}
//                   >
//                     Languages
//                   </h3>

//                   <div className="flex flex-wrap gap-2">

//                     <span
//                       className="
//                         px-4
//                         py-1.5
//                         rounded-full
//                         bg-[#202020]
//                         text-sm
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "languages"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       English
//                     </span>

//                     <span
//                       className="
//                         px-4
//                         py-1.5
//                         rounded-full
//                         bg-[#202020]
//                         text-sm
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "languages"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Hindi
//                     </span>

//                     <span
//                       className="
//                         px-4
//                         py-1.5
//                         rounded-full
//                         bg-[#202020]
//                         text-sm
//                         orange-transition
//                       "
//                       style={{
//                         color:
//                           hoveredCard === "languages"
//                             ? ORANGE
//                             : "#ffffff",
//                       }}
//                     >
//                       Marathi
//                     </span>

//                   </div>

//                 </div>

//               </div>
//             )}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutDetails;





import React, { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const ORANGE = "#ff7800";

const AboutDetails = () => {
  const [activeTab, setActiveTab] = useState("Personal");
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = ["Bio", "Education", "Personal"];

  return (
    <section
      className="
        min-h-screen
        bg-[#080808]
        text-white
        px-4
        sm:px-6
        lg:px-8
        pt-[100px]
        pb-8
        lg:pt-[105px]
        lg:pb-10
        overflow-hidden
      "
    >

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}

      <style>{`
        @keyframes pageFade {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleFade {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 96px;
            opacity: 1;
          }
        }

        @keyframes cardFade {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-animation {
          animation: pageFade 0.7s ease-out both;
        }

        .title-animation {
          animation: titleFade 0.7s ease-out both;
        }

        .line-animation {
          animation: lineGrow 0.8s ease-out 0.4s both;
        }

        .card-animation {
          animation: cardFade 0.55s ease-out both;
        }

        .card-hover {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-3px);
          border-color: #ff7800;
          box-shadow:
            0 0 0 1px rgba(255, 120, 0, 0.15),
            0 8px 28px rgba(255, 120, 0, 0.07);
        }

        .orange-transition {
          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }
      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="max-w-[1380px] mx-auto">


        {/* =====================================================
            PAGE TITLE
        ===================================================== */}

        <div className="text-center mb-6 lg:mb-7 title-animation">

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-serif
              font-semibold
              tracking-tight
              text-white
            "
          >
            About Me
          </h1>

          <p
            className="
              mt-2
              text-xs
              sm:text-sm
              lg:text-base
              font-serif
              tracking-[0.15em]
              text-gray-400
              uppercase
            "
          >
            Get To Know Me Better
          </p>

          <div
            className="
              h-[3px]
              bg-white
              mx-auto
              mt-4
              line-animation
            "
          ></div>

        </div>


        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1fr]
            gap-5
            lg:gap-7
            items-start
            page-animation
          "
        >


          {/* =================================================
              LEFT PROFILE CARD
          ================================================= */}

          <div className="w-full flex justify-center">

            <div
              className="
                flex
                w-full
                max-w-[720px]
                h-[320px]
                sm:h-[380px]
                lg:h-[430px]
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                border
                border-[#252525]
                bg-[#111]
              "
            >

              {/* =================================================
                  PROFILE IMAGE
                  DO NOT CHANGE IMAGE SIZE
              ================================================= */}

              <img
                src="/profile.png"
                alt="Komal Jadhav"
                className="
                  h-[72%]
                  w-[72%]
                  object-contain
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="w-full">


            {/* =================================================
                TABS
            ================================================= */}

            <div
              className="
                w-full
                bg-[#242424]
                border
                border-[#2b2b2b]
                rounded-lg
                p-1
                flex
                items-center
                mb-4
              "
            >

              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1
                    py-[9px]
                    px-2
                    rounded-md
                    text-sm
                    sm:text-base
                    font-medium
                    transition-all
                    duration-300

                    ${
                      activeTab === tab
                        ? "bg-[#080808] text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}

            </div>


            {/* =================================================
                BIO TAB
            ================================================= */}

            {activeTab === "Bio" && (
              <div className="card-animation">

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    mb-3
                  "
                >
                  Hello There!
                </h2>

                <div
                  className="
                    space-y-3
                    text-gray-400
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >

                  <p>
                    I'm{" "}
                    <span className="text-white font-medium">
                      Komal Jadhav
                    </span>
                    , a passionate MERN Stack Developer focused on
                    creating modern, responsive and user-friendly
                    web applications.
                  </p>

                  <p>
                    I enjoy turning ideas into clean and functional
                    digital experiences. I focus on creating interfaces
                    that are simple, attractive and easy to use.
                  </p>

                  <p>
                    My technical skills include React.js, JavaScript,
                    Node.js, Express.js, MongoDB, Tailwind CSS and
                    REST APIs.
                  </p>

                  <p>
                    I continuously learn new technologies and improve
                    my development skills to build better and scalable
                    web applications.
                  </p>

                </div>


                {/* BIO CARDS */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    mt-5
                  "
                >

                  {/* CARD 1 */}

                  <div
                    onMouseEnter={() =>
                      setHoveredCard("specialization")
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                    className="
                      border
                      border-[#292929]
                      rounded-lg
                      p-3.5
                      bg-[#0b0b0b]
                      card-hover
                      cursor-default
                    "
                  >

                    <BriefcaseBusiness
                      className="w-5 h-5 mb-2"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-xs"
                      style={{
                        color:
                          hoveredCard === "specialization"
                            ? ORANGE
                            : "#737373",
                      }}
                    >
                      Specialization
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        mt-1
                      "
                      style={{
                        color:
                          hoveredCard === "specialization"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      MERN Stack Development
                    </p>

                  </div>


                  {/* CARD 2 */}

                  <div
                    onMouseEnter={() =>
                      setHoveredCard("profession")
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                    className="
                      border
                      border-[#292929]
                      rounded-lg
                      p-3.5
                      bg-[#0b0b0b]
                      card-hover
                      cursor-default
                    "
                  >

                    <GraduationCap
                      className="w-5 h-5 mb-2"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-xs"
                      style={{
                        color:
                          hoveredCard === "profession"
                            ? ORANGE
                            : "#737373",
                      }}
                    >
                      Profession
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        mt-1
                      "
                      style={{
                        color:
                          hoveredCard === "profession"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Full Stack Developer
                    </p>

                  </div>

                </div>

              </div>
            )}


            {/* =================================================
                EDUCATION TAB
            ================================================= */}

            {activeTab === "Education" && (
              <div className="space-y-3 card-animation">

                {/* BSC */}

                <div
                  onMouseEnter={() => setHoveredCard("bsc")}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="
                    border
                    border-[#282828]
                    rounded-lg
                    p-4
                    bg-[#090909]
                    card-hover
                    cursor-default
                  "
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        shrink-0
                        w-10
                        h-10
                        rounded-full
                        bg-[#202020]
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <GraduationCap
                        className="w-5 h-5"
                        style={{
                          color: ORANGE,
                        }}
                      />

                    </div>

                    <div>

                      <h3
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                        "
                        style={{
                          color:
                            hoveredCard === "bsc"
                              ? ORANGE
                              : "#ffffff",
                        }}
                      >
                        Bachelor of Computer Science (BCS)
                      </h3>

                      <p
                        className="
                          text-sm
                          sm:text-base
                          mt-1
                        "
                        style={{
                          color:
                            hoveredCard === "bsc"
                              ? ORANGE
                              : "#9ca3af",
                        }}
                      >
                        Dr. Babasaheb Ambedkar Marathwada University
                      </p>

                      <p
                        className="
                          text-sm
                          mt-1
                        "
                        style={{
                          color:
                            hoveredCard === "bsc"
                              ? ORANGE
                              : "#6b7280",
                        }}
                      >
                        Chhatrapati Sambhajinagar
                      </p>

                    </div>

                  </div>

                </div>


                {/* FULL STACK */}

                <div
                  onMouseEnter={() =>
                    setHoveredCard("developer")
                  }
                  onMouseLeave={() =>
                    setHoveredCard(null)
                  }
                  className="
                    border
                    border-[#282828]
                    rounded-lg
                    p-4
                    bg-[#090909]
                    card-hover
                    cursor-default
                  "
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        shrink-0
                        w-10
                        h-10
                        rounded-full
                        bg-[#202020]
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <BriefcaseBusiness
                        className="w-5 h-5"
                        style={{
                          color: ORANGE,
                        }}
                      />

                    </div>

                    <div>

                      <h3
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                        "
                        style={{
                          color:
                            hoveredCard === "developer"
                              ? ORANGE
                              : "#ffffff",
                        }}
                      >
                        Full Stack Web Development
                      </h3>

                      <p
                        className="
                          text-sm
                          sm:text-base
                          mt-1
                          leading-6
                        "
                        style={{
                          color:
                            hoveredCard === "developer"
                              ? ORANGE
                              : "#9ca3af",
                        }}
                      >
                        Building modern web applications using
                        React.js, Node.js, Express.js and MongoDB.
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            )}


            {/* =================================================
                PERSONAL TAB
            ================================================= */}

            {activeTab === "Personal" && (
              <div className="card-animation">

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                  "
                >

                  {/* DATE OF BIRTH */}

                  <div
                    onMouseEnter={() => setHoveredCard("dob")}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="
                      border
                      border-[#282828]
                      rounded-lg
                      p-4
                      min-h-[108px]
                      bg-[#090909]
                      card-hover
                      cursor-default
                    "
                  >

                    <CalendarDays
                      className="w-5 h-5 mb-3"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-sm font-medium"
                      style={{
                        color:
                          hoveredCard === "dob"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Date of Birth
                    </p>

                    <p
                      className="text-base sm:text-lg mt-1"
                      style={{
                        color:
                          hoveredCard === "dob"
                            ? ORANGE
                            : "#9ca3af",
                      }}
                    >
                      17 April
                    </p>

                  </div>


                  {/* LOCATION */}

                  <div
                    onMouseEnter={() =>
                      setHoveredCard("location")
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                    className="
                      border
                      border-[#282828]
                      rounded-lg
                      p-4
                      min-h-[108px]
                      bg-[#090909]
                      card-hover
                      cursor-default
                    "
                  >

                    <MapPin
                      className="w-5 h-5 mb-3"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-sm font-medium"
                      style={{
                        color:
                          hoveredCard === "location"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Location
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        mt-1
                        leading-5
                      "
                      style={{
                        color:
                          hoveredCard === "location"
                            ? ORANGE
                            : "#9ca3af",
                      }}
                    >
                      Chhatrapati Sambhajinagar,
                      Maharashtra
                    </p>

                  </div>


                  {/* EMAIL */}

                  <div
                    onMouseEnter={() =>
                      setHoveredCard("email")
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                    className="
                      border
                      border-[#282828]
                      rounded-lg
                      p-4
                      min-h-[108px]
                      bg-[#090909]
                      card-hover
                      cursor-default
                    "
                  >

                    <Mail
                      className="w-5 h-5 mb-3"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-sm font-medium"
                      style={{
                        color:
                          hoveredCard === "email"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Email
                    </p>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-medium
                        mt-1
                        break-all
                      "
                      style={{
                        color:
                          hoveredCard === "email"
                            ? ORANGE
                            : "#9ca3af",
                      }}
                    >
                      komaljadhav2535@gmail.com
                    </p>

                  </div>


                  {/* PHONE */}

                  <div
                    onMouseEnter={() =>
                      setHoveredCard("phone")
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                    className="
                      border
                      border-[#282828]
                      rounded-lg
                      p-4
                      min-h-[108px]
                      bg-[#090909]
                      card-hover
                      cursor-default
                    "
                  >

                    <Phone
                      className="w-5 h-5 mb-3"
                      style={{
                        color: ORANGE,
                      }}
                    />

                    <p
                      className="text-sm font-medium"
                      style={{
                        color:
                          hoveredCard === "phone"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Phone
                    </p>

                    <p
                      className="text-base sm:text-lg mt-1"
                      style={{
                        color:
                          hoveredCard === "phone"
                            ? ORANGE
                            : "#9ca3af",
                      }}
                    >
                      7709171195
                    </p>

                  </div>

                </div>


                {/* =================================================
                    LANGUAGES
                ================================================= */}

                <div
                  onMouseEnter={() =>
                    setHoveredCard("languages")
                  }
                  onMouseLeave={() =>
                    setHoveredCard(null)
                  }
                  className="
                    border
                    border-[#282828]
                    rounded-lg
                    p-4
                    mt-3
                    bg-[#090909]
                    card-hover
                    cursor-default
                  "
                >

                  <h3
                    className="
                      text-lg
                      font-bold
                      mb-3
                    "
                    style={{
                      color:
                        hoveredCard === "languages"
                          ? ORANGE
                          : "#ffffff",
                    }}
                  >
                    Languages
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-[#202020]
                        text-xs
                        sm:text-sm
                      "
                      style={{
                        color:
                          hoveredCard === "languages"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      English
                    </span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-[#202020]
                        text-xs
                        sm:text-sm
                      "
                      style={{
                        color:
                          hoveredCard === "languages"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Hindi
                    </span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-[#202020]
                        text-xs
                        sm:text-sm
                      "
                      style={{
                        color:
                          hoveredCard === "languages"
                            ? ORANGE
                            : "#ffffff",
                      }}
                    >
                      Marathi
                    </span>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutDetails;


