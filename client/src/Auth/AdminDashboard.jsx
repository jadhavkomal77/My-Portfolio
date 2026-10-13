
// import { useState } from "react";
// import { Outlet, useNavigate, useLocation } from "react-router-dom";

// import {
//   FaBars,
//   FaTimes,
//   FaSignOutAlt,
//   FaUser,FaUserFriends,
//   FaTachometerAlt,
//   FaExclamationTriangle,
//   FaNewspaper,
//   FaClipboardList,
//   FaAddressBook,
//   FaWhatsapp,
//   FaChevronRight,
// } from "react-icons/fa";

// import {
//   useAdminLogoutMutation,
//   useAdminProfileQuery,
// } from "../redux/apis/adminApi";

// import { toast } from "react-toastify";

// export default function AdminDashboardLayout() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loggingOut, setLoggingOut] = useState(false);

//   // ==========================================================
//   // ADMIN PROFILE
//   // ==========================================================

//   const { data: profileData, isLoading: profileLoading } =
//     useAdminProfileQuery();

//   const admin = profileData?.admin;

//   // ==========================================================
//   // LOGOUT
//   // ==========================================================

//   const [logoutApi] = useAdminLogoutMutation();

//   // ==========================================================
//   // SIDEBAR MENU
//   // ==========================================================

//   const menu = [
//     {
//       name: "Dashboard",
//       path: "/admin",
//       icon: <FaTachometerAlt />,
//     },

//     {
//       name: "Profile",
//       path: "/admin/profile",
//       icon: <FaUser />,
//     },

//     {
//       name: "Report a Concern",
//       path: "/admin/report-concern",
//       icon: <FaExclamationTriangle />,
//     },

//     {
//       name: "News",
//       path: "/admin/news",
//       icon: <FaNewspaper />,
//     },
//     {
//       name: "NewsEvents",
//       path: "/admin/newsevents",
//       icon: <FaNewspaper />,
//     },
//     {
//       name: "Leadership ",
//       path: "/admin/adminleadership",
//       icon: <FaNewspaper />,
//     },
//     {
//       name: "customers ",
//       path: "/admin/admincustomers",
//       icon: <FaUserFriends />,
//     },

//     {
//       name: "RFQ",
//       path: "/admin/adminrfq",
//       icon: <FaClipboardList />,
//     },

//     {
//       name: "Contact",
//       path: "/admin/admincontact",
//       icon: <FaAddressBook />,
//     },

//     {
//       name: "WhatsApp Settings",
//       path: "/admin/whatsappsettings",
//       icon: <FaWhatsapp />,
//     },
//   ];

//   // ==========================================================
//   // CHECK ACTIVE ROUTE
//   // ==========================================================

//   const isActive = (path) => {
//     if (path === "/admin") {
//       return location.pathname === "/admin";
//     }

//     return (
//       location.pathname === path ||
//       location.pathname.startsWith(`${path}/`)
//     );
//   };

//   // ==========================================================
//   // NAVIGATION
//   // ==========================================================

//   const handleNavigate = (path) => {
//     navigate(path);
//     setSidebarOpen(false);
//   };

//   // ==========================================================
//   // LOGOUT
//   // ==========================================================

//   const handleLogout = async () => {
//     if (loggingOut) return;

//     try {
//       setLoggingOut(true);

//       await logoutApi().unwrap();

//       toast.success("Logout successful");

//       navigate("/adminlogin", {
//         replace: true,
//       });
//     } catch (error) {
//       console.error("Logout error:", error);

//       toast.error(
//         error?.data?.message || "Logout failed"
//       );
//     } finally {
//       setLoggingOut(false);
//     }
//   };

//   // ==========================================================
//   // PROFILE IMAGE
//   // ==========================================================

//   const profileImage =
//     admin?.profile?.url ||
//     admin?.profileImage ||
//     admin?.image ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(
//       admin?.name || "Admin"
//     )}&background=B91C1C&color=fff&size=200`;

//   // ==========================================================
//   // CURRENT PAGE NAME
//   // ==========================================================

//   const currentMenu =
//     menu.find((item) => isActive(item.path))?.name ||
//     "Dashboard";

//   // ==========================================================
//   // UI
//   // ==========================================================

//   return (
//     <div className="flex h-screen w-full bg-[#F5F6F8] overflow-hidden">

//       {/* ======================================================
//           MOBILE HEADER
//       ====================================================== */}

//       <header
//         className="
//           fixed
//           top-0
//           left-0
//           right-0
//           h-16
//           lg:hidden
//           bg-[#18181B]
//           text-white
//           z-[60]
//           flex
//           items-center
//           justify-between
//           px-4
//           shadow-lg
//         "
//       >

//         {/* LOGO / TITLE */}

//         <div>
//           <h1 className="text-lg font-bold tracking-wide">
//             Admin Panel
//           </h1>

//           <p className="text-[11px] text-gray-400">
//             Website Management
//           </p>
//         </div>


//         {/* MENU BUTTON */}

//         <button
//           type="button"
//           onClick={() => setSidebarOpen(true)}
//           className="
//             w-10
//             h-10
//             rounded-lg
//             bg-white/10
//             hover:bg-white/20
//             flex
//             items-center
//             justify-center
//             transition
//           "
//         >
//           <FaBars className="text-lg" />
//         </button>

//       </header>


//       {/* ======================================================
//           MOBILE OVERLAY
//       ====================================================== */}

//       {sidebarOpen && (
//         <div
//           className="
//             fixed
//             inset-0
//             bg-black/60
//             backdrop-blur-sm
//             z-[65]
//             lg:hidden
//           "
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}


//       {/* ======================================================
//           SIDEBAR
//       ====================================================== */}

//       <aside
//         className={`
//           fixed
//           lg:static
//           top-0
//           left-0
//           h-screen
//           w-[270px]
//           bg-[#18181B]
//           text-white
//           z-[70]
//           flex
//           flex-col
//           shadow-2xl
//           transition-transform
//           duration-300
//           ease-in-out

//           ${
//             sidebarOpen
//               ? "translate-x-0"
//               : "-translate-x-full lg:translate-x-0"
//           }
//         `}
//       >

//         {/* ====================================================
//             SIDEBAR TOP
//         ==================================================== */}

//         <div className="px-5 pt-5 pb-5">

//           {/* MOBILE CLOSE */}

//           <div className="flex lg:hidden justify-end mb-3">

//             <button
//               type="button"
//               onClick={() => setSidebarOpen(false)}
//               className="
//                 w-8
//                 h-8
//                 rounded-lg
//                 bg-white/10
//                 hover:bg-red-600
//                 flex
//                 items-center
//                 justify-center
//                 transition
//               "
//             >
//               <FaTimes />
//             </button>

//           </div>


//           {/* BRAND */}

//           <div className="mb-6">

//             <h2 className="text-xl font-bold tracking-wide">
//               Admin Panel
//             </h2>

//             <p className="text-xs text-gray-400 mt-1">
//               Website Management
//             </p>

//           </div>


//           {/* ==================================================
//               ADMIN PROFILE
//           ================================================== */}

//           <div
//             className="
//               rounded-2xl
//               bg-[#202023]
//               border
//               border-white/5
//               p-4
//             "
//           >

//             <div className="flex items-center gap-3">

//               {/* IMAGE */}

//               <div className="relative flex-shrink-0">

//                 <img
//                   src={profileImage}
//                   alt="Admin"
//                   className="
//                     w-14
//                     h-14
//                     rounded-full
//                     object-cover
//                     border-2
//                     border-[#B91C1C]
//                   "
//                 />

//                 {/* ONLINE */}

//                 <span
//                   className="
//                     absolute
//                     right-0
//                     bottom-0
//                     w-3.5
//                     h-3.5
//                     bg-green-500
//                     border-2
//                     border-[#202023]
//                     rounded-full
//                   "
//                 />

//               </div>


//               {/* DETAILS */}

//               <div className="min-w-0">

//                 {profileLoading ? (
//                   <>
//                     <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
//                     <div className="h-3 w-28 bg-white/10 rounded mt-2 animate-pulse" />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-semibold text-sm truncate">
//                       {admin?.name || "Admin"}
//                     </h3>

//                     <p className="text-xs text-gray-400 truncate mt-1">
//                       {admin?.email || "admin@email.com"}
//                     </p>
//                   </>
//                 )}

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* DIVIDER */}

//         <div className="px-5">

//           <div className="h-px bg-gray-700/70" />

//         </div>


//         {/* ====================================================
//             NAVIGATION
//         ==================================================== */}

//         <nav
//           className="
//             flex-1
//             overflow-y-auto
//             px-4
//             py-5
//             space-y-1.5
//           "
//         >

//           {/* SECTION LABEL */}

//           <p
//             className="
//               px-3
//               mb-3
//               text-[10px]
//               uppercase
//               tracking-[0.18em]
//               font-bold
//               text-gray-500
//             "
//           >
//             Main Menu
//           </p>


//           {/* MENU ITEMS */}

//           {menu.map((item) => {

//             const active = isActive(item.path);

//             return (
//               <button
//                 key={item.path}
//                 type="button"
//                 onClick={() => handleNavigate(item.path)}
//                 className={`
//                   relative
//                   flex
//                   items-center
//                   w-full
//                   gap-3
//                   px-3
//                   py-3
//                   rounded-xl
//                   text-sm
//                   group
//                   transition-all
//                   duration-200

//                   ${
//                     active
//                       ? "bg-[#B91C1C] text-white shadow-lg shadow-red-900/20"
//                       : "text-gray-300 hover:bg-[#27272A] hover:text-white"
//                   }
//                 `}
//               >

//                 {/* ACTIVE LINE */}

//                 {active && (
//                   <span
//                     className="
//                       absolute
//                       left-0
//                       top-2
//                       bottom-2
//                       w-1
//                       rounded-r-full
//                       bg-white
//                     "
//                   />
//                 )}


//                 {/* ICON */}

//                 <span
//                   className={`
//                     w-8
//                     h-8
//                     rounded-lg
//                     flex
//                     items-center
//                     justify-center
//                     text-base
//                     transition

//                     ${
//                       active
//                         ? "bg-white/10 text-white"
//                         : "text-gray-400 group-hover:text-white group-hover:bg-white/5"
//                     }
//                   `}
//                 >
//                   {item.icon}
//                 </span>


//                 {/* NAME */}

//                 <span className="flex-1 text-left font-medium">
//                   {item.name}
//                 </span>


//                 {/* ARROW */}

//                 <FaChevronRight
//                   className={`
//                     text-[10px]
//                     transition
//                     ${
//                       active
//                         ? "opacity-100"
//                         : "opacity-0 group-hover:opacity-100"
//                     }
//                   `}
//                 />

//               </button>
//             );
//           })}

//         </nav>


//         {/* ====================================================
//             SIDEBAR BOTTOM
//         ==================================================== */}

//         <div className="p-4">

//           {/* ADMIN STATUS */}

//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               px-3
//               py-2.5
//               mb-3
//               rounded-lg
//               bg-green-500/10
//               border
//               border-green-500/10
//             "
//           >

//             <span className="w-2 h-2 bg-green-500 rounded-full" />

//             <span className="text-xs text-green-400">
//               Admin session active
//             </span>

//           </div>


//           {/* LOGOUT */}

//           <button
//             type="button"
//             onClick={handleLogout}
//             disabled={loggingOut}
//             className="
//               w-full
//               flex
//               items-center
//               justify-center
//               gap-2
//               py-3
//               rounded-xl
//               bg-[#B91C1C]
//               hover:bg-[#991B1B]
//               disabled:opacity-60
//               disabled:cursor-not-allowed
//               text-white
//               text-sm
//               font-semibold
//               transition
//             "
//           >

//             {loggingOut ? (
//               <>
//                 <span
//                   className="
//                     w-4
//                     h-4
//                     border-2
//                     border-white/30
//                     border-t-white
//                     rounded-full
//                     animate-spin
//                   "
//                 />

//                 Logging out...
//               </>
//             ) : (
//               <>
//                 <FaSignOutAlt />
//                 Logout
//               </>
//             )}

//           </button>

//         </div>

//       </aside>


//       {/* ======================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <main
//         className="
//           flex-1
//           min-w-0
//           h-screen
//           overflow-y-auto
//           pt-16
//           lg:pt-0
//         "
//       >

//         {/* ====================================================
//             DESKTOP CONTENT HEADER
//         ==================================================== */}

//         <div
//           className="
//             hidden
//             lg:flex
//             h-16
//             bg-white
//             border-b
//             border-gray-200
//             items-center
//             justify-between
//             px-8
//             sticky
//             top-0
//             z-30
//           "
//         >

//           {/* BREADCRUMB */}

//           <div>

//             <p className="text-xs text-gray-400">
//               Admin / Dashboard
//             </p>

//             <h2 className="text-sm font-semibold text-gray-800 mt-0.5">
//               {currentMenu}
//             </h2>

//           </div>


//           {/* RIGHT PROFILE */}

//           <button
//             type="button"
//             onClick={() => navigate("/admin/profile")}
//             className="
//               flex
//               items-center
//               gap-3
//               hover:bg-gray-50
//               rounded-xl
//               px-2
//               py-1.5
//               transition
//             "
//           >

//             <img
//               src={profileImage}
//               alt="Admin"
//               className="
//                 w-9
//                 h-9
//                 rounded-full
//                 object-cover
//                 border
//                 border-gray-200
//               "
//             />

//             <div className="text-left">

//               <p className="text-sm font-semibold text-gray-800">
//                 {admin?.name || "Admin"}
//               </p>

//               <p className="text-[11px] text-gray-400">
//                 Administrator
//               </p>

//             </div>

//           </button>

//         </div>


//         {/* ====================================================
//             OUTLET
//         ==================================================== */}

//         <div className="p-4 sm:p-6 lg:p-8">

//           <Outlet />

//         </div>

//       </main>

//     </div>
//   );
// }







import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUser,
  FaUserFriends,
  FaUserTie,
  FaTachometerAlt,
  FaExclamationTriangle,
  FaNewspaper,
  FaCalendarAlt,
  FaClipboardList,
  FaAddressBook,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";

import {
  useAdminLogoutMutation,
  useAdminProfileQuery,
} from "../redux/apis/adminApi";

import { toast } from "react-toastify";

// ============================================================
// ADMIN DASHBOARD LAYOUT
// ============================================================

export default function AdminDashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // ==========================================================
  // ADMIN PROFILE
  // ==========================================================

  const { data: profileData, isLoading: profileLoading } =
    useAdminProfileQuery();

  const admin = profileData?.admin;

  // ==========================================================
  // LOGOUT
  // ==========================================================

  const [logoutApi] = useAdminLogoutMutation();

  // ==========================================================
  // SIDEBAR MENU
  // ==========================================================

  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },

    {
      name: "Profile",
      path: "/admin/profile",
      icon: <FaUser />,
    },

    {
      name: "Report a Concern",
      path: "/admin/report-concern",
      icon: <FaExclamationTriangle />,
    },

    {
      name: "News",
      path: "/admin/news",
      icon: <FaNewspaper />,
    },

    {
      name: "NewsEvents",
      path: "/admin/newsevents",
      icon: <FaCalendarAlt />,
    },

    {
      name: "Leadership",
      path: "/admin/adminleadership",
      icon: <FaUserTie />,
    },

    {
      name: "Customers",
      path: "/admin/admincustomers",
      icon: <FaUserFriends />,
    },

    {
      name: "RFQ",
      path: "/admin/adminrfq",
      icon: <FaClipboardList />,
    },

    {
      name: "Contact",
      path: "/admin/admincontact",
      icon: <FaAddressBook />,
    },

    {
      name: "WhatsApp Settings",
      path: "/admin/whatsappsettings",
      icon: <FaWhatsapp />,
    },
  ];

  // ==========================================================
  // CHECK ACTIVE ROUTE
  // ==========================================================

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // ==========================================================
  // LOGOUT
  // ==========================================================

  const handleLogout = async () => {
    if (loggingOut) return;

    try {
      setLoggingOut(true);

      await logoutApi().unwrap();

      toast.success("Logout successful");

      navigate("/adminlogin", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout error:", error);

      toast.error(
        error?.data?.message || "Logout failed"
      );
    } finally {
      setLoggingOut(false);
    }
  };

  // ==========================================================
  // PROFILE IMAGE
  // ==========================================================

  const profileImage =
    admin?.profile?.url ||
    admin?.profileImage ||
    admin?.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      admin?.name || "Admin"
    )}&background=B91C1C&color=fff&size=200`;

  // ==========================================================
  // CURRENT PAGE NAME
  // ==========================================================

  const currentMenu =
    menu.find((item) => isActive(item.path))?.name ||
    "Dashboard";

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div className="flex h-screen w-full bg-[#F5F6F8] overflow-hidden">

      {/* ======================================================
          MOBILE HEADER
      ====================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          h-16
          lg:hidden
          bg-[#18181B]
          text-white
          z-[60]
          flex
          items-center
          justify-between
          px-4
          shadow-lg
        "
      >
        {/* LOGO / TITLE */}

        <div>
          <h1 className="text-lg font-bold tracking-wide">
            Admin Panel
          </h1>

          <p className="text-[11px] text-gray-400">
            Website Management
          </p>
        </div>

        {/* MENU BUTTON */}

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="
            w-10
            h-10
            rounded-lg
            bg-white/10
            hover:bg-white/20
            flex
            items-center
            justify-center
            transition
          "
        >
          <FaBars className="text-lg" />
        </button>
      </header>

      {/* ======================================================
          MOBILE OVERLAY
      ====================================================== */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-[65]
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ======================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          lg:static
          top-0
          left-0
          h-screen
          w-[270px]
          bg-[#18181B]
          text-white
          z-[70]
          flex
          flex-col
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* ====================================================
            SIDEBAR TOP
        ==================================================== */}

        <div className="px-5 pt-5 pb-5">

          {/* MOBILE CLOSE */}

          <div className="flex lg:hidden justify-end mb-3">

            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="
                w-8
                h-8
                rounded-lg
                bg-white/10
                hover:bg-red-600
                flex
                items-center
                justify-center
                transition
              "
            >
              <FaTimes />
            </button>

          </div>

          {/* BRAND */}

          <div className="mb-6">

            <h2 className="text-xl font-bold tracking-wide">
              Admin Panel
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Website Management
            </p>

          </div>

          {/* ==================================================
              ADMIN PROFILE
          ================================================== */}

          <div
            className="
              rounded-2xl
              bg-[#202023]
              border
              border-white/5
              p-4
            "
          >

            <div className="flex items-center gap-3">

              {/* IMAGE */}

              <div className="relative flex-shrink-0">

                <img
                  src={profileImage}
                  alt="Admin"
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    border-2
                    border-[#B91C1C]
                  "
                />

                {/* ONLINE */}

                <span
                  className="
                    absolute
                    right-0
                    bottom-0
                    w-3.5
                    h-3.5
                    bg-green-500
                    border-2
                    border-[#202023]
                    rounded-full
                  "
                />

              </div>

              {/* DETAILS */}

              <div className="min-w-0">

                {profileLoading ? (
                  <>
                    <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />

                    <div className="h-3 w-28 bg-white/10 rounded mt-2 animate-pulse" />
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-sm truncate">
                      {admin?.name || "Admin"}
                    </h3>

                    <p className="text-xs text-gray-400 truncate mt-1">
                      {admin?.email || "admin@email.com"}
                    </p>
                  </>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="px-5">
          <div className="h-px bg-gray-700/70" />
        </div>

        {/* ====================================================
            NAVIGATION
        ==================================================== */}

        <nav
          className="
            flex-1
            overflow-y-auto
            px-4
            py-5
            space-y-1.5
          "
        >

          {/* SECTION LABEL */}

          <p
            className="
              px-3
              mb-3
              text-[10px]
              uppercase
              tracking-[0.18em]
              font-bold
              text-gray-500
            "
          >
            Main Menu
          </p>

          {/* MENU ITEMS */}

          {menu.map((item) => {

            const active = isActive(item.path);

            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`
                  relative
                  flex
                  items-center
                  w-full
                  gap-3
                  px-3
                  py-3
                  rounded-xl
                  text-sm
                  group
                  transition-all
                  duration-200

                  ${
                    active
                      ? "bg-[#B91C1C] text-white shadow-lg shadow-red-900/20"
                      : "text-gray-300 hover:bg-[#27272A] hover:text-white"
                  }
                `}
              >

                {/* ACTIVE LINE */}

                {active && (
                  <span
                    className="
                      absolute
                      left-0
                      top-2
                      bottom-2
                      w-1
                      rounded-r-full
                      bg-white
                    "
                  />
                )}

                {/* ICON */}

                <span
                  className={`
                    w-8
                    h-8
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-base
                    transition

                    ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-gray-400 group-hover:text-white group-hover:bg-white/5"
                    }
                  `}
                >
                  {item.icon}
                </span>

                {/* NAME */}

                <span className="flex-1 text-left font-medium">
                  {item.name}
                </span>

                {/* ARROW */}

                <FaChevronRight
                  className={`
                    text-[10px]
                    transition

                    ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

              </button>
            );
          })}

        </nav>

        {/* ====================================================
            SIDEBAR BOTTOM
        ==================================================== */}

        <div className="p-4">

          {/* ADMIN STATUS */}

          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-2.5
              mb-3
              rounded-lg
              bg-green-500/10
              border
              border-green-500/10
            "
          >

            <span className="w-2 h-2 bg-green-500 rounded-full" />

            <span className="text-xs text-green-400">
              Admin session active
            </span>

          </div>

          {/* LOGOUT */}

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              bg-[#B91C1C]
              hover:bg-[#991B1B]
              disabled:opacity-60
              disabled:cursor-not-allowed
              text-white
              text-sm
              font-semibold
              transition
            "
          >

            {loggingOut ? (
              <>
                <span
                  className="
                    w-4
                    h-4
                    border-2
                    border-white/30
                    border-t-white
                    rounded-full
                    animate-spin
                  "
                />

                Logging out...
              </>
            ) : (
              <>
                <FaSignOutAlt />
                Logout
              </>
            )}

          </button>

        </div>

      </aside>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          flex-1
          min-w-0
          h-screen
          overflow-y-auto
          pt-16
          lg:pt-0
        "
      >

        {/* ====================================================
            DESKTOP CONTENT HEADER
        ==================================================== */}

        <div
          className="
            hidden
            lg:flex
            h-16
            bg-white
            border-b
            border-gray-200
            items-center
            justify-between
            px-8
            sticky
            top-0
            z-30
          "
        >

          {/* BREADCRUMB */}

          <div>

            <p className="text-xs text-gray-400">
              Admin / Dashboard
            </p>

            <h2 className="text-sm font-semibold text-gray-800 mt-0.5">
              {currentMenu}
            </h2>

          </div>

          {/* RIGHT PROFILE */}

          <button
            type="button"
            onClick={() => navigate("/admin/profile")}
            className="
              flex
              items-center
              gap-3
              hover:bg-gray-50
              rounded-xl
              px-2
              py-1.5
              transition
            "
          >

            <img
              src={profileImage}
              alt="Admin"
              className="
                w-9
                h-9
                rounded-full
                object-cover
                border
                border-gray-200
              "
            />

            <div className="text-left">

              <p className="text-sm font-semibold text-gray-800">
                {admin?.name || "Admin"}
              </p>

              <p className="text-[11px] text-gray-400">
                Administrator
              </p>

            </div>

          </button>

        </div>

        {/* ====================================================
            OUTLET
        ==================================================== */}

        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
}


