import { Product } from "../database/entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
  async create(product: Product): Promise<Product | Error> {
    const repo = new ProductRepository();
    const newProduct = await repo.create(product);

    return newProduct;
  }

  async update(id: string, product: Product) {
    const repo = new ProductRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Product does not exists!");
    }

    await repo.update(id, product);

    return { id, product };
  }

  async delete(id: string) {
    const repo = new ProductRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Product does not exists!");
    }

    await repo.delete(id);
  }

  async getOne(id: string) {
    const repo = new ProductRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Product does not exists!");
    }

    return item;
  }

  async getAll(user) {
    const repo = new ProductRepository();
    const item = await repo.getAll(user);

    return item;
  }
}
