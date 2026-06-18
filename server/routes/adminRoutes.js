const express = require("express");

const { getDashboard, getAllBookings, getAllUsers, deleteUser} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  admin,
  getDashboard
);

router.get(
  "/bookings",
  protect,
  admin,
  getAllBookings
);

router.get(
  "/users",
  protect,
  admin,
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  admin,
  deleteUser
);

module.exports = router;