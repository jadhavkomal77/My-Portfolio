import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";


const Home = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section id="home" className="w-full scroll-mt-[112px]">
        <Hero />
      </section>
      <section id="about" className="w-full scroll-mt-[112px]">
        <About />
      </section>
      <section id="skills" className="w-full scroll-mt-[112px]">
        <Skills />
      </section>
      <section id="projects" className="w-full scroll-mt-[112px]">
        <Projects />
      </section>
      <section id="contact" className="w-full scroll-mt-[112px]">
        <Contact />
      </section>
      {/* <section id="footer" className="w-full scroll-mt-[112px]">
        <Footer />
      </section> */}
      

   

    </div>
  );
};

export default Home;