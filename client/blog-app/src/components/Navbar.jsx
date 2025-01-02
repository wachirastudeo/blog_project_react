import { useEffect, useState } from "react";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  useAuth,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          path="/logo.png"
          className="w-8 h-8"
        />
        <span>Blog</span>
      </Link>
      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
          {open ? "X" : "="}
        </div>
        {/* Mobile Link list */}
        <div
          className={`w-full h-screen flex flex-col  justify-center items-center absolute top-16 ${
            open ? "-right-0" : "-right-100%"
          }`}
        >
          Menu
        </div>
      </div>
      {/* Desktop Menu */}

      <div className="hidden  md:flex items-center gap-8 lg:gap-12 ">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-sky-500 text-white px-4 py-2 rounded-3xl">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
export default Navbar;
