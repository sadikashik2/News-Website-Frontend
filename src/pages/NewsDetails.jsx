// src/pages/NewsDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "../data/newsData";

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = newsData.find((n) => n.id === Number(id));

  if (!news) {
    return <div className="p-8 text-center text-gray-500">News not found</div>;
  }

  return (
    <article className="w-full px-4 py-8">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Back to news
      </button>

      {/* Title */}
      <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        {news.title}
      </h1>

      {/* Meta */}
      <div className="max-w-4xl mx-auto mt-3 flex items-center gap-3 text-sm text-gray-500">
        <span className="font-medium text-blue-600">{news.category}</span>
        <span>•</span>
        <span>{news.date}</span>
      </div>

      {/* Image */}
      <div className="max-w-5xl mx-auto mt-6">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-90 md:h-105 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {news.content.split("\n").map((para, index) => (
          <p
            key={index}
            className="text-lg md:text-xl leading-relaxed text-gray-800"
          >
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
