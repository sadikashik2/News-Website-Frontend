import { Link } from "react-router-dom";

export default function NewsCard({ news, isTrendingCard = false }) {
  return (
    <Link
      to={`/news/${news.id}`}
      className={`group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300 flex flex-col ${
        isTrendingCard ? "lg:flex-row lg:max-h-48" : "flex-col"
      }`}
    >
      {/* ===== Image Section ===== */}
      {isTrendingCard ? (
        <div className="relative overflow-hidden w-full h-24 sm:h-28 md:h-32 lg:w-2/5 lg:h-full">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-1 left-1 bg-red-500 text-white text-[9px] sm:text-[10px] md:text-[11px] font-semibold px-1.5 py-0.5 rounded shadow-md z-10">
            TRENDING
          </span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-col gap-2 p-2">
          <div className="flex flex-row sm:flex-col gap-2">
            {/* Thumbnail */}
            <div className="w-1/2 sm:w-full h-20 md:h-24 shrink-0 overflow-hidden rounded-lg">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-1 mb-1">
                <span className="text-[8px] md:text-[9px] bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">
                  {news.category}
                </span>
                <span className="text-[8px] md:text-[9px] bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full">
                  {news.date}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 leading-snug mb-1 underline decoration-blue-600 underline-offset-2 group-hover:text-blue-600 transition-colors text-[10px] sm:text-[12px] md:text-[14px] lg:text-base">
                {news.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm line-clamp-2">
                {news.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===== Trending Card Content ===== */}
      {isTrendingCard && (
        <div className="p-1.5 md:p-2 flex flex-col justify-between lg:w-3/5">
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">
              {news.category}
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full">
              {news.date}
            </span>
          </div>

          <h3 className="font-semibold text-gray-900 leading-snug mb-1 underline decoration-blue-600 underline-offset-2 group-hover:text-blue-600 transition-colors text-[12px] sm:text-[12px] md:text-[14px] lg:text-lg">
            {news.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-[10px] sm:text-[10px] md:text-[11px] lg:text-sm line-clamp-none lg:line-clamp-2">
            {news.description}
          </p>
        </div>
      )}
    </Link>
  );
}
