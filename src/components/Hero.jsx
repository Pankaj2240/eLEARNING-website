import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Hero = () => {
  const slides = [
    {
      image: "https://themewagon.github.io/elearning/img/carousel-1.jpg",
      tagline: "BEST ONLINE COURSES",
      heading: "Get Educated Online From Your Home",
      description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.",
    },
    {
      image: "https://themewagon.github.io/elearning/img/carousel-2.jpg",
      tagline: "ELEVATE YOUR KNOWLEDGE",
      heading: "Shape Your Future with Expert Tutors",
      description: "Sea sanctus eirmod elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Automatic slide functionality every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const { image, tagline, heading, description } = slides[currentIndex];

  return (
    <div className="relative w-full h-[600px] bg-cover bg-center transition-all duration-700 ease-in-out select-none" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply"></div>

      <div className="relative w-full max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="max-w-2xl text-white space-y-6">
          <h5 className="text-cyan-400 font-bold tracking-wider text-sm uppercase">{tagline}</h5>
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">{heading}</h1>
          <p className="text-gray-300 text-base leading-relaxed font-light">{description}</p>

          <div className="flex items-center space-x-4 pt-2">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3.5 transition-colors duration-200 cursor-pointer">Read More</button>
            <button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-3.5 transition-colors duration-200 cursor-pointer">Join Now</button>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <button onClick={nextSlide} className="border border-white/40 hover:bg-cyan-500 hover:border-cyan-500 text-white p-3 transition-all duration-200 cursor-pointer" aria-label="Next slide">
            <MdKeyboardArrowRight />
          </button>
          <button onClick={prevSlide} className="border border-white/40 hover:bg-cyan-500 hover:border-cyan-500 text-white p-3 transition-all duration-200 cursor-pointer" aria-label="Previous slide">
            <MdKeyboardArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
