import dubaiImg from "../assets/destination/dubai.jpg";
import singaporeImg from "../assets/destination/singapore.jpg";
import parisImg from "../assets/destination/paris.jpg";
import tokyoImg from "../assets/destination/tokyo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlane } from "react-icons/fa";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const Home = () => {

  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

const handleSearch = () => {
  navigate("/flights", {
    state: {
      from,
      to,
      date,
    },
  });
};

  const destinations = [
  {
    name: "Dubai",
    image: dubaiImg,
    price: "₹18,999",
    description: "Luxury, innovation and iconic skylines.",
    badge: "Popular",
  },
  {
    name: "Singapore",
    image: singaporeImg,
    price: "₹21,999",
    description: "A futuristic city with endless possibilities.",
    badge: "Trending",
  },
  {
    name: "Paris",
    image: parisImg,
    price: "₹34,999",
    description: "Romance, art and timeless beauty.",
    badge: "Luxury",
  },
  {
    name: "Tokyo",
    image: tokyoImg,
    price: "₹39,999",
    description: "Tradition meets cutting-edge technology.",
    badge: "Hot",
  },
];
  return (
    <div>

      {/* Hero Section */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">

  {/* Background Glow */}

  <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

  <div className="absolute right-20 top-60 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

  <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    <div className="text-center">

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">

        <span className="h-2 w-2 rounded-full bg-blue-500"></span>

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Premium Airline Platform
        </p>

      </div>

      <h1 className="mb-8 text-6xl font-black leading-tight md:text-8xl">

        Explore The World

        <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Without Limits
        </span>

      </h1>

      <p className="mx-auto mb-10 max-w-3xl text-xl text-slate-400">

        Book premium flights, discover breathtaking destinations,
        and enjoy a seamless travel experience with AeroVista.

      </p>

      <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">

        <button
          onClick={() => navigate("/flights")}
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
        >
          Explore Flights
        </button>

        <button
          onClick={() => navigate("/my-bookings")}
          className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
        >
          View Bookings
        </button>

      </div>

    </div>

    {/* Stats */}

    <div className="mb-16 grid gap-6 md:grid-cols-4">

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

        <h2 className="mb-2 text-4xl font-bold text-blue-500 transition group-hover:scale-110">
          50K+
        </h2>

        <p className="text-slate-400">
          Happy Travelers
        </p>

      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

        <h2 className="mb-2 text-4xl font-bold text-blue-500">
          120+
        </h2>

        <p className="text-slate-400">
          Destinations
        </p>

      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

        <h2 className="mb-2 text-4xl font-bold text-blue-500">
          500+
        </h2>

        <p className="text-slate-400">
          Flights Daily
        </p>

      </div>

      <div className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

        <h2 className="mb-2 text-4xl font-bold text-blue-500">
          99.9% 
        </h2>

        <p className="text-slate-400">
          On time
        </p>

      </div>

    </div>

    {/* Search Card */}

    {/* Premium Search Card */}

<div className="mx-auto mt-12 max-w-6xl rounded-[36px] border border-slate-800 bg-slate-900/70 p-3 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

  <div className="grid gap-3 md:grid-cols-4">

    {/* From */}

    <div className="group rounded-3xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500">

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Departure
      </p>

      <div className="flex items-center gap-3">

        <FaPlaneDeparture className="text-xl text-blue-500" />

        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Chennai"
          className="w-full bg-transparent text-lg outline-none placeholder:text-slate-500"
        />

      </div>

    </div>

    {/* To */}

    <div className="group rounded-3xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500">

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Destination
      </p>

      <div className="flex items-center gap-3">

        <FaPlaneArrival className="text-xl text-blue-500" />

        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Dubai"
          className="w-full bg-transparent text-lg outline-none placeholder:text-slate-500"
        />

      </div>

    </div>

    {/* Date */}

    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500">

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Travel Date
      </p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full bg-transparent text-lg outline-none"
      />

    </div>

    {/* Search Button */}

    <button
      onClick={handleSearch}
      className="group rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-5 font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
    >

      <span className="flex items-center justify-center gap-2 text-lg">
        Search Flights ✈
      </span>

    </button>

  </div>

</div>

  </div>

</section>


      {/* Stats Section */}

        {/* <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

            <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

                <h2 className="mb-2 text-4xl font-bold text-blue-500">
                50K+
                </h2>

                <p className="text-slate-400">
                Happy Travelers
                </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

                <h2 className="mb-2 text-4xl font-bold text-blue-500">
                120+
                </h2>

                <p className="text-slate-400">
                Global Destinations
                </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

                <h2 className="mb-2 text-4xl font-bold text-blue-500">
                500+
                </h2>

                <p className="text-slate-400">
                Flights Daily
                </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

                <h2 className="mb-2 text-4xl font-bold text-blue-500">
                99.9%
                </h2>

                <p className="text-slate-400">
                Customer Satisfaction
                </p>

            </div>

            </div>

        </div>

        </section> */}


        {/* Featured Destinations */}

<section className="px-6 pt-24 pb-12">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

  <div className="mx-auto max-w-7xl">

    <div className="mb-20 text-center">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-blue-500">
        Curated Destinations
      </p>

      <h2 className="text-5xl font-black md:text-6xl">
        Discover Your Next
        <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Dream Destination
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Hand-picked destinations crafted for unforgettable travel experiences.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {destinations.map((place) => (

        <div
          key={place.name}
          className="group relative overflow-hidden rounded-[32px] border border-slate-800 transition-all duration-500 hover:-translate-y-4 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]"
        >

          {/* Image */}

          <img
            src={place.image}
            alt={place.name}
            className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badge */}

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
            {place.badge}
          </div>

          {/* Content */}

          <div className="absolute bottom-8 left-0 w-full px-6 text-center">

  {/* <p className="mb-2 text-sm font-semibold text-blue-400">
    Starting From {place.price}
  </p> */}

  <h3 className="text-4xl font-black text-white">
    {place.name}
  </h3>

  <p className="mt-4 translate-y-4 text-slate-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
    {place.description}
  </p>

  <button
    className="mt-5 translate-y-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105"
  >
    Explore Now
  </button>

</div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* Premium Boarding Pass */}

<section className="px-6 pt-12 pb-24">

  <div className="mx-auto max-w-7xl">

    <div className="mb-20 text-center">

      <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-500">
        Premium Experience
      </p>

      <h2 className="text-5xl font-black">
        Your Journey Starts Here
      </h2>

      <p className="mt-4 text-lg text-slate-400">
        Fly smarter, faster and more comfortably with AeroVista.
      </p>

    </div>

    <div className="flex justify-center">

      <div className="group relative w-full max-w-5xl overflow-hidden rounded-[40px] border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)]">

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="relative grid lg:grid-cols-3">

          {/* Left */}

          <div className="col-span-2 p-10">

            <p className="mb-4 text-sm uppercase tracking-[4px] text-blue-400">
              Boarding Pass
            </p>

            <div className="mb-10 flex items-center gap-6">

              <div>
                <h2 className="text-5xl font-black">
                  MAA
                </h2>

                <p className="text-slate-400">
                  Chennai
                </p>
              </div>

              <div className="flex flex-1 items-center">

                <div className="h-[2px] flex-1 bg-slate-700"></div>

                <FaPlane className="mx-4 text-3xl text-blue-500" />

                <div className="h-[2px] flex-1 bg-slate-700"></div>

              </div>

              <div className="text-right">
                <h2 className="text-5xl font-black">
                  DXB
                </h2>

                <p className="text-slate-400">
                  Dubai
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

              <div>
                <p className="text-sm text-slate-500">
                  Flight
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  AV102
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Seat
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  12A
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Gate
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  B12
                </h4>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Class
                </p>

                <h4 className="mt-2 text-xl font-bold text-blue-400">
                  Business
                </h4>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative border-l border-dashed border-slate-700 p-10">

            <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-slate-950"></div>

            <div className="absolute -left-5 bottom-10 h-10 w-10 rounded-full bg-slate-950"></div>

            <div className="mb-8 flex justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Departure
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  08:30
                </h3>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-500">
                  Arrival
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  11:45
                </h3>
              </div>

            </div>

            <div className="border-t border-slate-800 pt-6">

              <p className="text-sm text-slate-500">
                Starting From
              </p>

              <h2 className="mt-2 text-5xl font-black text-blue-500">
                ₹12,999
              </h2>

            </div>

            <button
              onClick={() => navigate("/flights")}
              className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition duration-300 hover:scale-105"
            >
              Book This Flight
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  );
};

export default Home;