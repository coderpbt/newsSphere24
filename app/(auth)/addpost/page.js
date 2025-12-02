import { auth } from '@/auth';
import AddPostForm from '@/components/AddPost/AddPostForm';
import { getAllCategory } from '@/database/queries';
import { redirect } from 'next/navigation';


const addPostPage = async () => {
  const categories = await getAllCategory()
  const session = await auth();
  if(!session){
    redirect('/login');
  }
  return (
    <>
      <AddPostForm categories={categories} session={session} />
    </>
  );
};

export default addPostPage;