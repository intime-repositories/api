import { Request, Response } from "express";
import { ProductService } from "../services/ProductServices";
import jwt from "jsonwebtoken";

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

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const product = request.body;

      const service = new ProductService();

      const result = await service.update(id, product);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
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

      const token = request.headers.authorization.split(' ')[1];
      const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const result = await service.getAll(user);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

