import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "COURSES", href: "/courses" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm select-none">
      <div className="w-full flex items-center justify-between h-20 pl-8">
        <div className="flex items-center space-x-3 cursor-pointer">
          <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 2H6c-1.206 0-2 .794-2 2v16c0 1.206.794 2 2 2h13c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1zm-1 18H6c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h12v16z" />
            <path d="M8 7h6v2H8zm0 4h8v2H8z" />
          </svg>
          <span className="text-2xl font-bold tracking-wide text-cyan-500">eLEARNING</span>
        </div>

        <div className="flex items-center space-x-8 h-full">
          <div className="flex items-center space-x-6 text-sm font-semibold tracking-wider">
            {navLinks.map(({ name, href }) => {
              const isActive = location.pathname === href;
              return (
                <Link key={name} to={href} className={`flex items-center transition-colors duration-200 ${isActive ? "text-cyan-500" : "text-gray-800 hover:text-cyan-500"}`}>
                  <span>{name}</span>
                </Link>
              );
            })}
          </div>

          <button className="h-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-10 flex items-center space-x-2 transition-all duration-200 cursor-pointer">
            <span>Join Now</span>
            <svg className="w-4 h-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
