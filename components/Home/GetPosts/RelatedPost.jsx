import Image from "next/image";
import Link from "next/link";
 
const RelatedPost = ({relatedPost}) => {
    const isGrid = relatedPost?.length >= 15;
    return (
            <div className="md:col-span-3 bg-white">
              <div
                className={
                  isGrid
                    ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4"
                    : "flex flex-col gap-4"
                }
              >
                {relatedPost?.map((post, idx) => (
                  <article key={idx} className="flex gap-3 items-start">
                    <div className="w-12 h-8 bg-gray-100 flex items-center justify-center text-xs font-semibold">
                      {idx + 1}.
                    </div>
       
                    <Link className="grid grid-cols-2 gap-2.5" href={`/${post.cname}/${post.slug}`}>
                      <Image
                        src={post.featuredImage}
                        alt="hero"
                        width={isGrid ? 1000 : 800}  
                        height={isGrid ? 50 : 80}  
                        className={`${isGrid ? "w-full" : "w-[80%] mx-auto"} ${isGrid ? "h-20" : "h-[81px]"} object-cover rounded`}
                      />
                      <h4 className="text-sm font-medium">{isGrid ? post.title : post.title}</h4>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
    );
};
 
export default RelatedPost;