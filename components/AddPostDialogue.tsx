"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Image, X } from "lucide-react";
import Img from "next/image";
import { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import { createPostAction } from "@/lib/serveractions";
import { IUser } from "@/models/user.model";

const AddPostDialogue = ({
  setIsOpen,
  isOpen,
  src,
  user,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  src: string;
  user: IUser;
}) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const postActionHandler = async (formData: FormData) => {
    const inputText = formData.get("postInputText") as string;
    try {
      await createPostAction(inputText, selectedFile);
    } catch (error) {
      console.log("Error Occured: ", error);
    }
    setInputText("");
    setSelectedFile("");
    setIsOpen(false);
  };

  async function fileChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedFile(dataUrl);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-h-[500px] overflow-y-auto
         overflow-x-hidden"
        onInteractOutside={() => {
          setIsOpen(false);
        }}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <ProfilePhoto src={src} />
            <div>
              <h1>
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-xs">post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={postActionHandler}>
          <div className="grid w-full gap-2">
            <Textarea
              id="postInputText"
              name="postInputText"
              className="border-none text-lg focus-visible:ring-0 h-20"
              placeholder="Type your message here."
              value={inputText}
              onChange={changeHandler}
            />
            {selectedFile.length > 0 && (
              <div className="my-4 w-fit h-fit relative">
                <X
                  className="absolute right-0 bg-black/50 text-white/75 rounded-full hover:bg-gray-500/75
                  hover:text-black/75
                  transition-colors duration-200"
                  onClick={() => {
                    setSelectedFile("");
                  }}
                />
                <Img
                  className="w-full"
                  src={selectedFile}
                  width={400}
                  height={400}
                  alt={"preview-image"}
                />
              </div>
            )}
          </div>
          <DialogFooter className="mt-4">
            <div className="flex items-center gap-4">
              <Input
                ref={fileUploadRef}
                onChange={fileChangeHandler}
                name="image"
                className="hidden"
                accept="image/*"
                type="file"
              />
              <Button>Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          onClick={() => {
            fileUploadRef?.current?.click();
          }}
          variant={"ghost"}
        >
          <Image className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostDialogue;
