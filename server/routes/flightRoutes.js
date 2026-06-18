const express = require("express");

const { createFlight, getFlights, searchFlights, updateFlight, deleteFlight, getFlightById } = require("../controllers/flightController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");


const router = express.Router();


router.post("/", protect, admin, createFlight);

router.get("/", getFlights);

router.get("/search", searchFlights);

router.get("/:id", getFlightById);

router.put("/:id", protect, admin, updateFlight);

router.delete("/:id", protect, admin, deleteFlight);


module.exports = router;