import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// POST DISLIKES
export const POST = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const userId = await req.json();
    const post = await Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ error: "Post not found." });
    await Post.updateOne({ $pull: { likes: userId } });
    return NextResponse.json({ message: "Post disliked successfully." });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred: " + error });
  }
};
