// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import CategoryBar from "../components/CategoryBar";

const categories = ["All", "National", "International", "Sports", "Technology"];

export default function Home() {
  const location = useLocation();

  // Extract category from query params
  const searchParams = new URLSearchParams(location.search);
  const queryCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(queryCategory || "All");
  const [loading, setLoading] = useState(true);

  // Update selectedCategory when query param changes
  useEffect(() => {
    setSelectedCategory(queryCategory || "All");
  }, [queryCategory]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((n) => n.category === selectedCategory);
  const trendingNews = filteredNews.filter((n) => n.isTrending);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8 mt-16">
      {/* ===== Category Bar ===== */}
      <CategoryBar selected={selectedCategory} onChange={setSelectedCategory} />

      {/* ===== Trending News ===== */}
      {trendingNews.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Trending News</h2>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {Array(trendingNews.length || 2)
                .fill(0)
                .map((_, i) => (
                  <SkeletonCard key={i} isTrendingCard />
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {trendingNews.map((news) => (
                <NewsCard key={news.id} news={news} isTrendingCard />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ===== Latest / Filtered News ===== */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory === "All" ? "Latest News" : selectedCategory}
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(filteredNews.length || 8)
              .fill(0)
              .map((_, i) => (
                <SkeletonCard key={i} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
