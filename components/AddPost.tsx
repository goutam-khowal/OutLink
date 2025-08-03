"use client";

import React, { useState } from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Input } from "./ui/input";
import AddPostDialogue from "./AddPostDialogue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddPost = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function inputHandler() {
    setIsOpen(true);
  }
  return (
    <div className="bg-white p-4 m-2 md:m-0 border-1 border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfilePhoto src={user?.imageUrl} />
        <Input
          type="text"
          placeholder="What's on your mind?"
          className="rounded-full hover:bg-gray-100 cursor-pointer"
          onClick={inputHandler}
        />
        <AddPostDialogue
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          user={user}
          src={user?.imageUrl}
        />
      </div>
    </div>
  );
};

export default AddPost;
