import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import mongoClientPromise from "./lib/mongoClientPromise";

import { dbConnect } from "./lib/mongoConnect";
import { userModel } from "./database/models/users-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    // Ensure database connection
                    await dbConnect();

                    // Find user and use .lean() to get plain object
                    const user = await userModel.findOne({ 
                        email: credentials.email 
                    }).lean();

                    if (!user) {
                        return null;
                    }

                    // Compare passwords
                    const isMatch = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isMatch) {
                        return null;
                    }

                    // Return plain object with required fields
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name || null,
                    };

                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});