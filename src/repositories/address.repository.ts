import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Address } from "../database/entities/Address";
import { Client } from "../database/entities/Client";

export class AddressRepository {
    private repo: Repository<Address>;
    constructor() {
        this.repo = AppDataSource.getRepository(Address);
    }
    
    async create(address: Address) {
        const newAddress = this.repo.create(address);
        await this.repo.save(newAddress);
        
        return newAddress;
    }
    
    async update(id: string, address: Address) {
      this.repo
        .createQueryBuilder()
        .update(Address)
        .set({
          street: address.street,
          number: address.number,
          district: address.district,
          city: address.city,
          state: address.state,
          complement: address.complement,
          zip_code: address.zip_code,
        })
        .where({ id })
        .execute();
    }
    
  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async getAll() {
    const item = await this.repo.find();

    return item;
  }

  async getOne(id: string) {
    const item = await this.repo.findOne({where: {id}});

    return item;
  }

}
