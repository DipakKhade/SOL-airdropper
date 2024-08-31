import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const othOptions : NextAuthOptions = ({
    providers:[
        GoogleProvider({
            clientId:process.env.clientId ?? "",
            clientSecret: process.env.clientSecret ?? "" 
         })
    ],

    callbacks:{
        async signIn (userinfo){
            console.log(userinfo)
            return true
        }

    }
}) 