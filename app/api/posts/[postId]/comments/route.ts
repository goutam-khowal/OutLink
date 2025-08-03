import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// Fetch all comments
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await params;
    await connectDB();
    const post = Post.findById({ _id: postId });
    if (!post) return NextResponse.json({ error: "Post not found." });

    const comments = await post.populate({
      path: "comments",
      options: { sort: { createdAt: -1 } },
    });
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred: " + error });
  }
};
