import { ChatIcon, DotsHorizontalIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon } from "@heroicons/react/outline";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img src={post.userImg} alt={post.username} className="h-11 w-11 rounded-full mr-4 object-cover" />

      {/* right section */}
      <div className="w-full">
        {/* header */}
        <div className="flex items-center justify-between w-full">
          {/* post user info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name.length > 10 ? `${post.name.slice(0, 8)}...` : post.name}</h4>
            <span className="text-sm sm:text-[15p]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>

          {/* icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
        </div>

        {/* post text */}
          <p className="text-gray-800 text-[15px sm:text-[16px]] mb-2 w-full">{post.text}</p>
        {/* post image */}
        <img src={post.postImg} alt="post image" className="rounded-2xl mr-2"/>
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>

    </div>
  )
}

export default Post;