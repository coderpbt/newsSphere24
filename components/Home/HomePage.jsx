import { getAllPost, getCategoryIndexPost, getMostPopularPost, getMostRecentPost, getPostByCategoryList, getReleasePost } from "@/database/queries";
import RelesePost from "./GetPosts/RelesePost";
import CategoryByPost from "./GetPosts/CategoryByPost";
import MostRecentPost from "./GetPosts/MostRecentPost";
import MostPopularPost from "./GetPosts/MostPopularPost";
import PostByCategoryList from "./GetPosts/PostByCategoryList";
import PressSlider from "./GetPosts/PressSlider";

const HomePage = async () => {
  const posts = await getAllPost();
  const [releasePost, releasePostSlider] = await Promise.all([
    getReleasePost(1),
    getReleasePost(10),
  ]);
  const CategoryIndexPost = await getCategoryIndexPost();
  const recentPost = await getMostRecentPost(15);
  const popularPost = await getMostPopularPost(15);
  const categoryList = ['Health', 'Technology', 'Education', "Entertainment"];
  const categoryListPost = await getPostByCategoryList(categoryList, 4);


  return (
    <>
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-3 text-sm text-gray-500">HOME</div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-3 gap-6">
          <RelesePost relesePost={releasePost} />
          <CategoryByPost CategoryIndexPost={CategoryIndexPost} />        
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-red-600">Most Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <MostRecentPost recentPost={recentPost} /> 
          </div>
        </section>

        <PostByCategoryList categoryListPost={categoryListPost} categoryList={categoryList} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-red-600">Most Popular</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <MostPopularPost popularPost={popularPost} />
          </div>
        </section>
        <section className="mt-10 mb-8">
          <PressSlider releasePostSlider={releasePostSlider} />         
        </section>
      </div>
    </div>
    </>
  );
};

export default HomePage;