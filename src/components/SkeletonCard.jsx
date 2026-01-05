// src/components/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard({ isTrendingCard = false }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-lg overflow-hidden
        ${isTrendingCard ? "h-72 lg:h-80" : "h-48"}`
      }
    ></div>
  );
}
