import { categoriesModel } from "@/database/models/categories-models";
import { createPost } from "@/database/queries";
import { dbConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  try {
    await dbConnect();
    const body = await request.json();

    let cname = body.cname || null;
    if (body.category) {
      const cat = await categoriesModel.findById(body.category).lean();
      cname = cat?.cname || cname;
    }


    const {
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      category,
      author,
      tags,
      status,
      isEditorsPick,
      authorName
    } = body;

    const newPost = await createPost({
      title,
      cname,
      slug,
      content,
      excerpt,
      featuredImage,
      category,
      author,
      tags,
      status,
      isEditorsPick,
      authorName
    });

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
};