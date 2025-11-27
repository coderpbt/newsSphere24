import CategoryPage from "@/components/CategoryPage/CategoryPage";
import { getCategoryWisePost, getMostPopularPost, getMostRecentPost } from "@/database/queries";



const CategoryNav = async ({params}) => {
  const {categoryName} = await params;
  const detaisCat = await getCategoryWisePost(categoryName);
  const recentPost = await getMostRecentPost(5);
  const popularPost = await getMostPopularPost(5)
  return (
      <>
        <CategoryPage post={detaisCat} recentPost={recentPost} popularPost={popularPost} />
      </>
  );
};

export default CategoryNav;