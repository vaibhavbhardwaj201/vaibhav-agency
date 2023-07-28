import { NextResponse } from "next/server"

import Posts from "@/models/Posts"

import connect from '@/utils/db'


export const GET = async (req) => {
    //fetch

    try {
        await connect()
        const posts = await Posts.find()
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        console.log("Consoling error", error);
        return new NextResponse("Database Error", {status: 500})
    }

}