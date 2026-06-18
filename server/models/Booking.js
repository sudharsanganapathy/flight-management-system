const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema(
{

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    flight:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Flight",
        required:true
    },


    seats:[
        {
            type:String,
            required:true
        }
    ],


    totalAmount:{
        type:Number,
        required:true
    },


    bookingStatus:{
        type:String,
        enum:[
            "confirmed",
            "cancelled"
        ],
        default:"confirmed"
    },


    paymentStatus:{
        type:String,
        enum:[
            "pending",
            "paid"
        ],
        default:"pending"
    }


},
{
    timestamps:true
});


module.exports = mongoose.model("Booking", bookingSchema);