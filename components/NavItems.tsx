import { JSX } from "react";
import {
  Home,
  Users2,
  BriefcaseBusiness,
  MessageCircleMore,
  Bell,
} from "lucide-react";
import Link from "next/link";

type NAVITEMS = {
  src: string;
  icon: JSX.Element;
  text: string;
};
const navItems: NAVITEMS[] = [
  {
    src: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users2 />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Message",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notification",
  },
];

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => (
        <Link
          href={navItem.src}
          key={index}
          className="flex flex-col items-center cursor-pointer text-[#666] hover:text-black"
        >
          <span>{navItem.icon}</span>
          <p className="text-xs">{navItem.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
