import { useState } from "react";
import PostList from "../components/PostList.jsx";
import SideMenu from "../components/SideMenu.jsx";
const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-sky-600 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden "
      >
        {open ? "close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div className={` ${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
export default PostListPage;
