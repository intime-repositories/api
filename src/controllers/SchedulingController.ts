import { Request, response, Response } from "express";
import { SchedulingService } from "../services/SchedulingServices";
import jwt from "jsonwebtoken";

export class SchedulingController {
  async create(request: Request, response: Response) {
    try {
      const newScheduling = request.body;
      const service = new SchedulingService();

      const result = await service.create(newScheduling);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const scheduling = request.body;

      const service = new SchedulingService();

      await service.update(id, scheduling);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new SchedulingService();

      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new SchedulingService();

      const result = service.getOne(id);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new SchedulingService();

      const token = request.headers.authorization.split(' ')[1];
      const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const result = await service.getAll(user);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
