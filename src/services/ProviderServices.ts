import { Address } from "../database/entities/Address";
import { Provider } from "../database/entities/Provider";
import { AddressRepository } from "../repositories/address.repository";
import { ProviderRepository } from "../repositories/provider.repository";

export class ProviderService {
  async create(provider: Provider): Promise<Provider | Error> {
    const bcrypt = require("bcrypt")
    const repo = new ProviderRepository();

    provider.password = bcrypt.hashSync(provider.password, 8);
    
    const newProvider = await repo.create(provider);

    

    return newProvider;
  }

  async update(provider: Provider, address: Address) {
    const providerRepo = new ProviderRepository();
    const addressRepo = new AddressRepository();
    const providerExists = await providerRepo.getOne(provider.id);
    const providerAddress = await addressRepo.getOne(provider.addressId);

    if (!providerExists) {
      throw new Error("Provider does not exists!");
    }

    if(providerAddress){
      await addressRepo.update(providerAddress.id, address)
    } else {
      const newAddress = await addressRepo.create(address);
      provider.addressId = newAddress.id;
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
