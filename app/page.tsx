import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);
  return (
    <div className="mt-14 pt-5">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        {/* Sidebar */}
        {user && <Sidebar user={user} />}
        {/* Home feed */}
        <Feed user={user!} />
        {/* News Section */}
        <News />
      </div>
    </div>
  );
}
