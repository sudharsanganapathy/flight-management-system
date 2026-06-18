import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
<motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
>
  <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

    <div className="flex items-center justify-between px-8 py-4">

      {/* Logo */}

      <Link to="/" className="relative flex items-center gap-3">

        <div className="absolute h-14 w-14 rounded-full bg-blue-500/20 blur-2xl" />

        <span className="relative text-4xl">
          ✈
        </span>

        <h1 className="relative text-3xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Aero
          </span>
          <span className="text-white">
            Vista
          </span>
        </h1>

      </Link>

      {/* Center Nav */}

      <div className="hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">

        <Link
          to="/"
          className="rounded-full px-5 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-blue-400"
        >
          Home
        </Link>

        <Link
          to="/flights"
          className="rounded-full px-5 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-blue-400"
        >
          Flights
        </Link>

        {user && (
          <>
            <Link
              to="/my-bookings"
              className="rounded-full px-5 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-blue-400"
            >
              My Bookings
            </Link>

            <Link
              to="/profile"
              className="rounded-full px-5 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-blue-400"
            >
              Profile
            </Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link
            to="/admin"
            className="rounded-full px-5 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-blue-400"
          >
            Admin Dashboard
          </Link>
        )}

      </div>

      {/* User Section */}

      {user ? (
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="hidden md:block">
              <p className="text-xs text-slate-400">
                Welcome Back
              </p>

              <p className="font-semibold text-white">
                {user.name}
              </p>
            </div>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-2xl border border-red-500/40 bg-red-500/10 px-5 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>

        </div>
      ) : (
        <div className="flex gap-3">

          <Link
            to="/login"
            className="rounded-2xl border border-white/10 px-5 py-3 text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
          >
            Register
          </Link>

        </div>
      )}

    </div>

  </div>
</motion.nav>
  );
};

export default Navbar;