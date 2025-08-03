"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { IPostDocument } from "../models/post.model";
import ProfilePhoto from "./shared/ProfilePhoto";
import { timeAgo } from "@/lib/utils";
import PostContent from "./PostContent";
import SocialOptions from "./SocialOptions";
import { deletePostAction } from "@/lib/serveractions";

const Post = ({ post }: { post: IPostDocument }) => {
  const user = useUser();
  const src = post.user.profilePhoto ? post.user.profilePhoto : "";

  return (
    <div className="bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300">
      <div className="flex gap-2 p-4 ">
        <ProfilePhoto src={src} />

        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm font-bold">
              {post?.user?.firstName} {post?.user?.lastName}
              {post?.user.userId == user.user?.id && (
                <Badge variant={"secondary"} className="ml-2">
                  You
                </Badge>
              )}
            </h1>
            <p className="text-xs text-gray-500">
              {post?.user.userId == user.user?.id
                ? user?.user?.username
                : post?.user?.userName}
            </p>
            <p className="text-xs text-gray-500">{timeAgo(post.createdAt)}</p>
          </div>
        </div>
        <div>
          {user?.user?.id === post?.user?.userId ? (
            <Button
              size={"icon"}
              className="rounded-full"
              variant={"outline"}
              onClick={() => {
                deletePostAction(String(post?._id));
              }}
            >
              <Trash2 />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <PostContent post={post} />
      <SocialOptions post={post} />
    </div>
  );
};

export default Post;
