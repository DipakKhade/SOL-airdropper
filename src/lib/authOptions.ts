import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import db from '../lib/db'
import { UserRound } from "lucide-react";

export const othOptions : NextAuthOptions = ({
    providers:[
        GoogleProvider({
            clientId:process.env.clientId ?? "",
            clientSecret: process.env.clientSecret ?? "" 
         }),
        ],

    secret: process.env.NEXTAUTH_SECRET || 'sec_next_auth',

    callbacks:{
        async signIn ({ user , account }){
            console.log(user)
            const new_user = await db.user.create({
                data:{
                    email:user.email ?? "",
                    name:user.name ?? "",
                    profileImage:user.image ?? ""
                }
            })
            return true
        }

    }
}) 