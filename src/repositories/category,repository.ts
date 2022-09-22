import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Category } from "../database/entities/Category";

export class CategoryRepository {
  private repo: Repository<Category>;
  constructor() {
    this.repo = AppDataSource.getRepository(Category);
  }

  async create(category: Category) {
    const newCategory = this.repo.create(category);

    await this.repo.save(newCategory);

    return newCategory;
  }

  async update(id: string, category: Category) {
    this.repo
      .createQueryBuilder()
      .update(Category)
      .set(category)
      .where({ id })
      .execute();
  }

  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async getOne(id: string) {
    const item = await this.repo.findOne({
      where: { id },
    });

    return item;
  }

  async getAll() {
    const categories = await this.repo.find();

    return categories
  }
}
