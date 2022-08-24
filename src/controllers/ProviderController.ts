import { Request, response, Response } from "express";
import { ProviderService } from "../services/ProviderServices";

export class ProviderController {
  async create(request: Request, response: Response) {
    try {
      const newProvider = request.body;
      const service = new ProviderService();

      const result = await service.create(newProvider);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const provider = request.body;

      const service = new ProviderService();

      await service.update(id, provider);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new ProviderService();

      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new ProviderService();

      const result = await service.getOne(id);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new ProviderService();

      const result = await service.getAll();

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
