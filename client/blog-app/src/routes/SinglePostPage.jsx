import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail  */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            illo.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Write by </span>
            <Link className="text-sky-600">John Doe</Link>
            <span>on </span>
            <Link>Web Design</Link>
          </div>
          <p className="text-gray-600 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            necessitatibus autem distinctio repellat tenetur minima accusantium,
            nemo temporibus molestiae alias?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src="postImg.jpeg"
            className="rounded-2xl object-cover "
            w="600"
          />
        </div>
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum quae dicta voluptatibus minus voluptatum accusamus placeat
            porro tenetur velit sunt facere minima consequatur earum temporibus,
            nesciunt iste quia ab vero facilis suscipit. Aperiam cupiditate
            fuga, dignissimos dicta id repudiandae tenetur in ea illo, maiores
            minus obcaecati labore. Doloribus dignissimos repellat omnis
            accusamus, obcaecati impedit minima dolore possimus rerum quisquam
            cumque libero ea, nisi tempora consequuntur porro odit blanditiis
            velit ut facilis ad, vero aperiam. Iure blanditiis mollitia deserunt
            repellendus delectus praesentium neque, quod nesciunt laborum atque
            quos totam veniam animi officiis at quae veritatis dignissimos
            aliquam? Odit, hic iusto.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className=" flex items-center gap-8">
            <Image
              src="userImg.jpeg"
              className="rounded-full object-cover w-12 h-12"
              w="48"
              h="48"
            />
            <Link className="font-semibold">John Doe</Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
            quod?
          </p>
          <div className="flex gap-2">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>

          <PostMenuAction />
          <div>
            <h1 className="mt-8 mb-2 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
              <span className="underline cursor-pointer">All</span>
              <span className="underline cursor-pointer">Web Design</span>
              <span className="underline cursor-pointer">Development</span>
              <span className="underline cursor-pointer">Databases</span>
              <span className="underline cursor-pointer">Search Engines</span>
              <span className="underline cursor-pointer">Marketing</span>
            </div>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      {/* comment  */}
      <Comments />
    </div>
  );
};
export default SinglePostPage;
