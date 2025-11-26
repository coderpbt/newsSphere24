import Image from "next/image";
import Link from "next/link";

const MostRecentPost = ({ recentPost }) => {
  const isGrid = recentPost?.length >= 15;

  return (
    <div className="md:col-span-3 bg-white">
      <div
        className={
          isGrid
            ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4"
            : "flex flex-col gap-4"
        }
      >
        {recentPost?.map((post, idx) => (
          <article key={idx} className="flex gap-3 items-start">
            <div className="w-12 h-8 bg-gray-100 flex items-center justify-center text-xs font-semibold">
              {idx + 1}.
            </div>

            <Link className="flex gap-2.5" href={`/slug/${post.slug}`}>
              <Image
                src={post.featuredImage}
                alt="hero"
                width={1000}
                height={50}
                className="w-full h-20 object-cover rounded"
              />
              <h4 className="text-sm font-medium">{post.title}</h4>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MostRecentPost;
