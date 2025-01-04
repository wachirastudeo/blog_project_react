import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const Postlistitem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
      {/* detail  */}
      <div className="flex flex-col gap-4 xl:w-1/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm ">
          <span>Writeten by </span>
          <Link className="text-sky-800" to="">
            {post.user.username}
          </Link>
          <span>on </span>
          <Link className="text-sky-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>

        <Link to={`/${post.slug}`} className="underline text-sky-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Postlistitem;
