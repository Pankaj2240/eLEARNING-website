import { useState } from "react";
import { FaPlus, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [testimonialsList, setTestimonialsList] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      profession: "Web Developer",
      comment: "Yeh platform bohot hi behtareen hai! Bohot kuch sikhne ko mila aur projects build karne ka confidence aaya.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Verma",
      profession: "Frontend Engineer",
      comment: "The instructors explain complex concepts so easily. Highly recommended for anyone starting their coding journey!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
      rating: 5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    profession: "",
    comment: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleAddTestimonial = async (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.comment) return;

    const testimonialToAdd = {
      name: newTestimonial.name,
      profession: newTestimonial.profession || "Student",
      comment: newTestimonial.comment,
      image: newTestimonial.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop",
      rating: 5,
    };

    try {
      const response = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialToAdd),
      });
      const savedTestimonial = await response.json();

      setTestimonialsList([savedTestimonial, ...testimonialsList]);
      setNewTestimonial({ name: "", profession: "", comment: "", image: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="w-full bg-slate-50 py-16 px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mx-auto">Our Students Say!</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold px-5 py-2.5 flex items-center space-x-2 cursor-pointer text-sm rounded shadow-sm"
          >
            <FaPlus /> <span>{showForm ? "Close" : "Add Feedback"}</span>
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAddTestimonial} className="bg-white border p-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-sm rounded-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newTestimonial.name}
              onChange={handleInputChange}
              required
              className="bg-slate-50 border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession (e.g. Developer)"
              value={newTestimonial.profession}
              onChange={handleInputChange}
              className="bg-slate-50 border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL (Optional)"
              value={newTestimonial.image}
              onChange={handleInputChange}
              className="bg-slate-50 border rounded px-4 py-2 text-sm md:col-span-2 outline-none focus:border-cyan-500"
            />
            <textarea
              name="comment"
              placeholder="Write your feedback..."
              value={newTestimonial.comment}
              onChange={handleInputChange}
              required
              rows="3"
              className="bg-slate-50 border rounded px-4 py-2 text-sm col-span-2 outline-none focus:border-cyan-500"
            ></textarea>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold py-2 col-span-2 cursor-pointer rounded shadow-sm">
              Submit Feedback
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsList.map((item) => (
            <div key={item.id} className="bg-white border p-8 shadow-sm flex flex-col justify-between rounded-lg">
              <div>
                <FaQuoteLeft className="text-cyan-500 text-3xl mb-4" />
                <p className="text-gray-600 italic mb-6">"{item.comment}"</p>
              </div>
              <div className="flex items-center space-x-4 border-t pt-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover object-center shadow-sm" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{item.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
