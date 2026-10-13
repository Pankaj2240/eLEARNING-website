const Categories = () => {
  const categoriesList = [
    { title: "Web Design", courses: "49 Courses", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-1", textSize: "text-lg", padding: "pr-8" },
    { title: "Online Marketing", courses: "49 Courses", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-2", textSize: "text-lg", padding: "pr-8" },
    { title: "Graphic Design", courses: "49 Courses", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", textSize: "text-base", padding: "pr-6" },
    { title: "Video Editing", courses: "49 Courses", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", textSize: "text-base", padding: "pr-6" },
  ];

  return (
    <div className="w-full bg-white py-16 px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">Courses Categories</h2>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[520px]">
          {categoriesList.map((item, index) => (
            <div key={index} className={`${item.span} relative overflow-hidden group cursor-pointer rounded-lg shadow-sm`}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-center" />
              <div className={`absolute bottom-0 right-0 bg-white/95 backdrop-blur-sm p-4 ${item.padding} text-left shadow-md rounded-tl-lg`}>
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