import { useLocation, useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        No booking found
      </div>
    );
  }

  const { booking, flight } = state;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-5xl">

          {/* Success Header */}

          <div className="mb-12 text-center">

            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-xl">

              <span className="text-6xl">
                ✓
              </span>

            </div>

            <h1 className="text-5xl font-bold">
              Booking Confirmed
            </h1>

            <p className="mt-4 text-lg text-slate-400">
              Your flight has been successfully reserved.
            </p>

          </div>

          {/* Boarding Pass */}

          <div className="overflow-hidden rounded-[40px] border border-slate-800 bg-white/5 backdrop-blur-2xl">

            <div className="grid lg:grid-cols-3">

              {/* Left Side */}

              <div className="col-span-2 p-10">

                <div className="mb-8 flex items-center justify-between">

                  <div>
                    <p className="text-slate-400">
                      Airline
                    </p>

                    <h2 className="text-3xl font-bold">
                      {flight.airline}
                    </h2>
                  </div>

                  <div className="rounded-full bg-green-500/20 px-5 py-2 text-green-400">
                    Confirmed
                  </div>

                </div>

                {/* Route */}

                <div className="my-12 flex items-center justify-between">

                  <div>

                    <h2 className="text-5xl font-bold">
                      {flight.from}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      Departure
                    </p>

                  </div>

                  <div className="flex flex-1 items-center px-8">

                    <div className="h-[2px] flex-1 bg-slate-700" />

                    <span className="mx-4 text-4xl text-blue-500">
                      ✈
                    </span>

                    <div className="h-[2px] flex-1 bg-slate-700" />

                  </div>

                  <div className="text-right">

                    <h2 className="text-5xl font-bold">
                      {flight.to}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      Arrival
                    </p>

                  </div>

                </div>

                {/* Details */}

                <div className="grid gap-5 md:grid-cols-2">

                  <div className="rounded-2xl bg-slate-800/50 p-5">
                    <p className="text-slate-400">
                      Flight Number
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {flight.flightNumber}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-slate-800/50 p-5">
                    <p className="text-slate-400">
                      Seats
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {booking.seats.join(", ")}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-slate-800/50 p-5">
                    <p className="text-slate-400">
                      Amount Paid
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-blue-400">
                      ₹{booking.totalAmount}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-slate-800/50 p-5">
                    <p className="text-slate-400">
                      Booking Status
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-green-400">
                      Confirmed
                    </h3>
                  </div>

                </div>

              </div>

              {/* Right Side */}

              <div className="border-l border-dashed border-slate-700 bg-slate-900/50 p-10">

                <h3 className="mb-8 text-center text-xl font-bold">
                  AeroVista Pass
                </h3>

                <div className="space-y-8">

                  <div>
                    <p className="text-sm text-slate-400">
                      Passenger
                    </p>

                    <h4 className="text-xl font-semibold">
                      Sudharsan
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Booking ID
                    </p>

                    <h4 className="break-all text-lg font-semibold">
                      {booking._id}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Flight
                    </p>

                    <h4 className="text-xl font-semibold">
                      {flight.flightNumber}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Seats
                    </p>

                    <h4 className="text-xl font-semibold">
                      {booking.seats.join(", ")}
                    </h4>
                  </div>

                </div>

                <div className="mt-12 space-y-4">

                  <button
                    onClick={() => navigate("/my-bookings")}
                    className="w-full rounded-2xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
                  >
                    View My Bookings
                  </button>

                  <button
                    onClick={() => navigate("/flights")}
                    className="w-full rounded-2xl border border-slate-700 py-4 font-semibold transition hover:bg-slate-800"
                  >
                    Explore More Flights
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingSuccess;