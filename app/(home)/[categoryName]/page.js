import CategoryPage from "@/components/CategoryPage/CategoryPage";
import { getCategoryWisePost, getMostPopularPost, getMostRecentPost } from "@/database/queries";

export async function generateMetadata({params}){
   const {categoryName} = await params;
   const detaisCat = await getCategoryWisePost(categoryName);
   const cname = detaisCat?.[0]?.cname || categoryName;
   return{
        title: `NewsSphere 24 - ${cname}`,
   }

}

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