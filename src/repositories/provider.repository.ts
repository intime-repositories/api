import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Provider } from "../database/entities/Provider";

export class ProviderRepository {
  private repo: Repository<Provider>;
  constructor() {
    this.repo = AppDataSource.getRepository(Provider);
  }

  async create(provider: Provider) {
    const newProvider = this.repo.create(provider);
    await this.repo.save(newProvider);
    return newProvider;
  }

  async update(id: string, provider: Provider) {
    this.repo
      .createQueryBuilder()
      .update(Provider)
      .set(provider)
      .where({ id })
      .execute();
  }

  async save(provider: Provider) {
    await this.repo.save(provider);
  }

  async delete(provider: Provider) {
    await this.repo.delete(provider);
  }

  async getOne(id: string) {
    const result = await this.repo.findOne({
      where: { id },
      relations: ["address", "category"]
    });

    return result;
  }

  async getAll() {
    const result = await this.repo.find({ relations: ["address", "category"] });

    return result;
  }

  async getOneByEmail(email: string) {
    const result = await this.repo.findOne({
      where: { email },
      relations: ["address", "category"],
    });

    return result;
  }
}
