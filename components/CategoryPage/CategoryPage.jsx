import { bdTime, formatLocalTimes } from "@/lib/formateTime";
import Image from "next/image";
import Link from "next/link";
import MostRecentPost from "../Home/GetPosts/MostRecentPost";

const CategoryPage = ({post, recentPost}) => {
  const firstPost = post[0];
  const relatedPosts = post.slice(1);
  console.log("firstPost", firstPost);
  console.log("relatedPosts", relatedPosts);

  return (
    <div>
    <div className="min-h-screen bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500 uppercase">HOME &gt; {firstPost.cname}</div>

      {/* Article Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white border rounded-lg p-6 shadow-sm grid grid-cols-2 gap-5">
          <div>
               <Link href={`/slug/${firstPost.slug}`} className="text-2xl md:text-3xl font-semibold leading-snug hover:underline">
                  {firstPost.title}
                </Link >

                <div className="flex items-center gap-3 mt-4 text-sm">
                  <span className="font-semibold">Admin User</span>
                  <Link href={`/slug/${firstPost.slug}`} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs"> {firstPost.authorName}</Link>
                </div>

                <p className="text-xs text-gray-500 mt-1">{bdTime(firstPost.updatedAt)}</p>

                          <p className="mt-4 text-gray-700 leading-relaxed text-sm">
            {firstPost.content}
          </p>

          <Link href={`/slug/${firstPost.slug}`} className="mt-4 inline-block bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700">Read More</Link>
          </div>
         
          <div className="mt-4">
            <Link href={`/slug/${firstPost.slug}`}>
                <Image
                  src={firstPost?.featuredImage}
                  alt="Category"
                  width={1500}       
                  height={1000}       
                  className="w-full h-90 object-cover rounded-none"
                />
            </Link>
          </div>


        </div>
      </section>

      {/* Related Stories */}
      <section className="container mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((i) => (
          <article key={i._id} className="flex gap-3 items-start border rounded p-3">
            <div className="w-24 h-16 bg-gray-200 rounded">
               <Link href={`/slug/${firstPost.slug}`}>
                <Image
                  src={firstPost?.featuredImage}
                  alt="Category"
                  width={1000}       
                  height={40}       
                  className="w-full h-16 object-cover rounded"
                />
            </Link>
            </div>
            <Link href={`/slug/${i.slug}`} className="text-sm font-medium leading-tight hover:underline">
              {i.title}
            </Link>
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
            <MostRecentPost recentPost={recentPost} /> 
          </div>
        </div>
      </section>
    </div>

    </div>
  );
};

export default CategoryPage;