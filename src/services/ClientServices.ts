import { Client } from "../database/entities/Client";
import { ClientRepository } from "../repositories/client.repository";

export class ClientService {

  async create(client: Client){
    const bcrypt = require("bcrypt");
    const repo = new ClientRepository();
    
    client.password = bcrypt.hashSync(client.password, 8);

    const newClient = await repo.create(client);



    return newClient;
  }

  async delete(id: string) {
    const repo = new ClientRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Client does not exists!");
    }

    await repo.delete(id);
  }

  async update(id: string, client: Client) {
    const repo = new ClientRepository();
    const item = await repo.getOne(id);
    if (!item) {
      throw new Error("Client does not exists!");
    }
    await repo.update(id, client);

    return { id, client };
  }

  async getOne(id: string){
    const repo = new ClientRepository();
    const item = await repo.getOne(id);

    if(!item){
        throw new Error("Client does not exists!")
    }

    return item;
  }

  async getAll(){
    const repo = new ClientRepository();
    const item = await repo.getAll();

    return item;
  }
}