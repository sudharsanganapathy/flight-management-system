const Booking = require("../models/Booking");
const Flight = require("../models/Flight");


// CREATE BOOKING

const createBooking = async (req, res) => {

    try {

        const {
            flightId,
            seats
        } = req.body;


        const flight = await Flight.findById(flightId);


        if(!flight){

            return res.status(404).json({
                message:"Flight not found"
            });

        }




        // check seats

        const unavailableSeats = flight.seats.filter(
            seat =>
                seats.includes(seat.seatNumber) &&
                seat.status === "booked"
        );


        if(unavailableSeats.length > 0){

            return res.status(400).json({
                message:"Seat already booked"
            });

        }



        // mark seats booked

        flight.seats = flight.seats.map(seat => {

            if(seats.includes(seat.seatNumber)){

                seat.status = "booked";

            }

            return seat;

        });



        flight.availableSeats =
            flight.availableSeats - seats.length;



        await flight.save();



        const totalAmount =
            flight.price * seats.length;



        const booking = await Booking.create({

            user:req.user._id,

            flight:flight._id,

            seats,

            totalAmount

        });



        res.status(201).json({

            message:"Booking confirmed",

            booking

        });



    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// GET USER BOOKINGS

const getMyBookings = async (req,res)=>{

    try{

        const bookings = await Booking
            .find({
                user:req.user._id
            })
            .populate("flight")
            .populate("user","name email");


        res.json(bookings);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};


// CANCEL BOOKING

const cancelBooking = async (req, res) => {

    try {

        const id = req.params.id;


        const booking = await Booking.findById(id);


        if (!booking) {

            return res.status(404).json({
                message: "Booking not found"
            });

        }


        if (
            booking.user.toString() !== req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Not allowed"
            });

        }


        if (booking.bookingStatus === "cancelled") {

            return res.status(400).json({
                message: "Booking already cancelled"
            });

        }


        const flight = await Flight.findById(
            booking.flight
        );


        booking.seats.forEach((bookedSeat) => {

            const seat = flight.seats.find(
                seat =>
                    seat.seatNumber === bookedSeat
            );


            if (seat) {
                seat.status = "available";
            }

        });


        flight.availableSeats += booking.seats.length;


        booking.bookingStatus = "cancelled";


        await flight.save();
        await booking.save();


        res.json({
            message: "Booking cancelled successfully",
            booking
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    createBooking,
    getMyBookings,
    cancelBooking
};