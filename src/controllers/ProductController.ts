import { Request, response, Response } from "express";
import { ProductService } from "../services/ProductServices";

export class ProductController {
  async create(request: Request, response: Response) {
    try {
      const newProduct = request.body;
      const service = new ProductService();

      const result = await service.create(newProduct);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, reponse: Response) {
    try {
      const { id } = request.params;
      const product = request.body;

      const service = new ProductService();

      await service.update(id, product);

      return response.status(200).end();
    } catch (error) {
      return reponse.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new ProductService();

      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const service = new ProductService();

      const result = service.getOne(id);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new ProductService();

      const result = await service.getAll();

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

