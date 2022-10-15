import { Address } from "../database/entities/Address";
import { Client } from "../database/entities/Client";
import { AddressRepository } from "../repositories/address.repository";
import { ClientRepository } from "../repositories/client.repository";

export class ClientService {

  async create(client: Client) {
    const bcrypt = require("bcrypt")
    const repo = new ClientRepository();
    const addressRepo = new AddressRepository();

    client.password = bcrypt.hashSync(client.password, 8);

    if (client?.address) {
      const newAddress = await addressRepo.create(client.address);
      client.address.id = newAddress.id;
    }

    const newClient = await repo.create(client);

    return newClient;
  }

  async delete(id: string) {
    const repo = new ClientRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Client does not exists!");
    }

    await repo.delete(item);
  }


  async update(client: Client) {
    const providerRepo = new ClientRepository();
    const addressRepo = new AddressRepository();



    if (client?.address?.id)
      await addressRepo.update(client.address.id, client.address)
    else {
      if (client?.address) {
        const newAddress = await addressRepo.create(client.address);
        client.address.id = newAddress.id;
      }
    }

    await providerRepo.update(client.id, client);

    return { client };
  }

  async getOne(id: string) {
    const repo = new ClientRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Client does not exists!")
    }

    return item;
  }

  async getAll() {
    const repo = new ClientRepository();
    const item = await repo.getAll();

    return item;
  }

  async getOneByEmail(email: string) {
    const repo = new ClientRepository();
    const item = await repo.getOneByEmail(email);

    return item;
  }
}
