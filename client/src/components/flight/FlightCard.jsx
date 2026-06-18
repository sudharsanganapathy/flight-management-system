import { useNavigate } from "react-router-dom";

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();
  const departureTime = new Date(
    flight.departureTime
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const arrivalTime = new Date(
    flight.arrivalTime
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex-1">

          <div className="mb-4 flex items-center gap-3">

            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
              {flight.status}
            </span>

            <span className="text-slate-400">
              {flight.airline}
            </span>

          </div>

          <div className="flex items-center gap-6">

            <div>
              <h2 className="text-3xl font-bold">
                {flight.from}
              </h2>

              <p className="text-slate-400">
                {departureTime}
              </p>
            </div>

            <div className="flex flex-col items-center">

              <span className="text-2xl text-blue-500">
                ✈
              </span>

              <div className="h-[2px] w-24 bg-slate-700"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {flight.to}
              </h2>

              <p className="text-slate-400">
                {arrivalTime}
              </p>
            </div>

          </div>

          <p className="mt-5 text-slate-400">
            Flight No: {flight.flightNumber}
          </p>

        </div>

        {/* Middle */}

        <div className="text-center">

          <p className="mb-2 text-sm text-slate-400">
            Seats Left
          </p>

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
            {flight.availableSeats}
          </span>

        </div>

        {/* Right */}

        <div className="text-center">

          <p className="text-sm text-slate-400">
            Starting From
          </p>

          <h3 className="mt-2 text-4xl font-bold text-blue-500">
            ₹{flight.price}
          </h3>

          <button
            onClick={() => navigate(`/flights/${flight._id}`)}
            className="mt-5 rounded-2xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
            >
            Select Seats →
          </button>

        </div>

      </div>

    </div>
  );
};

export default FlightCard;