import { Address } from "../database/entities/Address";
import { Provider } from "../database/entities/Provider";
import { AddressRepository } from "../repositories/address.repository";
import { ProviderRepository } from "../repositories/provider.repository";

export class ProviderService {
  async create(provider: Provider): Promise<Provider | Error> {
    const bcrypt = require("bcrypt")
    const repo = new ProviderRepository();
    const addressRepo = new AddressRepository();

    provider.password = bcrypt.hashSync(provider.password, 8);

    const newAddress = await addressRepo.create(provider.address);
    provider.address.id = newAddress.id;

    const newProvider = await repo.create(provider);

    return newProvider;
  }

  async update(provider: Provider) {
    const providerRepo = new ProviderRepository();
    const addressRepo = new AddressRepository();

    if (provider?.address)
      await addressRepo.update(provider.address.id, provider.address)

    await providerRepo.update(provider.id, provider);

    return { provider };
  }

  async delete(provider: Provider) {
    const repo = new ProviderRepository();
    const item = await repo.getOne(provider.id);

    if (!item) {
      throw new Error("Provider does not exists!");
    }

    await repo.delete(item);
  }

  async getOne(id: string) {
    const repo = new ProviderRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Provider does not exists!");
    }

    return item;
  }

  async getAll() {
    const repo = new ProviderRepository();
    const item = await repo.getAll();

    return item;
  }

  async getOneByEmail(email: string) {
    const repo = new ProviderRepository();
    const item = await repo.getOneByEmail(email);

    return item;
  }
}
