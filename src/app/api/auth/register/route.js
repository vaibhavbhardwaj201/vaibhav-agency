import { NextResponse } from "next/server"

import connect from "@/utils/db"
import User from "@/models/User"

import bcrypt from 'bcryptjs'


export const POST = async (req) => {
    const {name, email, password} = await req.json()

    await connect()
    console.log(password);
    const hasshedPassword = await bcrypt.hash(password, 5)

    const newUser = new User({
        name,
        email,
        password: hasshedPassword,
    })

    try {
        await newUser.save()
        return new NextResponse("User has been created", {
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return new NextResponse(error, {
            status: 500,
        })
    }
}