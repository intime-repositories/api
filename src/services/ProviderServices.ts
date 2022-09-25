import { Provider } from "../database/entities/Provider";
import { ProviderRepository } from "../repositories/provider.repository";

export class ProviderService {
  async create(provider: Provider): Promise<Provider | Error> {
    const bcrypt = require("bcrypt")
    const repo = new ProviderRepository();

    provider.password = bcrypt.hashSync(provider.password, 8);
    
    const newProvider = await repo.create(provider);

    

    return newProvider;
  }

  async update(provider: Provider) {
    const providerRepo = new ProviderRepository();
    const providerExists = await providerRepo.getOne(provider.id);

    if (!providerExists) {
      throw new Error("Provider does not exists!");
    }

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
  
  async getOneByEmail(email: string){
    const repo = new ProviderRepository();
    const item = await repo.getOneByEmail(email);

    return item;
  }
}
