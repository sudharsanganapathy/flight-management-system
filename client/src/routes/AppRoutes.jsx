import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Flights from "../pages/Flights";
import MyBookings from "../pages/MyBookings";
// import AdminDashboard from "../pages/AdminDashboard";
import FlightDetails from "../pages/flightDetails";
import BookingSuccess from "../pages/BookingSuccess";
// import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddFlight from "../pages/admin/AddFlight";
import ManageFlights from "../pages/admin/ManageFlights";
import EditFlight from "../pages/admin/EditFlight";
import AdminBookings from "../pages/admin/AdminBookings";
import AdminUsers from "../pages/admin/AdminUsers";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/booking-success" element={<BookingSuccess />}/>
      <Route path="/flights/:id" element={<FlightDetails />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/add-flight" element={<AddFlight />} />
      <Route path="/admin/manage-flights" element={<ManageFlights />} />
      <Route path="/admin/edit-flight/:id" element={<EditFlight />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;