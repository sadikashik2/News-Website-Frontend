const categories = ["All", "National", "International", "Sports", "Technology"];

export default function CategoryBar({ selected, onChange }) {
  return (
    <div className="border-b relative h-10 md:h-12">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-r from-white"></div>
      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-l from-white"></div>

      <div className="max-w-7xl mx-auto px-4 h-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 h-full min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`h-full flex items-center px-3 text-sm md:text-base font-medium border-b-2 transition
                ${
                  selected === cat
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600 hover:cursor-pointer"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
