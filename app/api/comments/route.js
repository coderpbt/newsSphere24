import { commentModel } from "@/database/models/comments-models";
import { dbConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

export async function POST(response){
  await dbConnect();
  const body = await response.json();

  
  if (!body.userName) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const newComments = await commentModel.create({
    postId : body.postId,
    userName : body.userName,
    comments : body.text
  })

   return NextResponse.json(newComments, { status: 201 });

}