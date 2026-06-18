import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const ManageFlights = () => {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  const fetchFlights = async () => {
    try {
      const response = await api.get("/flights");

      setFlights(response.data);
    } catch (error) {
      toast.error("Failed to fetch flights");
    }
  };

const deleteFlight = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this flight?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    await api.delete(`/flights/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Flight deleted successfully");

    setFlights(
      flights.filter(
        (flight) => flight._id !== id
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
    fetchFlights();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-center text-5xl font-bold">
          Manage Flights
        </h1>

        {flights.length === 0 ? (
          <p className="text-center text-slate-400">
            No Flights Found
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {flights.map((flight) => (

              <div
                key={flight._id}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-blue-500"
              >

                <h2 className="text-2xl font-bold text-blue-400">
                  {flight.airline}
                </h2>

                <p className="mt-3 text-slate-400">
                  Flight No:
                </p>

                <p className="font-semibold">
                  {flight.flightNumber}
                </p>

                <p className="mt-3 text-slate-400">
                  Route
                </p>

                <p className="font-semibold">
                  {flight.from} → {flight.to}
                </p>

                <p className="mt-3 text-slate-400">
                  Price
                </p>

                <p className="text-xl font-bold text-green-400">
                  ₹{flight.price}
                </p>

                <div className="mt-6 flex gap-3">

                <button
                    onClick={() =>
                        navigate(`/admin/edit-flight/${flight._id}`)
                    }
                    className="flex-1 rounded-xl bg-yellow-600 py-3 font-semibold hover:bg-yellow-700"
                >
                    Edit
                </button>

                  <button
                    onClick={() =>
                      deleteFlight(flight._id)
                    }
                    className="flex-1 rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default ManageFlights;