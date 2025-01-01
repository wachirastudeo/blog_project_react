import Comment from "./Comment";

const Comments = () => {
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
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;
