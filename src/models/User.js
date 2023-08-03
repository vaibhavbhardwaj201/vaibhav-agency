import mongoose from "mongoose"

const {Schema} = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)


// Clear Mongoose model cache if the model exists
if (mongoose.connection && mongoose.connection.models.User) {
  delete mongoose.connection.models.User;
}

let User;

try {
  // Define the "Posts" model
  User = mongoose.model("User", userSchema);
} catch (error) {
  // Handle any errors during model definition
  console.error("Error defining 'User' model:", error);
}

export default User;

// export default mongoose.model("User", userSchema)