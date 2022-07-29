import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Client } from "../database/entities/Client";

export class ClientRepository {
  private repo: Repository<Client>;
  constructor() {
    this.repo = AppDataSource.getRepository(Client);
  }

  async create(client: Client) {
    const newClient = this.repo.create(client);
    await this.repo.save(newClient);

    return newClient;
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }

  async update(id: string, client: Client) {
    this.repo
      .createQueryBuilder()
      .update(Client)
      .set({
        email: client.email,
        password: client.password,
        fullname: client.fullname,
        address_id: client.address_id,
      })
      .where({ id })
      .execute();
  }

  async getOne(id: string){
    const client = await this.repo.findOneBy({id})

    return client;
  }

  async getAll(){
    const clients = await this.repo.find();

    return clients;
  }
}
