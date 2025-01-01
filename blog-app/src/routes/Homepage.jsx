import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 ">
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <span>|</span>
        <span className="text-blue-400">Blogs and Article</span>
      </div>
      <div className="flex items-center justify-between">
        {/* title */}
        <div>
          <h1 className="text-2xl text-gray-800 md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        {/* antimated button */}
        <Link to="/write" className="hidden md:block relative ">
          <svg
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animateButton "
          >
            <path
              id="circlePath"
              d="M 100 100 m -75,0 a 75,75 0 1 ,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset={"00%"}>
                Write Your Story
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Write Your idea
              </textPath>
            </text>
          </svg>

          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Featrured post  */}
      {/* Post List  */}
    </div>
  );
};
export default Homepage;
