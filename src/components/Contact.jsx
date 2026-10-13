import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message saved successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage("Failed to save message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatusMessage("Server error.");
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-cyan-500 text-xl" />, text: "123 Cyber Hub, Gurugram, India" },
    { icon: <FaPhoneAlt className="text-cyan-500 text-xl" />, text: "+91 98765 43210" },
    { icon: <FaEnvelope className="text-cyan-500 text-xl" />, text: "support@elearning.com" },
  ];

  return (
    <div className="w-full bg-white select-none">
      <div
        className="relative w-full h-[320px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply"></div>
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight">Contact</h1>
          <p className="text-sm font-medium text-gray-200">
            <Link to="/">Home</Link> / <span>Contact</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Get In Touch</h3>
          <p className="text-gray-500 text-sm">Your queries will be saved securely to the backend.</p>

          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-slate-50 p-4 border-l-4 border-cyan-500 shadow-sm">
              {item.icon}
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="bg-slate-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-cyan-500" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="bg-slate-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-cyan-500" />
          </div>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required className="w-full bg-slate-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-cyan-500" />
          <textarea name="message" rows="4" placeholder="Message" value={formData.message} onChange={handleInputChange} required className="w-full bg-slate-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-cyan-500"></textarea>
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold py-3 cursor-pointer rounded shadow-sm">
            Send Message
          </button>
          {statusMessage && <p className="text-center text-sm font-medium text-cyan-600">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;