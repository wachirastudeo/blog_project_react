import Postlistitem from "./Postlistitem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);

  return res.data;
};
const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => fetchPosts(),
  });
  if (error) return "An error has occurred: " + error.message;

  if (isPending) return "Loading...";
  console.log(data);
  return (
    <div className="">
      <Postlistitem />
      <Postlistitem />
      <Postlistitem />

      <Postlistitem />
      <Postlistitem />
      <Postlistitem />
    </div>
  );
};
export default PostList;
