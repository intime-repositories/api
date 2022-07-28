import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Address } from "../database/entities/Address";


export class AddressRepository{
    private repo: Repository<Address>;
    constructor() {
        this.repo = AppDataSource.getRepository(Address);
    }

    async create(address: Address){
        const newAddress = this.repo.create(address);
        await this.repo.save(newAddress);

        return newAddress;
    }

    async delete(id: string){
        await this.repo.delete({id});
    }

    async getAll(){
        const item = await this.repo.find();

        return item;
    }
}