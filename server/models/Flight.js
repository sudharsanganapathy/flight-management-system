const mongoose = require("mongoose");


const seatSchema = new mongoose.Schema({

    seatNumber:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "available",
            "booked"
        ],
        default:"available"
    }

});



const flightSchema = new mongoose.Schema(
{

    airline:{
        type:String,
        required:true
    },


    flightNumber:{
        type:String,
        required:true,
        unique:true
    },


    from:{
        type:String,
        required:true
    },


    to:{
        type:String,
        required:true
    },


    departureTime:{
        type:Date,
        required:true
    },


    arrivalTime:{
        type:Date,
        required:true
    },


    price:{
        type:Number,
        required:true
    },


    seats:[seatSchema],


    availableSeats:{
        type:Number
    },


    status:{
        type:String,
        enum:[
            "scheduled",
            "delayed",
            "cancelled"
        ],
        default:"scheduled"
    }


},
{
    timestamps:true
});


module.exports = mongoose.model("Flight",flightSchema);