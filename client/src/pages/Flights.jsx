import { useEffect, useState } from "react";
import api from "../services/api";
import FlightCard from "../components/flight/FlightCard";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await api.get("/flights");

        setFlights(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlights();
  }, []);


  const filteredFlights = flights.filter((flight) => {
    return (
        flight.from
        .toLowerCase()
        .includes(searchFrom.toLowerCase()) &&
        flight.to
        .toLowerCase()
        .includes(searchTo.toLowerCase())
    );
    });

  return (
    <div className="min-h-screen px-6 py-12">

      <h1 className="mb-10 text-center text-4xl font-bold">
        Available Flights
      </h1>

    <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

  <div className="grid gap-4 md:grid-cols-2">

    <input
      type="text"
      placeholder="From"
      value={searchFrom}
      onChange={(e) => setSearchFrom(e.target.value)}
      className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
    />

    <input
      type="text"
      placeholder="To"
      value={searchTo}
      onChange={(e) => setSearchTo(e.target.value)}
      className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
    />

  </div>

</div>

      <div className="mx-auto max-w-6xl space-y-6">

        {
        filteredFlights.map((flight) => (
            <FlightCard
            key={flight._id}
            flight={flight}
            />
        ))
        }

      </div>

    </div>
  );
};

export default Flights;