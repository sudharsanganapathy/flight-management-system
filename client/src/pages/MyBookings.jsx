import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/bookings/my");
      console.log(response.data);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      await api.put(`/bookings/cancel/${id}`);

      toast.success("Booking Cancelled");

      fetchBookings();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Cancellation failed"
      );
    }
  };

  if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <h1 className="text-2xl font-semibold">
        Loading your journeys...
      </h1>
    </div>
  );
}

const validBookings = bookings.filter(
  (booking) => booking.flight
);

if (validBookings.length === 0) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

      <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative z-10 text-center">

        <div className="mb-8 text-8xl">
          ✈
        </div>

        <h1 className="text-5xl font-bold">
          No Journeys Yet
        </h1>

        <p className="mt-4 text-slate-400">
          Your booked flights will appear here.
        </p>

      </div>

    </div>
  );

}

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

        {/* Header */}

        <div className="mb-16 text-center">

  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
    AeroVista Dashboard
  </p>

  <h1 className="text-6xl font-bold tracking-tight">
    My Journeys
  </h1>

  <p className="mt-5 text-lg text-slate-400">
    {validBookings.length} Booking
    {validBookings.length > 1 ? "s" : ""} Found
  </p>

</div>

        {/* Cards */}
        <div className="space-y-8">

  {validBookings.map((booking) => (

    <div
      key={booking._id}
      className="group overflow-hidden rounded-[36px] border border-slate-800 bg-white/[0.04] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-blue-500/60"
    >

      <div className="grid lg:grid-cols-12">

        {/* Route */}

        <div className="col-span-6 p-8">

          <div className="mb-8 flex items-center justify-between">

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              {booking.flight?.airline}
            </span>

            <span
              className={`rounded-full px-4 py-2 text-sm ${
                booking.bookingStatus === "cancelled"
                  ? "bg-red-500/10 text-red-400"
                  : "bg-green-500/10 text-green-400"
              }`}
            >
              {booking.bookingStatus}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-5xl font-bold">
                {booking.flight?.from}
              </h2>

              <p className="mt-2 text-slate-400">
                Departure
              </p>

            </div>

            <div className="flex flex-1 items-center px-8">

              <div className="h-[2px] flex-1 bg-slate-700" />

              <span className="mx-5 text-4xl text-blue-500">
                ✈
              </span>

              <div className="h-[2px] flex-1 bg-slate-700" />

            </div>

            <div className="text-right">

              <h2 className="text-5xl font-bold">
                {booking.flight?.to}
              </h2>

              <p className="mt-2 text-slate-400">
                Arrival
              </p>

            </div>

          </div>

        </div>

        {/* Details */}

        <div className="col-span-3 p-8">

          <div className="space-y-6">

            <div>
              <p className="text-sm text-slate-400">
                Flight Number
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {booking.flight?.flightNumber}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Seats
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {booking.seats.join(", ")}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Total Amount
              </p>

              <h3 className="mt-2 text-3xl font-bold text-blue-400">
                ₹{booking.totalAmount}
              </h3>
            </div>

          </div>

        </div>

        {/* Actions */}

        <div className="col-span-3 p-8">

          <div className="flex h-full flex-col justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Booking ID
              </p>

              <p className="mt-3 break-all text-xs text-slate-300">
                {booking._id}
              </p>

            </div>

            {booking.bookingStatus !== "cancelled" && (

              <button
                onClick={() => handleCancel(booking._id)}
                className="mt-10 rounded-2xl bg-red-500 px-5 py-4 font-semibold transition hover:bg-red-600"
              >
                Cancel Booking
              </button>

            )}

          </div>

        </div>

      </div>

    </div>

  ))}

</div>
        

      </div>

    </div>
  );

};

export default MyBookings;