export const serializePost = (post) => {
  if (!post) return null;
  
  return {
    ...post,
    _id: post._id.toString(),
    category: post.category?.toString() || null,
    author: post.author?.toString() || null,
    createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
    updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
  };
}