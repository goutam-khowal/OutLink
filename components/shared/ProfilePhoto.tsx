// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Link from "next/link";

// const ProfilePhoto = ({ src, userId }: { src: string; userId: string }) => {
//   return (
//     <div className="outline-3 outline-[#ccc] rounded-full w-fit h-fit">
//       <Link href={"/profile/"+userId}>
//         <Avatar className="h-14 w-14 cursor-pointer">
//           <AvatarImage
//             className="object-cover"
//             src={src}
//             alt={"Profile Photo"}
//           />
//           <AvatarFallback>
//             <i className="ri-user-fill text-2xl"></i>
//           </AvatarFallback>
//         </Avatar>
//       </Link>
//     </div>
//   );
// };

// export default ProfilePhoto;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const ProfilePhoto = ({ src, userId }: { src: string; userId?: string }) => {
  const avatarContent = (
    <Avatar className="h-14 w-14 cursor-pointer">
      <AvatarImage className="object-cover" src={src || "/placeholder.svg"} alt={"Profile Photo"} />
      <AvatarFallback>
        <i className="ri-user-fill text-2xl"></i>
      </AvatarFallback>
    </Avatar>
  )

  return (
    <div className="outline-3 outline-[#ccc] rounded-full w-fit h-fit">
      {userId ? <Link href={"/profile/" + userId}>{avatarContent}</Link> : avatarContent}
    </div>
  )
}

export default ProfilePhoto
