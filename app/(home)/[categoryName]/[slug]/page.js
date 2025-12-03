
import { auth } from '@/auth';
import CommentForm from '@/components/Comments/CommentForm';
import CommentList from '@/components/Comments/CommentList';
import MostRecentPost from '@/components/Home/GetPosts/MostRecentPost';
import RelatedPost from '@/components/Home/GetPosts/RelatedPost';
import SinglePage from '@/components/SinglePage/SinglePage';
import { getMostRecentPost, getPostBySlug, getRelatedPost } from '@/database/queries';
import { bdTime } from '@/lib/formateTime';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({params}){
   const {slug} = await params;
   const detaisPost = await getPostBySlug(slug);

   return{
        title: detaisPost.title,
        description: detaisPost.content,
   }

}

const DetalisPost = async ({params}) => {
  const {slug} = await params;
  const session = await auth();
  const detaisPost = await getPostBySlug(slug);
  const recentPost = await getMostRecentPost(5);
  const relatedPost = await getRelatedPost(detaisPost.cname, detaisPost._id, 4);
  // console.log("getPostBySlug", detaisPost);
  return (

     <>
            <div className="min-h-screen bg-white text-gray-800">
                <div className="container mx-auto px-4 py-4 text-xs text-gray-500 uppercase">
                  HOME &gt; {detaisPost.cname}
                </div>
      
                <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
                      {detaisPost.title}
                    </h1>
      
                    <Image
                        src={detaisPost.featuredImage}
                        alt="hero"
                        width={1500}       
                        height={1000}      
                        className="w-full h-[500px] object-cover rounded mt-4"
                      />
      
                    <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
                      <span className="font-semibold">Created by </span>
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">{detaisPost.authorName}</span>
                      <span className="text-gray-500">{bdTime(detaisPost.updatedAt)}</span>
                    </div>
      
                    <article className="mt-6 text-sm leading-relaxed text-gray-700 space-y-4">
                      <p>
                      {detaisPost.content}
                      </p>         
                    </article>
      
                    <div className="flex flex-wrap gap-2 mt-4 mb-9">
                      {detaisPost?.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                      <div>
                          {
                            session ? (
                              <CommentForm postId={detaisPost._id} user={session.user} />
                            ) : (
                              <div className="max-w-2xl mb-6 ml-2 p-4 bg-gray-100 rounded-lg text-center">
                                <p className="text-gray-600">Please <Link href="/login" className="text-blue-600 hover:underline">login</Link> to comment</p>
                              </div>
                            )
                          }
                          <br />
                          <div className='max-w-2xl mb-6 ml-2'>
                            <CommentList postId={detaisPost._id} />
                          </div>      
                        </div>
                  </div>
      
                  <aside className="space-y-10 mb-6">
                    <div>
                      <h2 className="text-lg font-semibold text-red-600 mb-4">RELATED POST</h2>
                      <div className="space-y-4">
                      <RelatedPost relatedPost={relatedPost} />
                      </div>
                    </div>
      
                    <div>
                      <h2 className="text-lg font-semibold text-red-600 mb-4">MOST RECENT</h2>
                      <div className="space-y-4">
                        <MostRecentPost recentPost={recentPost} /> 
                      </div>
                    </div>
                  </aside>
                </section>
              </div>
               {/* <SinglePage detaisPost={detaisPost} recentPost={recentPost} relatedPost={relatedPost} /> */}
     </>
     


   
  );
};

export default DetalisPost;