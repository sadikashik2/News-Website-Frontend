/**
 * Displays a horizontal scrollable list of categories.
 * Highlights the selected category.
 */
const categories = ["All", "National", "International", "Sports", "Technology"];
export default function CategoryBar({ selected, onChange }) {
  return (
    <div className="border-b h-10 md:h-12">
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
