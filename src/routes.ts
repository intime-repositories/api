import { Router } from "express";
import { AddressController } from "./controllers/AddressController";

const routes = Router();

routes.post("/address", new AddressController().create);



export {routes}