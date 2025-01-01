import { Link } from "react-router-dom";
import Image from "./Image";

const Postlistitem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image  */}
      <div className=" xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* detail  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm ">
          <span>Writeten by </span>
          <Link className="text-sky-600">John Doe</Link>
          <span>on </span>
          <Link className="text-sky-600">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde enim
          provident sint. Beatae molestiae ipsa cupiditate tempore vitae
          laborum? Vel alias, distinctio adipisci sed recusandae illum atque
          minus deserunt quibusdam.
        </p>
        <Link to="/test" className="underline text-sky-600 font-semibold">
          Read more...
        </Link>
      </div>
    </div>
  );
};
export default Postlistitem;
