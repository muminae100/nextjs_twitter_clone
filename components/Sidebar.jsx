import { DotsHorizontalIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
    {/* Logo */}
    <div className="hoverEffect p-0 hover:bg-blue-200 xl:px-1">
        <Image 
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        width={50}
        height={50}
        ></Image>
        {/* <span className="font-bold text-gray-700">Tweeter clone</span> */}
    </div>

    {/* SidebarMenu */}
    <SidebarMenu />

    {/* Button */}
    <button className="bg-blue-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

    {/* SidebarProfile */}
    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-10 w-10 rounded-full xl:mr-2 object-cover" alt="John Doe" />
        <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">John Doe</h4>
            <p className="text-gray-500">@johndoe</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
    </div>
    </div>
  )
}

export default Sidebar;