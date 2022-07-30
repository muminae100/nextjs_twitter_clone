import { SparklesIcon } from "@heroicons/react/outline";
import Post from "./Post";
import Input from "./Input";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Coca cola",
      username: "cocacola",
      userImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      postImg: "https://pbs.twimg.com/media/FYQWxLtWIAAg6ZQ?format=jpg&name=small",
      text: "Hello guys",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "William Samoe Ruto",
      username: "rutosamoe",
      userImg: "https://pbs.twimg.com/profile_images/378800000323275501/a354891d9c59e288604fcced58a86d11_400x400.jpeg",
      postImg: "https://pbs.twimg.com/media/FY5WzmHWIAIfEXO?format=jpg&name=360x360",
      text: "Welcome to the winning team",
      timestamp: "2 days ago"
    }
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </div>
  )
}

export default Feed;