import { it } from "node:test";
import { stringify } from "querystring";
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

  async save(client: Client) {
    await this.repo.save(client);
  }

  async delete(client: Client) {
    await this.repo.delete(client);
  }

  async update(id: string, client: Client) {
    this.repo
      .createQueryBuilder()
      .update(Client)
      .set({
        email: client.email,
        password: client.password,
        fullname: client.fullname,
        phone: client.phone,
        cpf: client.cpf,
        birthDate: client.birthDate,
        photo: client.photo,
      })
      .where({ id })
      .execute();
  }

  async getOne(id: string) {
    const result = await this.repo.findOne({
      where: { id },
      relations: ["address"],
    });

    return result;
  }

  async getAll() {
    const clients = await this.repo.find({ relations: ["address"] });

    return clients;
  }

  async getOneByEmail(email: string) {
    const result = await this.repo.findOne({
      where: { email },
      relations: ["address"],
    });

    return result;
  }
}
