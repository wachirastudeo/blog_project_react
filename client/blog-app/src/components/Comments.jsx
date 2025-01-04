import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
const fetchComment = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};
const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComment(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    //add comment
    mutationFn: async (newComment) => {
      const token = await getToken(); // ดึง token
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`, // แนบ token ใน header
          },
        }
      );
    },
    onSuccess: () => {
      // Invalidate and refetch to get the latest data after creating a new comment
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });

      toast.success("Comment has been created");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 ">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center gap-8  justify-between w-full ">
        <textarea
          placeholder="Write your comment here"
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="bg-sky-800 text-white px-3 py-4 font-medium rounded-xl">
          send
        </button>
      </div>
      {data.map((comment) => {
        <Comment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};
export default Comments;
