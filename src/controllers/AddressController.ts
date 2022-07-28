import {Request, response, Response} from "express"
import { AddressService } from "../services/AddressServices";


export class AddressController{

    async create(request: Request, response: Response){
        const address = request.body;

        const service = new AddressService()

        const result = await service.create(address);

        return response.json(result);
    }
}