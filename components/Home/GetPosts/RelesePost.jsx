import Image from "next/image";
import Link from "next/link";

const RelesePost = ({relesePost}) => {
  return (
    <>
       <article className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">PRESS RELEASE</span>
              {
                relesePost?.map((post) => 
                  <div key={post._id}>
                       <Link href={`/slug/${post.slug}`} className="text-2xl md:text-4xl font-semibold mb-4 block hover:underline">{post.title}</Link>
                       <Link href={`/slug/${post.slug}`}>
                        <Image
                          src={post.featuredImage}
                          alt="hero"
                          width={1500}       
                          height={1000}       
                          className="w-full h-90 object-cover rounded-none"
                        />
                       </Link>
                       <Link href={`/slug/${post.slug}`} className="text-gray-600 mt-5 block">{post.content}</Link>
                  </div>
                )
              }
             
            </div>
          </article>
    </>
  );
};

export default RelesePost;