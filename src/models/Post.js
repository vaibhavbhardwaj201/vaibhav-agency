import mongoose from "mongoose"

const {Schema} = mongoose

const postSchema = new Schema(
    {
        title: {
            type: string,
            required: true,
        },
        description: {
            type: string,
            required: true,
        },
        image: {
            type: string,
            required: true,
        },
        content: {
            type: string,
            required: true,
        },
        username: {
            type: string,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Post", postSchema)