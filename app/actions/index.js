"use server"

import { signIn} from "@/auth";
import { userModel } from "@/database/models/users-model";
import { dbConnect } from "@/lib/mongoConnect";
import bcrypt from "bcryptjs";

export async function login(formData) {
    try {
       const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return response;
    } catch(error) {
        throw new Error(error);
    }
}


export async function register(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
        return { error: "All fields are required" };
    }

    if (password.length < 6) {
        return { error: "Password must be at least 6 characters" };
    }

    try {
        await dbConnect();

        const existingUser = await userModel.findOne({ email }).lean();

        if (existingUser) {
            return { error: "User with this email already exists" };
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        await userModel.create({
            name,
            email,
            password: hashedPassword,
        });

        return { success: true, message: "Registration successful!" };

    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Something went wrong. Please try again." };
    }
}