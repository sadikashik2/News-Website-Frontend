import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import newsData from "../data/newsData";
import SkeletonCard from "../components/SkeletonCard";

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  // Fetch news based on ID, simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      const newsItem = newsData.find((n) => n.id === Number(id));
      setNews(newsItem);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  // Show skeletons while loading
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6">
        <SkeletonCard isTrendingCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  // Show message if news not found
  if (!news) {
    return (
      <div className="p-8 text-center text-gray-500 text-lg font-medium">
        News not found
      </div>
    );
  }

  // Related news: same category, exclude current news, max 4 items
  const relatedNews = newsData
    .filter((n) => n.category === news.category && n.id !== news.id)
    .slice(0, 4);

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 lg:py-12">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 hover:underline text-sm sm:text-base font-medium mb-5 cursor-pointer"
      >
        ← Back to news
      </button>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Main news content */}
        <div className="lg:flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            {news.title}
          </h1>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">
              {news.category}
            </span>
            <span>•</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
              {news.date}
            </span>
          </div>

          <div className="rounded-lg overflow-hidden shadow mb-6">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
          </div>

          <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-4">
            {news.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Related news */}
        {relatedNews.length > 0 && (
          <aside className="lg:w-64 shrink-0 lg:border-l lg:border-gray-200 lg:pl-6 lg:pt-0 pt-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
              Related News
            </h2>

            <div className="flex flex-col gap-2">
              {relatedNews.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  key={item.id}
                  className="group flex gap-2 items-start hover:bg-gray-50 transition-all p-1 rounded"
                >
                  <div className="w-16 h-12 shrink-0 overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 underline decoration-blue-600 underline-offset-1">
                      {item.title}
                    </h3>
                    <span className="text-[9px] sm:text-xs text-gray-500">
                      {item.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
