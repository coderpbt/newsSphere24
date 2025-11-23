import { categoriesModel } from "../models/categories-models";

export async function getAllCategory(){
  const category =  await categoriesModel.find().lean();
  return category;
}