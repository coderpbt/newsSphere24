
import { auth } from '@/auth';
import CommentForm from '@/components/Comments/CommentForm';
import CommentList from '@/components/Comments/CommentList';
import SinglePage from '@/components/SinglePage/SinglePage';
import { getMostRecentPost, getPostBySlug, getRelatedPost } from '@/database/queries';
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
      <SinglePage detaisPost={detaisPost} recentPost={recentPost} relatedPost={relatedPost} />
      <br />
      <div className='container mx-auto'>
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
    </>
  );
};

export default DetalisPost;