import connect from "@/utils/db";
import User from "@/models/User";

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      "id": "credentials",
      "name": "Credentials",
      async authorize(credentials) {
        await connect()

        try {
          const user = await User.findOne({email: credentials.email})

          if (user) {
            // check user
            const isPassCorrect = bcrypt.compare(credentials.password, user.password)

            if (isPassCorrect) {
              return user
            } else {
              throw new Error("Wrong Credentials!")
            }
            
          } else {
            throw new Error("User not registered")
          }

        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  pages: {
    error: "/dashboard/login"
  }
});

export { handler as GET, handler as POST }
