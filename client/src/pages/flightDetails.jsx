import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

const FlightDetails = () => {
  const { id } = useParams();

  const [flight, setFlight] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await api.get(`/flights/${id}`);

        setFlight(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlight();
  }, [id]);

  const handleSeatSelect = (seatNumber) => {
  setSelectedSeats((prev) => {
    if (prev.includes(seatNumber)) {
      return prev.filter(
        (seat) => seat !== seatNumber
      );
    }

    return [...prev, seatNumber];
  }); 

};

const handleBooking = async () => {
  if (selectedSeats.length === 0) {
    toast.error("Please select at least one seat");
    return;
  }

  try {
    const response = await api.post("/bookings", {
      flightId: flight._id,
      seats: selectedSeats,
    });

    toast.success("Booking Confirmed ✈️");

    navigate("/booking-success", {
      state: {
        booking: response.data.booking,
        flight,
      },
    });

  } catch (error) {

    toast.error(
      error.response?.data?.message || "Booking Failed"
    );

    console.log("ERROR:", error.response?.data);
    console.log("STATUS:", error.response?.status);
  }
};


  if (!flight) {
    return <h1>Loading...</h1>;
  }

return (
  <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
    <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Airline
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {flight.airline}
          </h1>
        </div>

        <span className="w-fit rounded-full bg-green-500/20 px-5 py-2 text-sm font-medium text-green-400">
          {flight.status}
        </span>

      </div>

      {/* Route */}

      <div className="my-12 flex flex-col items-center justify-center gap-6 md:flex-row">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            {flight.from}
          </h2>

          <p className="mt-2 text-slate-400">
            Departure
          </p>
        </div>

        <div className="flex flex-col items-center">

          <span className="text-5xl text-blue-500">
            ✈
          </span>

          <div className="mt-2 h-[2px] w-32 bg-slate-700 md:w-48"></div>

        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            {flight.to}
          </h2>

          <p className="mt-2 text-slate-400">
            Arrival
          </p>
        </div>

      </div>

      {/* Details */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">
            Flight Number
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {flight.flightNumber}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">
            Available Seats
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {flight.availableSeats}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">
            Departure
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {new Date(
              flight.departureTime
            ).toLocaleString()}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">
            Arrival
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {new Date(
              flight.arrivalTime
            ).toLocaleString()}
          </h3>
        </div>

      </div>


 {/* SELECT YOUR SEATS */}

<div className="mt-10">

  <h2 className="mb-6 text-2xl font-bold">
    Select Your Seats
  </h2>

  <div className="grid grid-cols-4 gap-4">

    {flight.seats.map((seat) => {

      const isSelected =
        selectedSeats.includes(seat.seatNumber);

      return (
        <button
          key={seat._id}
          disabled={seat.status === "booked"}
          onClick={() =>
            handleSeatSelect(seat.seatNumber)
          }
          className={`rounded-xl p-4 font-semibold transition

            ${
              seat.status === "booked"
                ? "bg-red-500 cursor-not-allowed"
                : isSelected
                ? "bg-blue-500"
                : "bg-green-500 hover:scale-105"
            }
          `}
        >
          {seat.seatNumber}
        </button>
      );
    })}

  </div>

</div>

{/* // SELECTED SEATS */}

<div className="mt-6 rounded-2xl bg-slate-800 p-4">

  <p className="font-semibold">
    Selected Seats:
  </p>

  <p className="mt-2 text-blue-400">
    {selectedSeats.length > 0
      ? selectedSeats.join(", ")
      : "No seats selected"}
  </p>

</div>

      {/* Price Section */}

      <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-800/50 p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm text-slate-400">
            Ticket Price
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-500">
            ₹{flight.price}
          </h2>
        </div>

        <button
         onClick={handleBooking}
         className="mt-6 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700"
        >
            Book Flight
        </button>

      </div>

    </div>
  </div>
);
};

export default FlightDetails;