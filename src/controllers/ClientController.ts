import { Request, Response } from "express";
import { ClientService } from "../services/ClientServices";

export class ClientController {
  async create(request: Request, response: Response) {
    try {
      const newClient = request.body;
      const service = new ClientService();

      const result = await service.create(newClient);
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const {id} = request.params;
      const client = request.body;
      const service = new ClientService();
      client.id = id;
      const result = await service.update(client);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const client = request.body;
      const service = new ClientService();

      await service.delete(client);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new ClientService();
      const result = await service.getOne(id);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new ClientService();
      const result = await service.getAll();

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
