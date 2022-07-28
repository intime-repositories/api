import { Address } from "../database/entities/Address";
import { AddressRepository } from "../repositories/address.repository";



export class AddressService {
    async create(address: Address): Promise<Address|Error>{
        const repo = new AddressRepository();
        
        const item = await repo.create(address);
        return item;
    }

    async getAll(){
        const repo = new AddressRepository();

        const result = await repo.getAll();
        
        return result;
    }
}