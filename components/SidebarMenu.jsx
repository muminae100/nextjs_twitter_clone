import { HomeIcon } from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";

const menus = [
    {
        icon: HomeIcon,
        text: "Home",
        active: true
    },
    {
        icon: HashtagIcon,
        text: "Explore",
        active: false
    },
    {
        icon: BellIcon,
        text: "Notifications",
        active: false
    },
    {
        icon: InboxIcon,
        text: "Messages",
        active: false
    },
    {
        icon: BookmarkIcon,
        text: "Bookmarks",
        active: false
    },
    {
        icon: ClipboardIcon,
        text: "Lists",
        active: false
    },
    {
        icon: UserIcon,
        text: "Profile",
        active: false
    },
    {
        icon: DotsCircleHorizontalIcon,
        text: "More",
        active: false
    }
];

const SidebarMenu = () => {
  return (
    <div className="mt-4 mb-2.5 xl:items-start">
    {menus.map((menu, index) => <SidebarMenuItem key={index} text={menu.text} Icon={menu.icon} active={menu.active}/>)}
    </div>
  )
}

export default SidebarMenu;