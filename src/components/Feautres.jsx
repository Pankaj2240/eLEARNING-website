import { FaGraduationCap, FaHome, FaBookOpen } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Features = () => {
  const featureList = [
    { title: "Skilled Instructors", desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", icon: <FaGraduationCap /> },
    { title: "Online Classes", desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", icon: <TbWorld /> },
    { title: "Home Projects", desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", icon: <FaHome /> },
    { title: "Book Library", desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", icon: <FaBookOpen /> },
  ];

  return (
    <div className="w-full bg-slate-50 py-16 px-8 select-none">
      <div className="max-w-7xl mx-auto flex space-x-6">
        {featureList.map(({ title, desc, icon }, index) => (
          <div
            key={index}
            className="group w-1/4 bg-white p-8 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <div className="text-5xl text-cyan-500 mb-6 flex items-center justify-center transition-colors duration-300 group-hover:text-white">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-cyan-100">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
