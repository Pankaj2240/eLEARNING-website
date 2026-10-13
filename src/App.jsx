import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Feautres";
import About from "./components/About";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

const Home = () => (
  <>
    <ScrollReveal variant="fade-up">
      <Hero />
    </ScrollReveal>
    <ScrollReveal variant="fade-up" delay={200}>
      <Features />
    </ScrollReveal>
    <ScrollReveal variant="fade-left" delay={100}>
      <About />
    </ScrollReveal>
    <ScrollReveal variant="zoom-in" delay={100}>
      <Categories />
    </ScrollReveal>
    <ScrollReveal variant="fade-up" delay={100}>
      <Courses />
    </ScrollReveal>
    <ScrollReveal variant="fade-up" delay={100}>
      <Instructors />
    </ScrollReveal>
  </>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
