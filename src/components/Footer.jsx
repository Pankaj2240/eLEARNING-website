import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaChevronRight } from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["About Us", "Contact Us", "Privacy Policy", "Terms & Condition", "FAQs & Help"];

  const socialIcons = [
    { href: "#twitter", icon: <FaTwitter /> },
    { href: "#facebook", icon: <FaFacebookF /> },
    { href: "#youtube", icon: <FaYoutube /> },
    { href: "#linkedin", icon: <FaLinkedinIn /> },
  ];

  const galleryImages = [
    "https://themewagon.github.io/elearning/img/course-3.jpg",
    "https://themewagon.github.io/elearning/img/course-2.jpg",
    "https://themewagon.github.io/elearning/img/course-1.jpg",
    "https://themewagon.github.io/elearning/img/course-2.jpg",
    "https://themewagon.github.io/elearning/img/course-1.jpg",
    "https://themewagon.github.io/elearning/img/course-3.jpg",
  ];

  const footerBottomLinks = ["Home", "Cookies", "Help", "FAQs"];

  return (
    <footer className="w-full bg-[#181d38] text-gray-300 font-sans text-sm select-none">
      <div className="max-w-7xl mx-auto px-8 py-16 flex justify-between space-x-12">
        {/* Quick Links */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold tracking-wide mb-2">Quick Link</h3>
          <div className="flex flex-col space-y-2.5">
            {quickLinks.map((link, idx) => (
              <a key={idx} href="#" className="flex items-center space-x-2 text-white">
                <FaChevronRight className="text-[10px]" />
                <span className="text-white hover:translate-x-2 hover:scale-[1.2] transition-all duration-200">{link}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold tracking-wide mb-2">Contact</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-white mt-1 shrink-0" />
              <span>123 Street, New York, USA</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white shrink-0" />
              <span>+012 345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-white shrink-0" />
              <span>info@example.com</span>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            {socialIcons.map(({ href, icon }, idx) => (
              <a key={idx} href={href} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-white hover:bg-white hover:text-[#181d38] text-xs transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold mb-2">Gallery</h3>
          <div className="grid grid-cols-3 gap-1.5 w-48">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="w-16 h-11 bg-white border-2 border-white overflow-hidden flex">
                <img src={img} alt={`g${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold tracking-wide mb-2">Newsletter</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-light">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="flex w-full bg-white p-1 max-w-[260px]">
            <input type="email" placeholder="Your email" className="w-full bg-white px-3 py-2 text-gray-800 placeholder-gray-400 outline-none text-sm" />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs px-4 flex items-center justify-center shrink-0 cursor-pointer transition-colors">SignUp</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-700/50 py-6 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <span>
              ©{" "}
              <a href="#sitename" className="text-white hover:underline border-b border-gray-500 pb-0.5">
                Your Site Name
              </a>
              , All Right Reserved. Designed By{" "}
              <a href="#codex" className="text-white hover:underline border-b border-gray-500 pb-0.5">
                HTML Codex
              </a>
            </span>
            <span className="pt-1 text-white">
              Distributed By{" "}
              <a href="#wagon" className="text-white text-[20px] hover:underline">
                ThemeWagon
              </a>
            </span>
          </div>

          <div className="flex space-x-6 text-white">
            {footerBottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className={`hover:opacity-50 text-[15px] transition-colors ${idx !== footerBottomLinks.length - 1 ? "border-r border-gray-700/80 pr-6" : ""}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
