import Passenger from "./model"
import mongoose from "mongoose"


const passengerControler = {
    
    get: function (request, response) {
        Passenger.find().populate("passenger")
        .then(passengers=>{
                response.send(passengers);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //get
    
    get_id: function (request, response) {
        Passenger.findById(request.params.id)
        .then(passenger=>{
            if (passenger)
                response.send(passenger);
            else
                response.status(404).send("Не знайдено");  
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //getById
    
    post: function (request, response) {  
        console.log("passenger")    
        const newPassenger = new Passenger(request.body.passenger);
        newPassenger.save()
        .then(passenger=>{
            response.send(passenger);    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//post
    
    delete_id: function (request, response) {
        Passenger.findByIdAndDelete(request.params.id).
        then(passenger=>{
            if (passenger)
                response.send(passenger);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//deleteById
    init: async (req, res) => {
        let n = await Passenger.find().count();
        console.log(n);
        if (n == 0) {
            let passenger1 = new Passenger({
                Name: "Polovko I.I",
                Destination: "USA",
                luggageCount: 1,
                luggageWeight: 15
            });
            await passenger1.save();
            let passenger2 = new Passenger({
                Name: "Prodan I.I",
                Destination: "Tokyo",
                luggageCount: 4,
                luggageWeight: 56
            });
            await passenger2.save();
        }
        res.send("initialised");
    }
}

function isValid(passenger) {
    return passenger && passenger.name && passenger.destination;
}

export default passengerControler;