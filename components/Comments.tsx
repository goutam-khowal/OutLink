import { IPostDocument } from "@/models/post.model";
import React from "react";
import Comment from "./Comment";
const Comments = ({ post }: { post: IPostDocument }) => {
  return (
    <div>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        post?.comments?.map((comment: any) => {
          return <Comment key={comment._id} comment={comment} />;
        })
      }
    </div>
  );
};

export default Comments;
