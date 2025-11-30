
import SinglePage from '@/components/SinglePage/SinglePage';
import { getMostRecentPost, getPostBySlug, getRelatedPost } from '@/database/queries';

const DetalisPost = async ({params}) => {
  const {slug} = await params;
  const detaisPost = await getPostBySlug(slug);
  const recentPost = await getMostRecentPost(5);
  const relatedPost = await getRelatedPost(detaisPost.cname, detaisPost._id, 4);
  return (
    <>
      <SinglePage detaisPost={detaisPost} recentPost={recentPost} relatedPost={relatedPost} />
    </>
  );
};

export default DetalisPost;