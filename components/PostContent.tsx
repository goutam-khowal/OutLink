import { IPostDocument } from "@/models/post.model";
import Image from "next/image";
import React from "react";

const PostContent = ({ post }: { post: IPostDocument }) => {
  const postDescription = post.description ? post.description : "";
  const imageUrl = post.imageUrl ? post.imageUrl : "";
  return (
    <div className="my-3 ">
      <p className="my-3 px-4">{postDescription}</p>
      {imageUrl && (
        <div className="w-full bg-gray-200/30 flex justify-center">
          <Image
            className="aspect-auto max-w-full"
            src={imageUrl}
            width={400}
            height={400}
            alt="post-image"
          />
        </div>
      )}
    </div>
  );
};

export default PostContent;
