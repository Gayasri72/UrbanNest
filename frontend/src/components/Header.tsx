import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-sky-500 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">UrbanNest.com</Link>
        </span>
        <span className="flex space-x-2"></span>
        <Link
          to="/sign-in"
          className="flex bg-sky-950 items-center text-white px-3 font-bold hover:bg-sky-100 hover:text-sky-950"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
