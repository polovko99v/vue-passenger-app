import Passenger from "./model"

const passengerControler = {
    get1: (req, res) => {
        Passenger.find((err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
            else {
                res.send(result);
            }
        });
    },
    get2: (req, res) => {
        Passenger.find().then(
            result => res.send(result)
        ).catch(
            err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
    },
    get3: async (req, res) => {
        try {
            let passengerList = await Passenger.find();
            res.send(passengerList);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    init: async (req, res) => {
        let n = await Passenger.find().count();
        console.log(n);
        if (n == 0) {
            let passenger1 = new Passenger({
                Name: "Polovko I.I",
                Destination: "USA",
                luggageCount: 2,
                luggageWeight:15
            });
            await passenger1.save();
            let passenger2 = new Author({
                Name: "Prodan I.I",
                Destination: "Tokyo",
                luggageCount: 5,
                luggageWeight:50
            });
            await passenger2.save();
        }
        res.send("intialised");
    }
};

export default passengerControler;