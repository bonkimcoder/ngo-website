import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center h-96 items-center flex-col">
      <h2 className="text-6xl">404-Page Not Found</h2>
      <h3 className="text-3xl my-5">
        Oops! The page you are looking for could not be found
      </h3>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-black uppercase px-4 py-2 rounded font-bold"
      >
        Home-Page
      </Link>
    </div>
  );
};

export default NotFound;
