import { Request, response, Response } from "express";
import { AddressService } from "../services/AddressServices";

export class AddressController {
  async create(request: Request, response: Response) {
    try {
      const address = request.body;

      const service = new AddressService();
      const result = await service.create(address);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new AddressService();

      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const address = request.body;
      const service = new AddressService();

      const result = await service.update(id, address);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new AddressService();
      const result = await service.getAll();

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new AddressService();

      const result = await service.getOne(id);

      return response.json(result);
    } catch (error) {
        return response.status(400).json(error.message);
    }
  }
}
