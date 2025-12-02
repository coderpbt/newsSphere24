import { serializePost } from "@/lib/serializePost";
import { dbConnect } from "@/lib/mongoConnect";
import { categoriesModel } from "../models/categories-models";
import { postModel } from "../models/posts-model";
import { commentModel } from "../models/comments-models";

//Get All Category
export async function getAllCategory(){
  await dbConnect();
  const category = await categoriesModel.find().lean();
  return category.map(cat => ({
    _id: cat._id.toString(),
    cname: cat.cname
  }));
}

//Get All CategoryWise Post
export async function getCategoryWisePost(categoryName){
  await dbConnect();
  const categoryWise = await postModel
    .find({cname : categoryName})
    .lean();
  return categoryWise.map(serializePost);
}

//Get All Post
export async function getAllPost(){
  await dbConnect();
  const post = await postModel.find().lean();
  return post.map(serializePost);
}

//Get Release Post
export async function getReleasePost(limit) {
  await dbConnect();
  const post = await postModel
    .find()
    .sort({ createdAt: -1 })  
    .limit(limit)                 
    .lean();
  return post.map(serializePost);
}

//Get category wise Index Post
export async function getCategoryIndexPost() {
  await dbConnect();
  const posts = await postModel.aggregate([
    { $sort: { createdAt: -1 } },
    {
      $group: {
        _id: "$cname",      
        post: { $first: "$$ROOT" }  
      }
    },
    { $replaceRoot: { newRoot: "$post" } },
    { $sort: { createdAt: -1 } }
  ]);

  return posts.map(serializePost);
}

//Get Post By Slug
export async function getPostBySlug(slug){
  await dbConnect();
  const postSlug = await postModel.findOne({slug: slug}).lean();
  return serializePost(postSlug);
}

//Get Most Recent Post
export async function getMostRecentPost(limt){
  await dbConnect();
  const recentPost = await postModel
    .find()
    .sort({ createdAt: -1 })
    .limit(limt) 
    .lean(); 
  return recentPost.map(serializePost);
}

//Get Most Popular Post
export async function getMostPopularPost(limit) {
  await dbConnect();
  const popularPost = await postModel
    .find({}, "title featuredImage slug viewCount cname excerpt")
    .sort({ viewCount: -1 })
    .limit(limit)
    .lean();
  return popularPost.map(serializePost);
}

//Get Post By Category List -> Home
export async function getPostByCategoryList(categories, limit = 4) {
  await dbConnect();
  const categoryList = await postModel
    .find({ cname: {$in : categories}})
    .sort({ createdAt : -1 })
    .limit(limit * categories.length)
    .lean();
  return categoryList.map(serializePost);
}

//Get Related Post
export async function getRelatedPost(categoryName, currentId, limit) {
  await dbConnect();
  const relatedPost = await postModel
    .find({ 
      cname: categoryName,
      _id : {$ne : currentId}
    })
    .sort({ viewCount : -1 })
    .limit(limit)
    .lean();
  return relatedPost.map(serializePost);
}

//Create Post
export async function createPost(data) {
  await dbConnect();
  const post = await postModel.create(data);
  return serializePost(post.toObject());
}


//Get All Comments by ID 
export async function getAllComments(postId) {
  await dbConnect();
  const comments = await commentModel
  .find({ postId : postId })
  .sort({ createdAt : -1 })
  .lean();
  return comments;
}