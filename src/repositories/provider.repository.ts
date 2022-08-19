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
      .set({
        email: provider.email,
        password: provider.password,
        fullname: provider.fullname,
        phone: provider.phone,
        birthDate: provider.birthDate,
      })
      .where({ id })
      .execute();
  }

  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async getOne(id: string) {
    const result = await this.repo.findOne({
      where: { id },
      relations: ["address"],
    });

    return result;
  }

  async getAll() {
    const result = await this.repo.find({ relations: ["address"] });

    return result;
  }
}
