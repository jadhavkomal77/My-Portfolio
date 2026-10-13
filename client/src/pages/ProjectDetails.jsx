// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { projectsData } from "./AllProjects";

// const ArrowLeftIcon = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-[17px] w-[17px]"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// );

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

// export default function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const project = projectsData.find((item) => item.id === id);

//   if (!project) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-5 text-white">
//         <div className="text-center">
//           <h1 className="text-[32px] font-bold">
//             Project Not Found
//           </h1>

//           <button
//             onClick={() => navigate("/projects")}
//             className="
//               mt-5 inline-flex items-center gap-2
//               rounded-[6px]
//               bg-orange-500
//               px-5 py-3
//               text-[14px] font-semibold
//             "
//           >
//             <ArrowLeftIcon />
//             Back to Projects
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main
//       className="
//         relative min-h-screen
//         overflow-hidden
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
//             absolute left-[-180px] top-[100px]
//             h-[350px] w-[350px]
//             rounded-full
//             bg-orange-500/[0.06]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute right-[-160px] top-[200px]
//             h-[350px] w-[350px]
//             rounded-full
//             bg-blue-500/[0.035]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute bottom-[-150px] left-1/2
//             h-[300px] w-[500px]
//             -translate-x-1/2
//             rounded-full
//             bg-orange-500/[0.035]
//             blur-[120px]
//           "
//         />

//         <span className="absolute left-[10%] top-[20%] h-[3px] w-[3px] rounded-full bg-orange-400/70" />
//         <span className="absolute right-[15%] top-[30%] h-[2px] w-[2px] rounded-full bg-white/40" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1150px]">

//         {/* Back */}
//         <button
//           type="button"
//           onClick={() => navigate("/projects")}
//           className="
//             mb-6 inline-flex items-center gap-2
//             text-[14px] font-medium
//             text-white/60
//             transition
//             hover:text-orange-400
//           "
//         >
//           <ArrowLeftIcon />
//           Back to Projects
//         </button>

//         {/* ================= HEADER ================= */}
//         <div className="mb-7">
//           <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-orange-400">
//             {project.category}
//           </div>

//           <h1
//             className="
//               text-[38px]
//               font-bold
//               tracking-[-0.045em]
//               sm:text-[46px]
//               md:text-[52px]
//             "
//           >
//             {project.title}
//           </h1>

//           <div className="mt-4 h-[4px] w-[58px] bg-orange-500" />
//         </div>

//         {/* ================= IMAGE ================= */}
//         <div
//           className="
//             overflow-hidden
//             rounded-[10px]
//             border border-white/[0.09]
//             bg-white/[0.025]
//             shadow-[0_15px_50px_rgba(0,0,0,0.25)]
//           "
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="h-[300px] w-full object-cover sm:h-[400px] md:h-[480px]"
//           />
//         </div>

//         {/* ================= DETAILS ================= */}
//         <div className="mt-7 grid gap-7 md:grid-cols-[1fr_300px]">

//           {/* Description */}
//           <div>
//             <h2 className="text-[24px] font-semibold">
//               About the Project
//             </h2>

//             <p className="mt-3 max-w-[750px] text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
//               {project.description}
//             </p>

//             <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
//               This project was developed with a focus on clean interface
//               design, responsive layouts, reusable components and reliable
//               application functionality across different screen sizes.
//             </p>
//           </div>

//           {/* Technologies */}
//           <div
//             className="
//               h-fit
//               rounded-[10px]
//               border border-white/[0.09]
//               bg-white/[0.025]
//               p-5
//             "
//           >
//             <h3 className="text-[18px] font-semibold">
//               Technologies
//             </h3>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {project.tech.map((item) => (
//                 <span
//                   key={item}
//                   className="
//                     rounded-full
//                     border border-orange-500/20
//                     bg-orange-500/[0.07]
//                     px-3 py-[6px]
//                     text-[12px]
//                     text-orange-300
//                   "
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-7 flex flex-wrap gap-3">
//           <button
//             type="button"
//             className="
//               inline-flex items-center gap-2
//               rounded-[6px]
//               bg-orange-500
//               px-5 py-[10px]
//               text-[14px]
//               font-semibold
//               text-white
//               transition
//               hover:bg-orange-600
//             "
//           >
//             Live Demo
//             <ArrowIcon />
//           </button>

//           <button
//             type="button"
//             className="
//               inline-flex items-center gap-2
//               rounded-[6px]
//               border border-white/[0.15]
//               bg-white/[0.03]
//               px-5 py-[10px]
//               text-[14px]
//               font-medium
//               text-white
//               transition
//               hover:border-orange-500/50
//               hover:text-orange-400
//             "
//           >
//             GitHub
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }


import React from 'react'

const ProjectDetails = () => {
  return (
    <div>
      ProjectDetailsProjectDetailsProjectDetailsProjectDetails
    </div>
  )
}

export default ProjectDetails
