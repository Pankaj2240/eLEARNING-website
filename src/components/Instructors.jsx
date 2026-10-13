import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Instructors = () => {
  const socialLinks = [
    { href: "#facebook", icon: <FaFacebookF /> },
    { href: "#twitter", icon: <FaTwitter /> },
    { href: "#instagram", icon: <FaInstagram /> },
  ];

  const instructorList = [
    { name: "Alex Turner", role: "Full Stack Expert", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" },
    { name: "Sarah Jenkins", role: "UI/UX Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
    { name: "Michael Chang", role: "Data Scientist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
    { name: "Emily Watson", role: "C++ & DSA Mentor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">Expert Instructors</h2>
        </div>

        <div className="flex justify-between space-x-6 w-full">
          {instructorList.map(({ name, role, img }, idx) => (
            <div key={idx} className="w-1/4 flex flex-col items-center bg-slate-50 rounded-lg overflow-hidden border shadow-sm">
              <div className="relative w-full h-72 flex overflow-visible">
                <img src={img} alt={name} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
                {/* Fixed social icons position so they sit cleanly overlapping the bottom edge of the image */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex bg-white px-3 py-1.5 shadow-md z-10 space-x-2 rounded-full border border-gray-100">
                  {socialLinks.map(({ href, icon }, sIdx) => (
                    <a key={sIdx} href={href} className="p-1.5 text-white bg-cyan-500 hover:bg-cyan-600 text-xs transition-colors rounded-full">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-6 pb-6 text-center w-full">
                <h4 className="font-bold text-slate-900 text-lg">{name}</h4>
                <p className="text-gray-500 text-xs mt-1 font-medium">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
