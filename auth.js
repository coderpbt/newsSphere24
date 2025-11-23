import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import bcrypt from "bcryptjs";
import mongoClientPromise from "./lib/mongoClientPromise";
import { userModel } from "./database/models/users-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    // adapter: MongoDBAdapter(mongoClientPromise, {databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                if (credentials == null) return null;

                try {
                    const user = await userModel.findOne({email: credentials.email}).lean();
                    console.log({user})
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if(isMatch) {
                            return user;
                        } else {
                            throw new Error('Email or password mismatch');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch(error) {
                    throw new Error(error);
                }
            }
        }),
    ]
})