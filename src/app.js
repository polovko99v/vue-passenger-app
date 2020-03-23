import express from "express";
import mongoose from "mongoose";
import passengerRouter from './passenger'


const app = express();


const dbName="bookDB";
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const port = 5000;


mongoose.connect (dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{console.log(`Сonnected to DB ${dbUrl}`)})
.catch(error=>{console.log(error)});


app.use(express.json());
app.use(express.urlencoded());


app.use("/passenger", passengerRouter);


app.listen(port);

console.log(`Server started at http://localhost:${port}`);