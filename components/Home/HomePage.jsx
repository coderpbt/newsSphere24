import { getAllPost, getCategoryIndexPost, getMostRecentPost, getReleasePost } from "@/database/queries";
import RelesePost from "./GetPosts/RelesePost";
import CategoryByPost from "./GetPosts/CategoryByPost";
import MostRecentPost from "./GetPosts/MostRecentPost";

const HomePage = async () => {
  const posts = await getAllPost();
  const relesePost = await getReleasePost();
  const CategoryIndexPost = await getCategoryIndexPost();
  const recentPost = await getMostRecentPost(15);


  return (
    <>
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-3 text-sm text-gray-500">HOME</div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RelesePost relesePost={relesePost} />
          <CategoryByPost CategoryIndexPost={CategoryIndexPost} />        
        </div>

        {/* Most Recent / Two-column ranked list */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-red-600">Most Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Left big list */}
            <MostRecentPost recentPost={recentPost} /> 
          </div>
        </section>

        {/* Category columns: Health, Tech, Education, Editor's pick */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {['Health', 'Technology', 'Education', "Editor's Pick"].map((cat) => (
            <div key={cat} className="border rounded p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">{cat}</h3>
                <a className="text-xs text-red-600 hover:underline" href="#">VIEW MORE</a>
              </div>

              <div className="mt-3 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <article key={i} className="flex gap-3">
                    <div className="w-20 h-12 bg-gray-100"></div>
                    <div>
                      <h4 className="text-sm">Article title {i + 1}</h4>
                      <p className="text-xs text-gray-500">Short excerpt</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Most Popular + three-column sections (Finance / Entertainment / Sports) */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-red-600">Most Popular</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            {['Finance', 'Entertainment', 'Sports'].map((section) => (
              <div key={section} className="border rounded p-4">
                <div className="h-28 bg-gray-100 mb-3"></div>
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <article key={i} className="text-sm">
                      <h4 className="font-medium">{section} item {i + 1} — headline</h4>
                      <p className="text-xs text-gray-500">meta info</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press release carousel-like strip */}
        <section className="mt-10 mb-8">
          <h2 className="text-lg font-semibold text-red-600">PRESS RELEASE</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="border rounded p-3">
                <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">PRESS RELEASE</span>
                <h4 className="mt-2 font-medium">Press item {i + 1}</h4>
                <p className="text-xs text-gray-500 mt-2">Short preview and a Read More button below.</p>
                <button className="mt-3 text-sm bg-red-600 text-white px-3 py-1 rounded">Read More</button>
              </article>
            ))}
          </div>
        </section>

      </div>


    </div>

    </>
  );
};

export default HomePage;