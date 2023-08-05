import { NextResponse } from "next/server"

import Posts from "@/models/Posts"
import connect from '@/utils/db'
import Post from "@/models/Posts"


export const GET = async (req) => {
    const url = new URL(req.url)
    const username = url.searchParams.get("username")
    //fetch

    try {
        await connect()
        const posts = await Posts.find(username && {username})
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        console.log("Consoling error", error);
        return new NextResponse("Database Error", {status: 500})
    }
}


// POST method to upload posts on api call

export const POST = async (req) => {
    const body = await req.json()

    const newPost = new Posts(body)

    try {
        await connect()
        await newPost.save()
        return new NextResponse("Post has been created", {status: 201})
    } catch (error) {
        console.log("Consoling error", error);
        return new NextResponse("Database Error", {status: 500})
    }
}