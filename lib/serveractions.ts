"use server";

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";
import { Comment } from "@/models/comment.model";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CREATE POST
export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");

  if (!inputText) throw new Error("Input field empty!");

  const image = selectedFile;

  // Fix non-null assertion usage: safe fallback for username
  const userDatabase: IUser = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    userId: user.id,
    profilePhoto: user.imageUrl || "",
    userName: user.username || "",
  };

  try {
    if (image) {
      // create post with Image
      const uploadResponse = await cloudinary.uploader.upload(image);
      await Post.create({
        description: inputText,
        user: userDatabase,
        imageUrl: uploadResponse?.secure_url || "",
      });
    } else {
      // create post without Image
      await Post.create({
        description: inputText,
        user: userDatabase,
      });
    }
    revalidatePath("/");
  } catch (error: unknown) {
    // Replace any with unknown and handle error properly
    // Provide error.message if it's Error type
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(message);
  }
};

// GET ALL POSTS
export const getAllPostAction = async () => {
  await connectDB();

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({ path: "comments", options: { sort: { createdAt: -1 } } });
    if (!posts) return [];
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Delete Post
export const deletePostAction = async (postId: string) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated!");
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found!");

  // Fix ownership check: only allow deleting own posts
  if (post.user?.userId !== user.id) {
    throw new Error("Access Denied: This post belongs to someone else.");
  }

  try {
    await Post.deleteOne({ _id: postId });
    revalidatePath("/");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`An error occurred: ${message}`);
  }
};

export const createCommentAction = async (
  postId: string,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not authenticated.");
    const inputText = formData.get("inputText") as string;
    if (!inputText) throw new Error("Field is required");
    if (!postId) throw new Error("Post ID is required");

    // Fix non-null assertion: safely fallback
    const userDatabase: IUser = {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      userId: user.id,
      profilePhoto: user.imageUrl || "",
      userName: user.username || "",
    };

    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");

    const comment = await Comment.create({
      textMessage: inputText,
      user: userDatabase,
    });

    post.comments?.push(comment._id);
    await post.save();

    revalidatePath("/");
  } catch (error: unknown) {
    console.error("createCommentAction error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`An error occurred: ${message}`);
  }
};
