import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div className="outline-3 outline-[#ccc] rounded-full w-fit h-fit">
      <Avatar className="h-14 w-14 cursor-pointer">
        <AvatarImage className="object-cover" src={src} alt={"Profile Photo"} />
        <AvatarFallback>
          <i className="ri-user-fill text-2xl"></i>
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePhoto;
