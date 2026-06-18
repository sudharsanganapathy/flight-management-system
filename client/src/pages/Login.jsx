import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    toast.success("Welcome aboard ✈️");

    navigate("/");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Login failed"
    );

  }
};

return (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

    {/* Glow */}

    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

    <form
      onSubmit={handleSubmit}
      className="relative z-10 w-full max-w-md rounded-[32px] border border-slate-800 bg-white/[0.04] p-8 backdrop-blur-xl"
    >

      <div className="mb-8 text-center">

        <div className="mb-4 text-5xl">
          ✈️
        </div>

        <h1 className="text-4xl font-bold text-white">
          AeroVista
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back, captain
        </p>

      </div>

      <div className="space-y-5">

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-white outline-none transition focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-white outline-none transition focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>

      </div>

      <p className="mt-6 text-center text-slate-400">
        New to AeroVista?
        <span
          onClick={() => navigate("/register")}
          className="ml-2 cursor-pointer text-blue-400 hover:text-blue-300"
        >
          Create Account
        </span>
      </p>

    </form>

  </div>
);
};

export default Login;