import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">

      <h1 className="text-9xl font-black text-blue-500">
        404
      </h1>

      <h2 className="mt-4 text-4xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-slate-400">
        Looks like you've taken a wrong flight.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-2xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
      >
        Back Home
      </Link>

    </div>
  );
};

export default NotFound;