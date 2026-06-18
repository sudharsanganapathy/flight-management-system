const Flight = require("../models/Flight");
const generateSeats = require("../utils/generateSeats");

// CREATE FLIGHT (Admin)

const createFlight = async (req, res) => {

    try {

        const {
            airline,
            flightNumber,
            from,
            to,
            departureTime,
            arrivalTime,
            price,
            totalSeats
        } = req.body;


        const flight = await Flight.create({

            airline,
            flightNumber,
            from,
            to,
            departureTime,
            arrivalTime,
            price,

            seats:generateSeats(),

            availableSeats:180

        });


        res.status(201).json({
            message: "Flight created successfully",
            flight
        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// GET ALL FLIGHTS

const getFlights = async(req,res)=>{

    try{

        const flights = await Flight.find();

        res.json(flights);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// SEARCH FLIGHTS

const searchFlights = async(req,res)=>{

    try{

        const {
            from,
            to,
            airline
        } = req.query;


        let filter = {};


        if(from){
            filter.from = {
                $regex: from,
                $options:"i"
            };
        }


        if(to){
            filter.to = {
                $regex: to,
                $options:"i"
            };
        }


        if(airline){
            filter.airline = {
                $regex: airline,
                $options:"i"
            };
        }


        const flights = await Flight.find(filter);


        res.json(flights);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// UPDATE FLIGHT - ADMIN ONLY

const updateFlight = async(req,res)=>{

    try{

        const { id } = req.params;


        const flight = await Flight.findById(id);


        if(!flight){

            return res.status(404).json({
                message:"Flight not found"
            });

        }


        const updatedFlight =
            await Flight.findByIdAndUpdate(
                id,
                req.body,
                {
                    new:true
                }
            );


        res.json({

            message:"Flight updated successfully",

            flight:updatedFlight

        });



    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// DELETE FLIGHT - ADMIN ONLY


const deleteFlight = async(req,res)=>{

    try{

        const { id } = req.params;


        const flight = await Flight.findById(id);


        if(!flight){

            return res.status(404).json({
                message:"Flight not found"
            });

        }


        await Flight.findByIdAndDelete(id);


        res.json({
            message:"Flight deleted successfully"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// SINGLE FLIGHT


const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({
        message: "Flight not found",
      });
    }

    res.json(flight);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



module.exports = {
    createFlight,
    getFlights,
    searchFlights,
    updateFlight,
    deleteFlight,
    getFlightById
};