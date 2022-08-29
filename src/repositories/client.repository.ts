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

  async save(client: Client){
    await this.repo.save(client);
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
        phone: client.phone,
        cpf: client.cpf,
        birthDate: client.birthDate,
        photo: client.photo,
        addressId: client.addressId,
        photoName: client.photoName,
        photoKey: client.photoKey,
        photoUrl: client.photoUrl
      })
      .where({ id })
      .execute();
  }

  async getOne(id: string) {
    const result = await this.repo.findOne({
      where: {id},
      relations: ["address"],
    });

    return result;
  }

  async getAll() {
    const clients = await this.repo.find({ relations: ["address"] });

    return clients;
  }

}
