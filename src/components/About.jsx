import { Link, useLocation } from "react-router-dom";
import Features from "./Feautres";
import Testimonials from "./Testimonials";

const About = () => {
  const isAboutPage = useLocation().pathname === "/about";

  return (
    <>
      {isAboutPage && (
        <>
          <div
            className="relative w-full h-[320px] bg-cover bg-center flex items-center justify-center text-white select-none"
            style={{ backgroundImage: `url('https://themewagon.github.io/elearning/img/carousel-1.jpg')` }}
          >
            <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply"></div>
            <div className="relative z-10 text-center space-y-2">
              <h1 className="text-5xl font-extrabold tracking-tight">About</h1>
              <p className="text-sm font-medium text-gray-200">
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>Pages</span>
                <span className="mx-2">/</span>
                <span className="text-cyan-400">About</span>
              </p>
            </div>
          </div>
          <Features />
        </>
      )}

      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex items-stretch space-x-12">
          <div className="w-1/2 flex">
            <img src="https://themewagon.github.io/elearning/img/about.jpg" alt="About eLearning" className="w-full h-full object-cover shadow-sm object-left" />
          </div>

          <div className="w-1/2 flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-500 font-bold tracking-wider text-sm uppercase">About Us</span>
              <div className="flex space-x-0.5">
                <div className="w-8 h-[2px] bg-cyan-500"></div>
                <div className="w-3 h-[2px] bg-cyan-500"></div>
              </div>
            </div>

            <h2 className="text-4xl font-semibold text-slate-900">Welcome to eLEARNING</h2>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>

            <div className="pt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-3.5 transition-colors duration-200 cursor-pointer shadow-sm">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {isAboutPage && <Testimonials />}
    </>
  );
};

export default About;
