import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
const fetchComment = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};
const Comments = ({ postId }) => {
  const { user } = useUser();
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
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };
    mutation.mutate(data);
  };
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12 ">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-8  justify-between w-full "
      >
        <textarea
          name="desc"
          placeholder="Write your comment here"
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="bg-sky-800 text-white px-3 py-4 font-medium rounded-xl">
          send
        </button>
      </form>
      {isPending ? (
        "loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sedding...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {data.map((comment) => {
            <Comment key={comment._id} comment={comment} />;
          })}
        </>
      )}
    </div>
  );
};
export default Comments;
