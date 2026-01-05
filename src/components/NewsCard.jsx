// src/components/NewsCard.jsx
import { Link } from "react-router-dom";

export default function NewsCard({ news, isTrendingCard = false }) {
  return (
    <Link
      to={`/news/${news.id}`}
      className={`group bg-white rounded-xl overflow-hidden border 
        hover:shadow-lg transition-shadow duration-300
        ${isTrendingCard ? "lg:flex" : "flex flex-col"}
      `}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden
          ${isTrendingCard ? "lg:w-2/5 h-56 lg:h-auto" : "h-48"}
        `}
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {isTrendingCard && (
          <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full tracking-wide">
            TRENDING
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className={`p-4 flex flex-col justify-between
          ${isTrendingCard ? "lg:w-3/5" : ""}
        `}
      >
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
          <span className="font-medium text-blue-600">
            {news.category}
          </span>
          <span>•</span>
          <span>{news.date}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-gray-900 leading-snug mb-2
            ${
              isTrendingCard
                ? "text-xl lg:text-2xl"
                : "text-lg"
            }
            group-hover:text-blue-600 transition-colors
          `}
        >
          {news.title}
        </h3>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed
            ${isTrendingCard ? "text-base line-clamp-3" : "text-sm line-clamp-2"}
          `}
        >
          {news.description}
        </p>
      </div>
    </Link>
  );
}
