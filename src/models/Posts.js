import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Clear Mongoose model cache if the model exists
if (mongoose.connection && mongoose.connection.models.Posts) {
  delete mongoose.connection.models.Posts;
}

let Post;

try {
  // Define the "Posts" model
  Post = mongoose.model("Posts", postSchema);
} catch (error) {
  // Handle any errors during model definition
  console.error("Error defining 'Posts' model:", error);
}

export default Post;
