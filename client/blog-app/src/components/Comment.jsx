import Image from "./Image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-white rounded-xl mb-4">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        )}
        <span className="font-medium ">{comment.user.username}</span>
        <span className="text-gray-400 text-sm ">
          {format(comment.createdAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};
export default Comment;
