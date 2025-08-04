import Posts from "@/components/Posts";
import UserProfileHeader from "@/components/UserProfileHeader";
import { getAllPostAction } from "@/lib/serveractions";
import type { IPost } from "@/models/post.model";

async function filteredPost(userId: string) {
  const posts = await getAllPostAction();
  return posts.filter((post: IPost) => post.user.userId === userId);
}

export default async function UserProfile({
  params,
}: {
  params: { userId: string }
}) {
  const userPosts = await filteredPost(params.userId);
  console.log(params.userId);
  console.log(typeof userPosts);

  if (!userPosts.length) {
    return <p>No posts found for this user.</p>;
  }

  return (
    <div className="flex-1 mt-14 pt-5">
      <UserProfileHeader user={userPosts[0].user} />
      <Posts posts={userPosts} />
    </div>
  );
}
