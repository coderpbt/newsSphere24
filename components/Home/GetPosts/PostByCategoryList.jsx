import Image from "next/image";
import Link from "next/link";

const PostByCategoryList = ({categoryListPost, categoryList}) => {
    return (
        <>
            <section className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {categoryList.map((cat) => {
                    const filterPosts = categoryListPost.filter((p) => p.cname === cat).slice(0, 4);
                    return (
                    <div key={cat} className="border rounded p-4">
                        <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold">{cat}</h3>
                        <Link className="text-xs text-red-600 hover:underline" href={`/${cat}`}>VIEW MORE</Link>
                        </div>

                        <div className="mt-3 space-y-3">
                            {filterPosts.map((post, i) => (
                                <article key={post._id} className="flex flex-col gap-3">
                                        <div className="w-full bg-gray-100">
                                            <Link href={`/${post.cname}/${post.slug}`}>
                                                <Image
                                                    src={post.featuredImage}
                                                    alt="hero"
                                                    width={1000}  
                                                    height={50}  
                                                    className="w-full h-20 object-cover rounded"
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">
                                            <Link href={`/${post.cname}/${post.slug}`}>{post.title}</Link>
                                            </h4>                                          
                                        </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    );
                })}
            </section>
        </>
    );
};

export default PostByCategoryList;