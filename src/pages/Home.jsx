import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import CategoryBar from "../components/CategoryBar";

const categories = ["All", "National", "International", "Sports", "Technology"];

//Utility function to shuffle an array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Home page component
 * Displays categories, trending news, and latest news
 */
export default function Home() {
  const location = useLocation();

  // Extract category from query parameters
  const searchParams = new URLSearchParams(location.search);
  const queryCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(queryCategory || "All");
  const [loading, setLoading] = useState(true);

  // Update selected category when query parameter changes
  useEffect(() => {
    setSelectedCategory(queryCategory || "All");
  }, [queryCategory]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((n) => n.category === selectedCategory);

  // Separate trending and latest news
  const trendingNews = shuffleArray(filteredNews.filter((n) => n.isTrending));
  const latestNews = shuffleArray(filteredNews.filter((n) => !n.isTrending));

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8">
      {/* Category bar */}
      <CategoryBar selected={selectedCategory} onChange={setSelectedCategory} />

      {/* Trending News Section */}
      {trendingNews.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Trending News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {loading
              ? Array(trendingNews.length || 2)
                  .fill(0)
                  .map((_, i) => <SkeletonCard key={i} isTrendingCard />)
              : trendingNews.map((news) => <NewsCard key={news.id} news={news} isTrendingCard />)}
          </div>
        </div>
      )}

      {/* Latest / Filtered News Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory === "All" ? "Latest News" : selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array(latestNews.length || 8)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : latestNews.map((news) => <NewsCard key={news.id} news={news} />)}
        </div>
      </div>
    </div>
  );
}
