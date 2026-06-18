import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

const EditFlight = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    totalSeats: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchFlight = async () => {
    try {
      const response = await api.get(`/flights/${id}`);

      const flight = response.data;

      setFormData({
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        from: flight.from,
        to: flight.to,
        departureTime: flight.departureTime.slice(0, 16),
        arrivalTime: flight.arrivalTime.slice(0, 16),
        price: flight.price,
        totalSeats: flight.availableSeats,
      });
    } catch (error) {
      toast.error("Failed to load flight");
      navigate("/admin/manage-flights");
    }
  };

  useEffect(() => {
    fetchFlight();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/flights/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Flight Updated Successfully ✈️");

      navigate("/admin/manage-flights");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed To Update Flight"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Edit Flight
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >

          <input
            type="text"
            name="airline"
            value={formData.airline}
            onChange={handleChange}
            placeholder="Airline"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            placeholder="Flight Number"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="From"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="To"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="datetime-local"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="datetime-local"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="number"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            placeholder="Total Seats"
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-600 py-4 font-semibold transition hover:bg-yellow-700"
          >
            Update Flight
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditFlight;