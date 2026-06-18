import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data);

    } catch (error) {
      toast.error("Failed to load users");
    }
  };

  const deleteUser = async (id) => {

    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (currentUser._id === id) {
      toast.error("You cannot delete yourself");
      return;
    }

    try {

      const token = localStorage.getItem("token");

      await api.delete(
        `/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("User deleted successfully");

      setUsers(
        users.filter(
          (user) => user._id !== id
        )
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete failed"
      );

    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-center text-5xl font-bold">
          Users Management
        </h1>

        <div className="overflow-hidden rounded-3xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>
                <th className="p-5 text-left">
                  Name
                </th>

                <th className="p-5 text-left">
                  Email
                </th>

                <th className="p-5 text-left">
                  Role
                </th>

                <th className="p-5 text-left">
                  Joined
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user._id}
                  className="border-t border-slate-800 hover:bg-slate-900/50 transition"
                >

                  <td className="p-5">
                    {user.name}
                  </td>

                  <td className="p-5">
                    {user.email}
                  </td>

                  <td className="p-5">

                    <span
                      className={`rounded-full px-4 py-1 text-sm font-semibold ${
                        user.role === "admin"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="p-5">
                    {new Date(
                      user.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-5">

                    <button
                      onClick={() =>
                        deleteUser(user._id)
                      }
                      className="rounded-xl bg-red-600 px-5 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminUsers;