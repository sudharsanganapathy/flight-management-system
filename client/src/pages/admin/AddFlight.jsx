import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

const AddFlight = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/flights",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Flight Created Successfully ✈️");

      navigate("/admin");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed To Create Flight"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Add New Flight
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >

          <input
            type="text"
            name="airline"
            placeholder="Airline"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="from"
            placeholder="From"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="text"
            name="to"
            placeholder="To"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="datetime-local"
            name="departureTime"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="datetime-local"
            name="arrivalTime"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            type="number"
            name="totalSeats"
            placeholder="Total Seats"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700"
          >
            Create Flight
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddFlight;