import { Address } from "../database/entities/Address";
import { AddressRepository } from "../repositories/address.repository";

export class AddressService {
  async create(address: Address): Promise<Address | Error> {
    const repo = new AddressRepository();
    const item = await repo.create(address);
    return item;
  }

  async delete(id: string) {
    const repo = new AddressRepository();
    const address = await repo.getOne(id);

    if (!address) {
      throw new Error("Address does not exists!");
    }

    await repo.delete(id);
  }

  async update(id: string, address: Address) {
    const repo = new AddressRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Address does not exists!");
    }

    await repo.update(id, address);
    return { id, address };
  }

  async getAll() {
    const repo = new AddressRepository();

    const result = await repo.getAll();

    return result;
  }

  async getOne(id: string) {
    const repo = new AddressRepository();
    const address = await repo.getOne(id);

    if (!address) {
      throw new Error("Address does not exists!");
    }

    const result = await repo.getOne(id);

    return result;
  }
}
