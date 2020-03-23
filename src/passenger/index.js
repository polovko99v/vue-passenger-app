import passengerControler from './controler'
import express from 'express'

const passengerRouter = new express.Router();
passengerRouter.get("/",passengerControler.get3);
passengerRouter.get("/init",passengerControler.init);

export default passengerRouter;