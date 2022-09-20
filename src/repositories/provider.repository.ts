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
        cpf: provider.cpf,
        birthDate: provider.birthDate,
        photo: provider.photo,
        addressId: provider.addressId,
      })
      .where({ id })
      .execute();
  }

  async save(provider: Provider) {
    await this.repo.save(provider);
  }

  async delete(provider: Provider) {
    await this.repo.delete(provider);
  }

  async getOne(provider: Provider) {
    const result = await this.repo.findOne({
      where: { id: provider.id },
      relations: ["address"]
    });

    return result;
  }

  async getAll() {
    const result = await this.repo.find({ relations: ["address"] });

    return result;
  }

  async getOneByEmail(email: string) {
    const result = await this.repo.findOne({
      where: { email },
      relations: ["address"],
    });

    return result;
  }
}
