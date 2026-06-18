import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/admin/bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to fetch bookings"
      );

    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-black">
            All Bookings
          </h1>

          <p className="mt-3 text-slate-400">
            Monitor all passenger reservations
          </p>

        </div>

        {/* Table */}

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Passenger
                  </th>

                  <th className="px-6 py-4 text-left">
                    Flight
                  </th>

                  <th className="px-6 py-4 text-left">
                    Route
                  </th>

                  <th className="px-6 py-4 text-left">
                    Seats
                  </th>

                  <th className="px-6 py-4 text-left">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {bookings.map((booking) => (

                  <tr
                    key={booking._id}
                    className="border-t border-slate-800 transition hover:bg-slate-800/40"
                  >

                    <td className="px-6 py-4">

                      <p className="font-semibold">
                        {booking.user?.name}
                      </p>

                      <p className="text-sm text-slate-400">
                        {booking.user?.email}
                      </p>

                    </td>

                    <td className="px-6 py-4">

                      {booking.flight ? (
                        <>
                          <p className="font-semibold">
                            {booking.flight.airline}
                          </p>

                          <p className="text-sm text-slate-400">
                            {booking.flight.flightNumber}
                          </p>
                        </>
                      ) : (
                        <span className="text-red-400">
                          Flight Deleted
                        </span>
                      )}

                    </td>

                    <td className="px-6 py-4">

                      {booking.flight ? (
                        `${booking.flight.from} → ${booking.flight.to}`
                      ) : (
                        "-"
                      )}

                    </td>

                    <td className="px-6 py-4">

                      {booking.seats.join(", ")}

                    </td>

                    <td className="px-6 py-4 font-semibold text-green-400">

                      ₹{booking.totalAmount}

                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          booking.bookingStatus === "confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {booking.bookingStatus}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminBookings;