import React from "react";
import AddPost from "./AddPost";
import Posts from "./Posts";
import { getAllPostAction } from "@/lib/serveractions";
import type { User } from "@clerk/nextjs/server";

const Feed = async ({ user }: { user: User }) => {
  const userData = JSON.parse(JSON.stringify(user));
  const posts = await getAllPostAction();
  return (
    <div className="flex-1">
      <AddPost user={userData} />
      <Posts posts={posts} />
    </div>
  );
};

export default Feed;
