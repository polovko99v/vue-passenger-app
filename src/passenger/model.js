import mongoose, { mongo } from 'mongoose'

const passengerSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Destination:{
        type:String
    },
    luggageCount:{
        type:Number,
        min:0,
        max:100
    },
    luggageWeight:{
        type:Number,
        min:0
    }
});

const Passenger = mongoose.model("Passenger",passengerSchema);
export default Passenger;