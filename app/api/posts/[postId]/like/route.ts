import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// GET LIKES
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await params;
    await connectDB();
    const post = await Post.findById({ _id: postId });
    if (!post) return NextResponse.json({ error: "Post not found." });

    return NextResponse.json(post.likes);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred: " + error });
  }
};

// POST LIKES
export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await params;
    await connectDB();
    const userId = await req.json();
    const post = await Post.findById({ _id: postId });
    if (!post) return NextResponse.json({ error: "Post not found." });
    await Post.updateOne({ $addToSet: { likes: userId } });
    return NextResponse.json({ message: "Post liked successfully." });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred: " + error });
  }
};
