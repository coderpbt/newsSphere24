import React from "react";

const Loading = () => {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-11/12 mb-4 animate-pulse"></div>
      <div className="h-64 bg-gray-200 rounded mt-8 animate-pulse"></div>
      <div className="space-y-6 mt-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        ))}
      </div>
    </article>
  );
};

export default Loading;
