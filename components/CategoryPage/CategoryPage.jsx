import React from 'react';

const CategoryPage = () => {
  return (
    <div>
    <div className="min-h-screen bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500 uppercase">HOME &gt; ENTERTAINMENT</div>

      {/* Article Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Why did Cartier refuse Diljit Dosanjh the Patiala necklace for Met Gala?
          </h1>

          <div className="flex items-center gap-3 mt-4 text-sm">
            <span className="font-semibold">Admin User</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">ADMIN</span>
          </div>

          <p className="text-xs text-gray-500 mt-1">May 8, 2025, 9:44 AM</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <img
              src="/mnt/data/screencapture-businessmailusa-vercel-app-entertainment-2025-11-24-23_58_42.png"
              alt="article"
              className="w-full h-80 object-cover rounded"
            />
            <img
              src="/mnt/data/screencapture-businessmailusa-vercel-app-entertainment-2025-11-24-23_58_42.png"
              alt="article"
              className="w-full h-80 object-cover rounded"
            /> */}
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm">
            Indian actor-singer Diljit Dosanjh turned heads on Tuesday with a bold and culturally rich debut at the Met Gala,
            fashions most iconic night. Dressed in an ivory sherwani embroidered with the map of Punjab and Gurmukhi script,
            he brought global attention to his heritage — marrying traditional pride with modern glam...
          </p>

          <button className="mt-4 bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700">Read More</button>
        </div>
      </section>

      {/* Related Stories */}
      <section className="container mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <article key={i} className="flex gap-3 items-start border rounded p-3">
            <div className="w-24 h-16 bg-gray-200 rounded"></div>
            <p className="text-sm font-medium leading-tight">
              Sample related story title {i} goes here in two lines.
            </p>
          </article>
        ))}
      </section>

      {/* Popular + Recent */}
      <section className="container mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Most Popular */}
        <div>
          <h2 className="text-lg font-semibold text-red-600 mb-4">MOST POPULAR</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex gap-3 items-start">
                <span className="text-red-600 font-bold text-xl">{n}.</span>
                <p className="text-sm leading-tight">Popular item headline {n} — two-line preview here...</p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Recent */}
        <div>
          <h2 className="text-lg font-semibold text-red-600 mb-4">MOST RECENT</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex gap-3 items-start">
                <span className="text-red-600 font-bold text-xl">{n}.</span>
                <p className="text-sm leading-tight">Recent item headline {n} — short preview text...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    </div>
  );
};

export default CategoryPage;