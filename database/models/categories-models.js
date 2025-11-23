import mongoose, {Schema} from "mongoose";


const categorieSchema = new Schema({
  name: {
    required: true,
    type: String
  },

});


export const categoriesModel = mongoose.models.categories || mongoose.model("categories", categorieSchema);