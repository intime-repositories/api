import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Product } from "../database/entities/Product";

export class ProductRepository {
  private repo: Repository<Product>;
  constructor() {
    this.repo = AppDataSource.getRepository(Product);
  }

  async create(product: Product) {
    const newProduct = this.repo.create(product);

    await this.repo.save(newProduct);

    return newProduct;
  }

  async save(product: Product){
    await this.repo.save(product);
  }

  async update(id: string, product: Product) {
    this.repo
      .createQueryBuilder()
      .update(Product)
      .set({
        name: product.name,
        description: product.description,
        provider: product.provider,
        price: product.price,
        duration: product.duration,
        photoName: product.photoName,
        photoKey: product.photoKey,
        photoUrl: product.photoUrl
      })
      .where({ id })
      .execute();
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }

  async getOne(id: string) {
    const product = await this.repo.findOne({
      where: { id },
      relations: ["provider"],
    });

    return product;
  }

  async getAll() {
    const products = await this.repo.find({ relations: ["provider"] });

    return products;
  }
}
