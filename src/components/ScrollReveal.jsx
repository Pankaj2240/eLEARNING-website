import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, variant = "fade-up", delay = 0 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const variants = {
    "fade-up": isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
    "fade-down": isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16",
    "fade-left": isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
    "fade-right": isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
    "zoom-in": isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 ease-out will-change-transform ${variants[variant] || variants["fade-up"]}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
