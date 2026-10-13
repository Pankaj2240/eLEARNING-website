import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Instructors = () => {
  const socialLinks = [
    { href: "#facebook", icon: <FaFacebookF /> },
    { href: "#twitter", icon: <FaTwitter /> },
    { href: "#instagram", icon: <FaInstagram /> },
  ];

  const instructorList = [
    { name: "Instructor Name", role: "Designation", img: "https://themewagon.github.io/elearning/img/team-1.jpg" },
    { name: "Instructor Name", role: "Designation", img: "https://themewagon.github.io/elearning/img/team-2.jpg" },
    { name: "Instructor Name", role: "Designation", img: "https://themewagon.github.io/elearning/img/team-3.jpg" },
    { name: "Instructor Name", role: "Designation", img: "https://themewagon.github.io/elearning/img/team-4.jpg" },
  ];

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">Expert Instructors</h2>
        </div>

        <div className="flex justify-between space-x-6 w-full">
          {instructorList.map(({ name, role, img }, idx) => (
            <div key={idx} className="w-1/4 flex flex-col items-center bg-slate-50">
              <div className="relative w-full h-72 flex">
                <img src={img} alt={`Team ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex bg-white p-1.5 shadow-md z-10 space-x-1">
                  {socialLinks.map(({ href, icon }, sIdx) => (
                    <a key={sIdx} href={href} className="p-2 text-white bg-cyan-500 hover:bg-cyan-600 text-xs transition-colors">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-8 pb-6 text-center w-full">
                <h4 className="font-bold text-slate-900 text-lg">{name}</h4>
                <p className="text-gray-500 text-xs mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
