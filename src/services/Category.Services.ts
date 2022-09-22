import { Category } from "../database/entities/Category";
import { CategoryRepository } from "../repositories/category,repository";

export class CategoryService {
  async create(category: Category): Promise<Category | Error> {
    const repo = new CategoryRepository();
    const newProvider = await repo.create(category);

    return newProvider;
  }

  async update(id: string, category: Category) {
    const repo = new CategoryRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Category does not exists!");
    }

    await repo.update(id, category);

    return { id, category };
  }

  async delete(id: string) {
    const repo = new CategoryRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Category does not exists!");
    }

    await repo.delete(id);
  }

  async getOne(id: string) {
    const repo = new CategoryRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Category does not exists!");
    }

    return item;
  }

  async getAll() {
    const repo = new CategoryRepository();
    const item = await repo.getAll();

    return item;
  }
}
