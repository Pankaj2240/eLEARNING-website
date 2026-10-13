import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaClock, FaPlus } from "react-icons/fa";
import Categories from "./Categories";

const Courses = () => {
  const isCoursesPage = useLocation().pathname === "/courses";

  const [coursesList, setCoursesList] = useState([
    {
      id: 1,
      image: "https://themewagon.github.io/elearning/img/course-1.jpg",
      price: "$149.00",
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30 Students",
    },
    {
      id: 2,
      image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
      price: "$249.00",
      title: "Data Science",
      instructor: "Code With Harry",
      duration: "1.49 Hrs",
      students: "30 Students",
    },
    {
      id: 3,
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
      price: "$199.00",
      title: "C++ Programming Course",
      instructor: "Striver",
      duration: "1.49 Hrs",
      students: "30 Students",
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
      image: newCourse.image || "https://themewagon.github.io/elearning/img/course-1.jpg",
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
          style={{ backgroundImage: `url('https://themewagon.github.io/elearning/img/carousel-1.jpg')` }}
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
            <button onClick={() => setShowForm(!showForm)} className="bg-cyan-500 text-white font-bold px-5 py-2.5 flex items-center space-x-2 cursor-pointer text-sm">
              <FaPlus /> <span>{showForm ? "Close" : "Add Course"}</span>
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleAddCourse} className="bg-slate-50 border p-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="title" placeholder="Course Title" value={newCourse.title} onChange={handleInputChange} required className="bg-white border px-4 py-2 text-sm" />
              <input type="text" name="price" placeholder="Price ($149.00)" value={newCourse.price} onChange={handleInputChange} required className="bg-white border px-4 py-2 text-sm" />
              <input type="text" name="instructor" placeholder="Instructor" value={newCourse.instructor} onChange={handleInputChange} className="bg-white border px-4 py-2 text-sm" />
              <input type="text" name="duration" placeholder="Duration" value={newCourse.duration} onChange={handleInputChange} className="bg-white border px-4 py-2 text-sm" />
              <input type="text" name="students" placeholder="Students" value={newCourse.students} onChange={handleInputChange} className="bg-white border px-4 py-2 text-sm" />
              <input type="text" name="image" placeholder="Image URL" value={newCourse.image} onChange={handleInputChange} className="bg-white border px-4 py-2 text-sm" />
              <button type="submit" className="bg-cyan-500 text-white font-bold py-2 col-span-2 cursor-pointer">
                Submit Course
              </button>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesList.map((course) => (
              <div key={course.id} className="bg-slate-50 border shadow-sm flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src={course.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black text-slate-900">{course.price}</h3>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">{course.title}</h4>
                </div>
                <div className="flex divide-x text-xs text-gray-500 bg-white">
                  <div className="w-1/3 py-3 text-center">
                    <FaUser className="inline text-cyan-500 mr-1" />
                    {course.instructor}
                  </div>
                  <div className="w-1/3 py-3 text-center">
                    <FaClock className="inline text-cyan-500 mr-1" />
                    {course.duration}
                  </div>
                  <div className="w-1/3 py-3 text-center">
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
