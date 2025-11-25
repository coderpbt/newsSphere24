
import SinglePage from '@/components/SinglePage/SinglePage';
import { getPostBySlug } from '@/database/queries';

const DetalisPost = async ({params}) => {
  const {slug} = await params;
  const detaisPost = await getPostBySlug(slug);

  return (
    <div>
      <SinglePage detaisPost={detaisPost} />
    </div>
  );
};

export default DetalisPost;