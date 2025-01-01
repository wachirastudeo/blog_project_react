import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-white rounded-xl mb-4">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium ">John Doe</span>
        <span className="text-gray-400 text-sm ">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          libero beatae possimus cupiditate dicta, voluptates recusandae itaque
          eligendi distinctio ipsum nulla. Magni nesciunt alias repellat earum
          veritatis aliquam optio obcaecati.
        </p>
      </div>
    </div>
  );
};
export default Comment;
