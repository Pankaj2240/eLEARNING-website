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
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=300&auto=format&fit=crop",
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
              <a key={idx} href="#" className="flex items-center space-x-2 text-white group">
                <FaChevronRight className="text-[10px] text-cyan-400" />
                <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">{link}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold tracking-wide mb-2">Contact</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-cyan-400 mt-1 shrink-0" />
              <span>123 Cyber Hub, Gurugram, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-cyan-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-cyan-400 shrink-0" />
              <span>support@elearning.com</span>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            {socialIcons.map(({ href, icon }, idx) => (
              <a key={idx} href={href} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-cyan-500 hover:border-cyan-500 text-xs transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold mb-2">Gallery</h3>
          <div className="grid grid-cols-3 gap-2 w-52">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="w-16 h-14 bg-white border border-gray-700 overflow-hidden flex rounded">
                <img src={img} alt={`g${idx + 1}`} className="w-full h-full object-cover object-center" />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="text-white text-xl font-bold tracking-wide mb-2">Newsletter</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-light">Subscribe to get latest updates on new courses and programming tutorials.</p>
          <div className="flex w-full bg-white p-1 rounded max-w-[260px]">
            <input type="email" placeholder="Your email" className="w-full bg-white px-3 py-2 text-gray-800 placeholder-gray-400 outline-none text-sm" />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs px-4 rounded flex items-center justify-center shrink-0 cursor-pointer transition-colors">SignUp</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-700/50 py-6 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <span>
              ©{" "}
              <a href="#sitename" className="text-white hover:underline">
                eLEARNING
              </a>
              , All Right Reserved. Developed with ❤️
            </span>
          </div>

          <div className="flex space-x-6 text-white">
            {footerBottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className={`hover:text-cyan-400 text-xs transition-colors ${idx !== footerBottomLinks.length - 1 ? "border-r border-gray-700 pr-6" : ""}`}
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