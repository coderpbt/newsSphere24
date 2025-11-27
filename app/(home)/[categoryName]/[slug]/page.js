
import SinglePage from '@/components/SinglePage/SinglePage';
import { getMostRecentPost, getPostBySlug } from '@/database/queries';

const DetalisPost = async ({params}) => {
  const {slug} = await params;
  const detaisPost = await getPostBySlug(slug);
  const recentPost = await getMostRecentPost(5);
  return (
    <>
      <SinglePage detaisPost={detaisPost} recentPost={recentPost} />
    </>
  );
};

export default DetalisPost;