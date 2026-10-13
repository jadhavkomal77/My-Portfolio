import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PublicMainNavbar from "../pages/PublicMainNavbar";
import Footer from "../pages/Footer";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let attempts = 0;

    const scroll = () => {
      const el = document.querySelector(hash);

      if (el) {
        const navbarHeight = 82;

        const elementPosition =
          el.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });

        return;
      }

      if (attempts < 20) {
        attempts++;
        setTimeout(scroll, 100);
      }
    };

    scroll();
  }, [hash]);

  return null;
}

export default function PublicLayout() {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#090909]
      "
    >
      {/* ================= NAVBAR ================= */}
      <PublicMainNavbar />

      {/* ================= HASH SCROLL ================= */}
      <ScrollToHash />
      {/* ================= PAGE CONTENT ================= */}
      <main className="w-full pt-[82px]">
        <Outlet />
      </main>
  <Footer />
    </div>
  );
}