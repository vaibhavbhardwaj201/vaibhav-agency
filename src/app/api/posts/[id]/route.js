import { NextResponse } from "next/server"

import Posts from "@/models/Posts"
import connect from '@/utils/db'



export const GET = async (req, {params}) => {
    //fetch

    const {id} = params

    try {
        await connect()
        const post = await Posts.findById(id)
        return new NextResponse(JSON.stringify(post), {status: 200})
    } catch (error) {
        console.log("Consoling error", error);
        return new NextResponse("Database Error", {status: 500})
    }

}

// DELETE endpoint for api call

export const DELETE = async (req, {params}) => {
    //fetch

    const {id} = params

    try {
        await connect()
        await Posts.findByIdAndDelete(id)
        return new NextResponse("Post has been Deleted", {status: 200})
    } catch (error) {
        console.log("Consoling error", error);
        return new NextResponse("Database Error", {status: 500})
    }

}