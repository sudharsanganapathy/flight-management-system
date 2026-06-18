import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalFlights: 0,
    totalBookings: 0,
    totalUsers: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(data);
      } catch (error) {
        console.error(error);

        toast.error(
            error.response?.data?.message ||
            "Admin access only"
        );
        navigate("/");

      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-bold">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      {/* Heading */}

      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Monitor flights, bookings, users and revenue
        </p>
      </div>

      {/* Cards */}

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Flights */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <h3 className="text-lg text-slate-400">
            Total Flights
          </h3>

          <p className="mt-4 text-5xl font-bold text-blue-500">
            {stats.totalFlights}
          </p>
        </div>

        {/* Bookings */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]">
          <h3 className="text-lg text-slate-400">
            Total Bookings
          </h3>

          <p className="mt-4 text-5xl font-bold text-green-500">
            {stats.totalBookings}
          </p>
        </div>

        {/* Users */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">
          <h3 className="text-lg text-slate-400">
            Total Users
          </h3>

          <p className="mt-4 text-5xl font-bold text-yellow-500">
            {stats.totalUsers}
          </p>
        </div>

        {/* Revenue */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]">
          <h3 className="text-lg text-slate-400">
            Revenue
          </h3>

          <p className="mt-4 text-5xl font-bold text-cyan-500">
            ₹{stats.revenue}
          </p>
        </div>
      </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

        <button
            onClick={() => navigate("/admin/add-flight")}
            className="rounded-2xl border border-blue-500/30 bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
            ✈ Add Flight
        </button>

        <button
            onClick={() => navigate("/admin/manage-flights")}
            className="rounded-2xl border border-green-500/30 bg-green-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
        >
            📋 Manage Flights
        </button>

        <button
            onClick={() => navigate("/admin/bookings")}
            className="rounded-2xl border border-purple-500/30 bg-purple-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
            📑 View Bookings
        </button>

        <button
          onClick={() =>
            navigate("/admin/users")
          }
          className="rounded-2xl border border-orange-500/30 bg-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
        >
          👥 Users
        </button>

        </div>
        
    </div>
  );
};

export default AdminDashboard;