import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaClock, FaPlus } from "react-icons/fa";
import Categories from "./Categories";

const Courses = () => {
  const isCoursesPage = useLocation().pathname === "/courses";

  const [coursesList, setCoursesList] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      price: "$149.00",
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30 Students",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      price: "$249.00",
      title: "Data Science & Machine Learning",
      instructor: "Code With Harry",
      duration: "2.15 Hrs",
      students: "45 Students",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
      price: "$199.00",
      title: "Advanced C++ & Algorithms Mastery",
      instructor: "Striver",
      duration: "3.00 Hrs",
      students: "60 Students",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: "", price: "", instructor: "", duration: "", students: "", image: "" });

  const handleInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.price) return;

    const courseToAdd = {
      image: newCourse.image || "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      price: newCourse.price.startsWith("$") ? newCourse.price : `$${newCourse.price}`,
      title: newCourse.title,
      instructor: newCourse.instructor || "John Doe",
      duration: newCourse.duration || "2.0 Hrs",
      students: newCourse.students || "20 Students",
      reviews: "10",
    };

    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseToAdd),
      });
      const savedCourse = await response.json();

      setCoursesList([savedCourse, ...coursesList]);
      setNewCourse({ title: "", price: "", instructor: "", duration: "", students: "", image: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      {isCoursesPage && (
        <div
          className="relative w-full h-[320px] bg-cover bg-center flex items-center justify-center text-white select-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply"></div>
          <div className="relative z-10 text-center space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight">Courses</h1>
            <p className="text-sm font-medium text-gray-200">
              <Link to="/">Home</Link> / <span>Courses</span>
            </p>
          </div>
        </div>
      )}
      {isCoursesPage && <Categories />}

      <div className="w-full bg-white py-16 px-8 select-none">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mx-auto">Popular Courses</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold px-5 py-2.5 flex items-center space-x-2 cursor-pointer text-sm rounded shadow-sm"
            >
              <FaPlus /> <span>{showForm ? "Close" : "Add Course"}</span>
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleAddCourse} className="bg-slate-50 border p-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-sm">
              <input
                type="text"
                name="title"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={handleInputChange}
                required
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                name="price"
                placeholder="Price ($149.00)"
                value={newCourse.price}
                onChange={handleInputChange}
                required
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                name="instructor"
                placeholder="Instructor"
                value={newCourse.instructor}
                onChange={handleInputChange}
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={newCourse.duration}
                onChange={handleInputChange}
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                name="students"
                placeholder="Students"
                value={newCourse.students}
                onChange={handleInputChange}
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newCourse.image}
                onChange={handleInputChange}
                className="bg-white border rounded px-4 py-2 text-sm outline-none focus:border-cyan-500"
              />
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold py-2 col-span-2 cursor-pointer rounded shadow-sm">
                Submit Course
              </button>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesList.map((course) => (
              <div key={course.id} className="bg-slate-50 border shadow-sm flex flex-col rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black text-cyan-600">{course.price}</h3>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">{course.title}</h4>
                </div>
                <div className="flex divide-x text-xs text-gray-500 bg-white border-t">
                  <div className="w-1/3 py-3 text-center truncate px-1">
                    <FaUser className="inline text-cyan-500 mr-1" />
                    {course.instructor}
                  </div>
                  <div className="w-1/3 py-3 text-center truncate px-1">
                    <FaClock className="inline text-cyan-500 mr-1" />
                    {course.duration}
                  </div>
                  <div className="w-1/3 py-3 text-center truncate px-1">
                    <FaUser className="inline text-cyan-500 mr-1" />
                    {course.students}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
