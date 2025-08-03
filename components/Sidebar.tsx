import Image from "next/image";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import userImg from "../public/user.png";
import clsx from "clsx";
import { getAllPostAction } from "@/lib/serveractions";
import type { User } from "@clerk/nextjs/server";

const Sidebar = async ({ user }: { user: User }) => {
  const posts = await getAllPostAction();
  const src = user.imageUrl ? String(user.imageUrl) : String(userImg);
  return (
    <div
      className={clsx(
        "hidden md:block w-[20%] h-fit border-1 border-gray-300 bg-white rounded-lg border-b-gray-300 border-b-4 rounded-b-lg"
      )}
    >
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src={
                "https://img.freepik.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg?t=st=1754157018~exp=1754160618~hmac=7207ddc186d4ffb1cbf364c144cc834e2dafb85d503d725c24aab30810164582&w=1380"
              }
              width={500}
              height={500}
              alt={"banner"}
            />
          )}
        </div>
        <div className="my-1 absolute top-8">
          <ProfilePhoto src={src} />
        </div>
        <div className="">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user?.firstName} ${user?.lastName}` : "User Unknown"}
            </h1>
            <p className="text-xs font-semibold italic text-gray-600 cursor-pointer">
              @{user ? `${user?.username}` : "username"}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Post Impression</p>
          <p className="font-bold text-blue-500">88</p>
        </div>
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Posts</p>
          <p className="font-bold text-blue-500">{posts?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
