
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------- NON-LAZY CORE ---------- */
import ScrollToTop from "./layout/ScrollToTop";
import ErrorBoundary from "./layout/ErrorBoundary";
import AdminProtected from "./shere/AdminProtected";
import Hero from "./pages/Hero";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";



/* ---------- FAST LOADER ---------- */
const PageLoader = () => (
<div className="min-h-screen flex items-center justify-center bg-white">
<div className="w-12 h-12 rounded-full border-4 border-red-700 border-t-transparent animate-spin"/>
</div>
);

/* ---------- PUBLIC LAYOUT ---------- */
const PublicLayout = lazy(()=>import("./layout/PublicLayout"));
const Home = lazy(()=>import("./layout/Home"));
const NotFound = lazy(()=>import("./layout/NotFound"));

/* ---------- ADMIN ---------- */
const AdminLogin = lazy(()=>import("./Auth/AdminLogin"));
const AdminRegister = lazy(()=>import("./Auth/AdminRegister"));
const AdminDashboard = lazy(()=>import("./Auth/AdminDashboard"));
const AdminHome = lazy(()=>import("./Auth/AdminHome"));
const AdminProfile = lazy(()=>import("./Auth/AdminProfile"));

function App(){
return(
<BrowserRouter>
<ToastContainer/>
<ScrollToTop/>
<ErrorBoundary>

<Suspense fallback={<PageLoader/>}>
<Routes>

<Route element={<PublicLayout/>}>

<Route index element={<Home/>}/>
<Route path="home" element={<Hero/>}/>
<Route path="about" element={<About/>}/>
<Route path="/aboutdetails" element={<AboutDetails/>}/>
<Route path="/projects" element={<Projects />} />
<Route path="/projectsdetails" element={<ProjectDetails />} />
<Route path="/skills" element={<Skills />} />
<Route path="/contact" element={<Contact />} />
<Route path="/footer" element={<Footer />} />

<Route path="*" element={<NotFound/>}/>
</Route>

{/* admin */}
<Route path="/adminlogin" element={<AdminLogin/>}/>
<Route path="/adminregister" element={<AdminRegister/>}/>

<Route
path="/admin"
element={
<AdminProtected>
<AdminDashboard/>
</AdminProtected>
}
>
<Route index element={<AdminHome/>}/>
<Route path="profile" element={<AdminProfile/>}/>


<Route path="*" element={<NotFound/>}/>
</Route>

<Route path="*" element={<NotFound/>}/>

</Routes>
</Suspense>

</ErrorBoundary>
</BrowserRouter>
)
}

export default App;