
// import React from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   FaNewspaper,
//   FaFileAlt,
//   FaClipboardList,
//   FaEnvelope,
//   FaWhatsapp,
//   FaArrowRight,
//   FaChartLine,
//   FaSyncAlt,
//   FaCheckCircle,
// } from "react-icons/fa";

// import {
//   useGetAllNewsForAdminQuery,
// } from "../redux/apis/newsApi";

// import {
//   useGetAllContactsQuery,
// } from "../redux/apis/contactApi";



// const getArrayFromResponse = (response, keys = []) => {
//   if (Array.isArray(response)) {
//     return response;
//   }

//   if (!response) {
//     return [];
//   }

//   for (const key of keys) {
//     if (Array.isArray(response[key])) {
//       return response[key];
//     }
//   }

//   if (Array.isArray(response.data)) {
//     return response.data;
//   }

//   if (Array.isArray(response.result)) {
//     return response.result;
//   }

//   return [];
// };


// const getCountFromResponse = (response, keys = []) => {
//   if (!response) {
//     return null;
//   }

//   for (const key of keys) {
//     if (typeof response[key] === "number") {
//       return response[key];
//     }
//   }

//   if (typeof response.total === "number") {
//     return response.total;
//   }

//   if (typeof response.count === "number") {
//     return response.count;
//   }

//   if (response.data) {
//     if (typeof response.data.total === "number") {
//       return response.data.total;
//     }

//     if (typeof response.data.count === "number") {
//       return response.data.count;
//     }
//   }

//   return null;
// };



// const AdminHome = () => {
//   const navigate = useNavigate();



//   const {
//     data: newsData,
//     isLoading: newsLoading,
//     isFetching: newsFetching,
//     isError: newsError,
//     refetch: refetchNews,
//   } = useGetAllNewsForAdminQuery();


//   const {
//     data: contactData,
//     isLoading: contactLoading,
//     isFetching: contactFetching,
//     isError: contactError,
//     refetch: refetchContacts,
//   } = useGetAllContactsQuery();


//   /* ===================================================
//      NEWS COUNT
//   =================================================== */

//   const newsArray = getArrayFromResponse(newsData, [
//     "news",
//     "articles",
//     "items",
//   ]);

//   const newsApiCount = getCountFromResponse(newsData, [
//     "totalNews",
//     "totalArticles",
//     "newsCount",
//   ]);

//   const totalNews =
//     newsApiCount !== null
//       ? newsApiCount
//       : newsArray.length;


//   /* ===================================================
//      CONTACT COUNT
//   =================================================== */

//   const contactArray = getArrayFromResponse(contactData, [
//     "contacts",
//     "enquiries",
//     "messages",
//     "items",
//   ]);

//   const contactApiCount = getCountFromResponse(contactData, [
//     "totalContacts",
//     "totalEnquiries",
//     "contactCount",
//   ]);

//   const totalContacts =
//     contactApiCount !== null
//       ? contactApiCount
//       : contactArray.length;


//   /* ===================================================
//      REFRESH
//   =================================================== */

//   const handleRefresh = () => {
//     refetchNews();
//     refetchContacts();
//   };


//   /* ===================================================
//      WEBSITE MODULES
//   =================================================== */

//   const modules = [
//     {
//       title: "Report a Concern",
//       description:
//         "View and manage concern reports submitted through your website.",
//       icon: FaFileAlt,
//       path: "/admin/report-concern",
//       count: null,
//       countLabel: "Total Reports",
//       iconBg: "bg-red-50",
//       iconColor: "text-red-600",
//       buttonColor: "text-red-600 hover:bg-red-50",
//     },

//     {
//       title: "News",
//       description:
//         "Create, publish, edit and manage all website news articles.",
//       icon: FaNewspaper,
//       path: "/admin/news",
//       count: newsError
//         ? null
//         : totalNews,
//       countLabel: "Published Articles",
//       iconBg: "bg-blue-50",
//       iconColor: "text-blue-600",
//       buttonColor: "text-blue-600 hover:bg-blue-50",
//     },

//     {
//       title: "RFQ",
//       description:
//         "View and manage quotation requests received from customers.",
//       icon: FaClipboardList,
//       path: "/admin/adminrfq",
//       count: null,
//       countLabel: "Total Requests",
//       iconBg: "bg-purple-50",
//       iconColor: "text-purple-600",
//       buttonColor: "text-purple-600 hover:bg-purple-50",
//     },

//     {
//       title: "Contact",
//       description:
//         "View and manage enquiries received through the contact form.",
//       icon: FaEnvelope,
//       path: "/admin/admincontact",
//       count: contactError
//         ? null
//         : totalContacts,
//       countLabel: "Total Enquiries",
//       iconBg: "bg-green-50",
//       iconColor: "text-green-600",
//       buttonColor: "text-green-600 hover:bg-green-50",
//     },

//     {
//       title: "WhatsApp Settings",
//       description:
//         "Manage WhatsApp integration and communication settings.",
//       icon: FaWhatsapp,
//       path: "/admin/whatsappsettings",
//       count: null,
//       countLabel: "Settings",
//       iconBg: "bg-emerald-50",
//       iconColor: "text-emerald-600",
//       buttonColor: "text-emerald-600 hover:bg-emerald-50",
//     },
//   ];


//   /* ===================================================
//      RENDER
//   =================================================== */

//   return (
//     <div className="min-h-full bg-[#F8F9FB]">

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <div className="mb-8">

//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//           {/* TITLE */}

//           <div>

//             <div className="flex items-center gap-3">

//               <h1 className="text-3xl md:text-4xl font-bold text-[#172B4D]">
//                 Dashboard
//               </h1>

//               <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                 Live
//               </span>

//             </div>

//             <p className="mt-2 text-gray-500 text-sm md:text-base">
//               Overview of your website management platform
//             </p>

//           </div>


//           {/* REFRESH BUTTON */}

//           <button
//             onClick={handleRefresh}
//             className="
//               flex
//               items-center
//               justify-center
//               gap-2
//               px-5
//               py-3
//               bg-white
//               border
//               border-gray-200
//               rounded-xl
//               text-gray-700
//               font-semibold
//               shadow-sm
//               hover:bg-gray-50
//               hover:shadow-md
//               transition-all
//             "
//           >

//             <FaSyncAlt
//               className={
//                 newsFetching || contactFetching
//                   ? "animate-spin"
//                   : ""
//               }
//             />

//             Refresh

//           </button>

//         </div>

//       </div>


//       {/* =================================================
//           TOP SUMMARY CARDS
//       ================================================= */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">


//         {/* REPORT */}

//         <SummaryCard
//           title="Report a Concern"
//           value="—"
//           subtitle="Total Reports"
//           icon={<FaFileAlt />}
//           iconBg="bg-red-50"
//           iconColor="text-red-600"
//           onClick={() =>
//             navigate("/admin/report-concern")
//           }
//         />


//         {/* NEWS */}

//         <SummaryCard
//           title="News"
//           value={
//             newsLoading
//               ? "..."
//               : newsError
//                 ? "—"
//                 : totalNews
//           }
//           subtitle="Published Articles"
//           icon={<FaNewspaper />}
//           iconBg="bg-blue-50"
//           iconColor="text-blue-600"
//           onClick={() =>
//             navigate("/admin/news")
//           }
//         />


//         {/* RFQ */}

//         <SummaryCard
//           title="RFQ"
//           value="—"
//           subtitle="Total Requests"
//           icon={<FaClipboardList />}
//           iconBg="bg-purple-50"
//           iconColor="text-purple-600"
//           onClick={() =>
//             navigate("/admin/adminrfq")
//           }
//         />


//         {/* CONTACT */}

//         <SummaryCard
//           title="Contact"
//           value={
//             contactLoading
//               ? "..."
//               : contactError
//                 ? "—"
//                 : totalContacts
//           }
//           subtitle="Total Enquiries"
//           icon={<FaEnvelope />}
//           iconBg="bg-green-50"
//           iconColor="text-green-600"
//           onClick={() =>
//             navigate("/admin/admincontact")
//           }
//         />

//       </div>


//       {/* =================================================
//           WEBSITE MANAGEMENT
//       ================================================= */}

//       <section
//         className="
//           bg-white
//           border
//           border-gray-100
//           rounded-2xl
//           shadow-sm
//           p-6
//           md:p-8
//         "
//       >

//         {/* SECTION HEADER */}

//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-7">

//           <div>

//             <h2 className="text-2xl font-bold text-[#172B4D]">
//               Website Management
//             </h2>

//             <p className="mt-1 text-gray-500">
//               Quickly access and manage your website modules
//             </p>

//           </div>


//           <div className="flex items-center gap-2 text-sm text-gray-400">

//             <FaChartLine />

//             <span>
//               Admin Controls
//             </span>

//           </div>

//         </div>


//         {/* MODULE CARDS */}

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

//           {modules.map((module) => {

//             const Icon = module.icon;

//             const isLoading =
//               module.title === "News"
//                 ? newsLoading
//                 : module.title === "Contact"
//                   ? contactLoading
//                   : false;


//             return (
//               <div
//                 key={module.path}
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-gray-200
//                   bg-white
//                   p-5
//                   hover:border-gray-300
//                   hover:shadow-lg
//                   hover:-translate-y-0.5
//                   transition-all
//                   duration-200
//                 "
//               >

//                 {/* CARD TOP */}

//                 <div className="flex items-start justify-between gap-4">

//                   {/* ICON */}

//                   <div
//                     className={`
//                       w-12
//                       h-12
//                       rounded-xl
//                       flex
//                       items-center
//                       justify-center
//                       ${module.iconBg}
//                       ${module.iconColor}
//                     `}
//                   >

//                     <Icon className="text-xl" />

//                   </div>


//                   {/* COUNT */}

//                   <div className="text-right">

//                     {isLoading ? (

//                       <div className="h-8 w-12 bg-gray-100 rounded-lg animate-pulse" />

//                     ) : (

//                       <>

//                         <p className="text-2xl font-bold text-gray-900">

//                           {module.count !== null
//                             ? module.count
//                             : "—"}

//                         </p>

//                         <p className="text-xs text-gray-400 mt-0.5">
//                           {module.countLabel}
//                         </p>

//                       </>

//                     )}

//                   </div>

//                 </div>


//                 {/* CARD CONTENT */}

//                 <div className="mt-5">

//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {module.title}
//                   </h3>

//                   <p className="mt-2 text-sm text-gray-500 leading-6 min-h-[48px]">
//                     {module.description}
//                   </p>

//                 </div>


//                 {/* MANAGE */}

//                 <button
//                   onClick={() =>
//                     navigate(module.path)
//                   }
//                   className={`
//                     mt-5
//                     w-full
//                     flex
//                     items-center
//                     justify-center
//                     gap-2
//                     py-2.5
//                     rounded-xl
//                     font-semibold
//                     text-sm
//                     transition-all
//                     ${module.buttonColor}
//                   `}
//                 >

//                   Manage

//                   <FaArrowRight
//                     className="
//                       text-xs
//                       group-hover:translate-x-1
//                       transition-transform
//                     "
//                   />

//                 </button>

//               </div>
//             );
//           })}

//         </div>

//       </section>


//       {/* =================================================
//           API ERROR
//       ================================================= */}

//       {(newsError || contactError) && (

//         <div className="
//           mt-6
//           p-4
//           rounded-xl
//           border
//           border-red-100
//           bg-red-50
//           flex
//           items-start
//           gap-3
//         ">

//           <div className="text-red-600 mt-0.5">
//             <FaFileAlt />
//           </div>

//           <div>

//             <p className="font-semibold text-red-700">
//               Some dashboard data could not be loaded.
//             </p>

//             <p className="text-sm text-red-600 mt-1">
//               Please check the backend/API connection.
//             </p>

//           </div>

//         </div>

//       )}


//       {/* =================================================
//           SYSTEM STATUS
//       ================================================= */}

//       <div className="
//         mt-6
//         bg-white
//         border
//         border-gray-100
//         rounded-2xl
//         shadow-sm
//         p-6
//       ">

//         <div className="flex items-center justify-between">

//           <div>

//             <h3 className="text-lg font-semibold text-[#172B4D]">
//               System Status
//             </h3>

//             <p className="text-sm text-gray-500 mt-1">
//               Current website administration services
//             </p>

//           </div>


//           <FaCheckCircle className="text-green-500 text-xl" />

//         </div>


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

//           <StatusItem
//             name="News Management"
//             status={!newsError}
//           />

//           <StatusItem
//             name="Contact Management"
//             status={!contactError}
//           />

//           <StatusItem
//             name="Admin Panel"
//             status={true}
//           />

//         </div>

//       </div>

//     </div>
//   );
// };


// /* =====================================================
//    SUMMARY CARD
// ===================================================== */

// const SummaryCard = ({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconBg,
//   iconColor,
//   onClick,
// }) => {

//   return (
//     <div
//       onClick={onClick}
//       className="
//         group
//         bg-white
//         border
//         border-gray-100
//         rounded-2xl
//         p-6
//         shadow-sm
//         hover:shadow-lg
//         hover:-translate-y-1
//         transition-all
//         duration-200
//         cursor-pointer
//       "
//     >

//       <div className="flex items-start justify-between">

//         <div>

//           <p className="text-gray-500 text-sm font-medium">
//             {title}
//           </p>

//           <h2 className="text-3xl font-bold text-gray-900 mt-3">
//             {value}
//           </h2>

//         </div>


//         <div
//           className={`
//             w-12
//             h-12
//             rounded-xl
//             flex
//             items-center
//             justify-center
//             ${iconBg}
//             ${iconColor}
//           `}
//         >

//           <span className="text-xl">
//             {icon}
//           </span>

//         </div>

//       </div>


//       <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

//         <span>
//           {subtitle}
//         </span>

//         <FaArrowRight
//           className="
//             text-xs
//             group-hover:translate-x-1
//             transition-transform
//           "
//         />

//       </div>

//     </div>
//   );
// };


// /* =====================================================
//    STATUS ITEM
// ===================================================== */

// const StatusItem = ({
//   name,
//   status,
// }) => {

//   return (
//     <div
//       className="
//         flex
//         items-center
//         justify-between
//         bg-gray-50
//         rounded-xl
//         px-4
//         py-3
//       "
//     >

//       <div className="flex items-center gap-3">

//         <span
//           className={`
//             w-2.5
//             h-2.5
//             rounded-full
//             ${
//               status
//                 ? "bg-green-500"
//                 : "bg-red-500"
//             }
//           `}
//         />

//         <span className="text-sm font-medium text-gray-700">
//           {name}
//         </span>

//       </div>


//       <span
//         className={`
//           text-xs
//           font-semibold
//           ${
//             status
//               ? "text-green-600"
//               : "text-red-600"
//           }
//         `}
//       >

//         {status ? "Operational" : "Error"}

//       </span>

//     </div>
//   );
// };


// export default AdminHome;


import React from 'react'

const AdminHome = () => {
  return (
    <div>AdminHome</div>
  )
}

export default AdminHome