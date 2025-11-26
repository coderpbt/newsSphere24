import { dbConnect } from "@/lib/mongoConnect";
import { categoriesModel } from "../models/categories-models";
import { postModel } from "../models/posts-model";

//Get All Category
export async function getAllCategory(){
   await dbConnect();
  const category =  await categoriesModel.find().lean();
  return category;
}

//Get All CategoryWise Post
export async function getCategoryWisePost(categoryName){
   await dbConnect();
  const categoryWise =  await postModel
  .find({cname : categoryName})
  .lean();
  return categoryWise;
}

//Get All Post
export async function getAllPost(){
   await dbConnect();
  const post =  await postModel.find().lean();
  return post;
}

//Get Release Post
export async function getReleasePost() {
   await dbConnect();
  const post = await postModel
    .find()
    .sort({ createdAt: -1 })  
    .limit(1)                 
    .lean();
  return post;
}

//Get category wise Index Post
export async function getCategoryIndexPost() {
   await dbConnect();
  const posts = await postModel.aggregate([
    { $sort: { createdAt: -1 } },
    {
      $group: {
        _id: "$category",      
        post: { $first: "$$ROOT" }  
      }
    },

    { $replaceRoot: { newRoot: "$post" } },
    { $sort: { createdAt: -1 } }
  ]);

  return posts;
}


export async function getPostBySlug(slug){
  await dbConnect();
  const postSlug =  await postModel.findOne({slug: slug}).lean();
  return postSlug;
}


export async function getMostRecentPost(limt){
    await dbConnect();
    const recentPost =  await postModel
    .find()
    .sort({ createdAt: -1 })
    .limit(limt) 
    .lean(); 

    return recentPost;
}