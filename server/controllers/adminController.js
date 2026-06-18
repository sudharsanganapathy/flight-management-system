const User = require("../models/User");
const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalFlights = await Flight.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const revenueData = await Booking.aggregate([
      {
        $match: {
          bookingStatus: "confirmed",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const revenue =
      revenueData.length > 0
        ? revenueData[0].totalRevenue
        : 0;

    res.json({
      totalUsers,
      totalFlights,
      totalBookings,
      revenue,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL BOOKINGS

const getAllBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate(
        "flight",
        "airline flightNumber from to price"
      );

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET ALL USERS

const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE USER

const deleteUser = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


module.exports = {
  getDashboard,
  getAllBookings,
  getAllUsers,
  deleteUser
};