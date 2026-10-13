const Categories = () => {
  const categoriesList = [
    { title: "Web Design", courses: "49 Courses", img: "https://themewagon.github.io/elearning/img/cat-1.jpg", span: "col-span-2 row-span-1", textSize: "text-lg", padding: "pr-8" },
    { title: "Online Marketing", courses: "49 Courses", img: "https://themewagon.github.io/elearning/img/cat-4.jpg", span: "col-span-2 row-span-2", textSize: "text-lg", padding: "pr-8" },
    { title: "Graphic Design", courses: "49 Courses", img: "https://themewagon.github.io/elearning/img/cat-2.jpg", span: "col-span-1 row-span-1", textSize: "text-base", padding: "pr-6" },
    { title: "Video Editing", courses: "49 Courses", img: "https://themewagon.github.io/elearning/img/cat-3.jpg", span: "col-span-1 row-span-1", textSize: "text-base", padding: "pr-6" },
  ];

  return (
    <div className="w-full bg-white py-16 px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">Courses Categories</h2>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[520px]">
          {categoriesList.map((item, index) => (
            <div key={index} className={`${item.span} relative overflow-hidden group cursor-pointer`}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className={`absolute bottom-0 right-0 bg-white p-4 ${item.padding} text-left shadow-md`}>
                <h4 className={`font-bold text-slate-900 ${item.textSize}`}>{item.title}</h4>
                <p className="text-cyan-500 text-xs font-semibold mt-0.5">{item.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
