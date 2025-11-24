import { categoriesModel } from "../models/categories-models";
import { postModel } from "../models/posts-model";

export async function getAllCategory(){
  const category =  await categoriesModel.find().lean();
  return category;
}

export async function getAllPost(){
  const post =  await postModel.find().lean();
  return post;
}

export async function getReleasePost() {
  const post = await postModel
    .find()
    .sort({ createdAt: -1 })  
    .limit(1)                 
    .lean();
  return post;
}

export async function getCategoryIndexPost() {
  const posts = await postModel.aggregate([
    // Sort by createdAt descending so newest posts come first
    { $sort: { createdAt: -1 } },

    // Group by category, take the first (newest) post in each category
    {
      $group: {
        _id: "$category",       // group by category
        post: { $first: "$$ROOT" }  // take the whole post document
      }
    },

    // Replace root so we just get the post object
    { $replaceRoot: { newRoot: "$post" } },

    // Optional: sort by createdAt descending again
    { $sort: { createdAt: -1 } }
  ]);

  return posts;
}
