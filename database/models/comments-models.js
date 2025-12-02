import mongoose, {Schema} from "mongoose";

const commentsSchema = new Schema({
  postId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts"
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
  },
  userName: {
    required: true,
    type: String
  },
  comments: {
    required: true,
    type: String
  },
},
{ timestamps: true }
);


export const commentModel = mongoose.models.comments || mongoose.model("comments", commentsSchema);