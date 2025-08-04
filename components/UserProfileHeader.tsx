// import React from "react";
// import ProfilePhoto from "./shared/ProfilePhoto";
// import type { IPostDocument } from "@/models/post.model";

// const UserProfileHeader = ({ user }: { user: IPostDocument }) => {
//   console.log(user);
//   const userData = user;
//   return (
//     <div className="bg-white mb-2 mx-2 md:mx-0 rounded-lg border border-gray-300 px-3 py-6 flex flex-col">
//       <div className="w-full flex items-center justify-center">
//         <ProfilePhoto src={userData.profilePhoto} userId={userData.userId} />
//       </div>
//       <div className="flex flex-col items-center ">
//         <h1 className="font-bold text-lg">
//           {userData.firstName + " " + userData.lastName}
//         </h1>
//         <p className="text-sm text-gray-500">@{userData.userName}</p>
//       </div>
//     </div>
//   );
// };

// export default UserProfileHeader;
import ProfilePhoto from "./shared/ProfilePhoto";

// Define the correct user interface for the profile header
interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  profilePhoto?: string;
}

const UserProfileHeader = ({ user }: { user: IUser }) => {
  console.log(user);
  const userData = user;

  return (
    <div className="bg-white mb-2 mx-2 md:mx-0 rounded-lg border border-gray-300 px-3 py-6 flex flex-col">
      <div className="w-full flex items-center justify-center">
        <ProfilePhoto
          src={
            userData.profilePhoto ||
            "/placeholder.svg?height=56&width=56&query=user avatar"
          }
          userId={userData.userId}
        />
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-lg">
          {userData.firstName + " " + userData.lastName}
        </h1>
        <p className="text-sm text-gray-500">@{userData.userName}</p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
