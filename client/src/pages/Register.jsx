import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(
        response.data.message || "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-10 text-white">

      {/* Glow Effects */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Card */}

      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl shadow-2xl">

        {/* Logo */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-black">
            <span className="text-blue-500">✈ Aero</span>
            <span>AeroVista</span>
          </h1>

          <p className="mt-3 text-slate-400">
            Create your travel account
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-950 px-4">

              <FaUser className="text-blue-500" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-950 px-4">

              <FaEnvelope className="text-blue-500" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-950 px-4">

              <FaLock className="text-blue-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Confirm Password
            </label>

            <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-950 px-4">

              <FaLock className="text-blue-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold transition hover:scale-[1.02]"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-500 hover:text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;