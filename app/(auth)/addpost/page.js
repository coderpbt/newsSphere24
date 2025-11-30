import { auth } from '@/auth';
import AddPostForm from '@/components/AddPost/AddPostForm';
import { getAllCategory } from '@/database/queries';
import React from 'react';

const addPostPage = async () => {
  const categories = await getAllCategory()
  const session = await auth();
  return (
    <>
      <AddPostForm categories={categories} session={session} />
    </>
  );
};

export default addPostPage;