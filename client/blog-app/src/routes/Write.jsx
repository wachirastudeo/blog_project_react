import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");

  const { getToken } = useAuth;

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post("/todos", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>You must be signed in</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      catagory: formData.get("catagory"),
      content: value,
    };
    console.log(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          type="text"
          name="title"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />

        <div className="flex items-center gap-4">
          <label className="text-sm" htmlFor="">
            Choose a category:
          </label>
          <select
            name="catagory"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          id=""
          placeholder="A short description"
        ></textarea>
        <div className="flex flex-1 ">
          <ReactQuill
            name="content"
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
          />
        </div>
        <button className="bg-blue-800 text-white font-medium rounded-xl  p-2 w-36 ">
          Send
        </button>
      </form>
    </div>
  );
};
export default Write;
