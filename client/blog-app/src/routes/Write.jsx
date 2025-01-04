import { useMutation } from "@tanstack/react-query";

import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";

import ReactQuill from "react-quill-new";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken(); // ดึง token
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`, // แนบ token ใน header
        },
      });
    },
    onSuccess: (res) => {
      console.log("Success!");
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      desc: formData.get("desc"),
      catagory: formData.get("catagory"),
      content: value,
    };
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setCover={setCover} setProgress={setProgress}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>

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
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setCover={setImg} setProgress={setProgress}>
              <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                🌆
              </button>
            </Upload>

            <Upload type="video" setCover={setVideo} setProgress={setProgress}>
              <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                ▶️
              </button>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl  p-2 w-36 disabled:bg-sky-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress: " + progress + "%"}
        {/* {mutation.isError && <div>Error: {mutation.error.message}</div>} */}
      </form>
    </div>
  );
};
export default Write;
