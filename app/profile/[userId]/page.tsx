// app/profile/[userId]/page.tsx
import Posts from "@/components/Posts";
import UserProfileHeader from "@/components/UserProfileHeader";
import { getAllPostAction } from "@/lib/serveractions";
import { IPost } from "@/models/post.model";

interface Props {
  params: {
    userId: string;
  };
}

async function filteredPost(userId: string) {
  const posts = await getAllPostAction();
  return posts.filter((post: IPost) => post.user.userId === userId);
}

const UserProfile = async ({ params }: Props) => {
  const userPosts = await filteredPost(params.userId);
  console.log(params.userId);
  console.log(userPosts);
  return (
    <div className="flex-1 mt-14 pt-5">
      <UserProfileHeader user={userPosts[0].user} />
      <Posts posts={userPosts} />
    </div>
  );
};

export default UserProfile;
