import passengerControler from './controler'
import express from 'express'

const passengerRouter = new express.Router();

passengerRouter.get("/init",passengerControler.init);
passengerRouter.get("/",passengerControler.get);
passengerRouter.get("/:id",passengerControler.get_id);
passengerRouter.post("/", passengerControler.post);
passengerRouter.delete("/:id",passengerControler.delete_id);

export default passengerRouter;