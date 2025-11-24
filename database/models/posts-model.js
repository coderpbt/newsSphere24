import mongoose, {Schema} from "mongoose";

const postSchema =  new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String },
    featuredImage: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    authorName: { type: String },
    tags: { type: [String], default: [] },
    viewCount: { type: Number, default: 0 },
    isEditorsPick: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    cname: { type: String }, 
  },
  { timestamps: true } 
);

export const postModel = mongoose.models.posts || mongoose.model("posts", postSchema);
