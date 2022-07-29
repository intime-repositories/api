import { Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Scheduling } from "../database/entities/Scheduling";

export class SchedulingRepository {
  private repo: Repository<Scheduling>;
  constructor() {
    this.repo = AppDataSource.getRepository(Scheduling);
  }

  async create(scheduling: Scheduling) {
    const newScheduling = this.repo.create(scheduling);

    await this.repo.save(newScheduling);

    return newScheduling;
  }

  async update(id: string, scheduling: Scheduling) {
    this.repo
      .createQueryBuilder()
      .update(Scheduling)
      .set({
        payment: scheduling.payment,
        client: scheduling.client,
        provider: scheduling.provider,
      })
      .where({ id })
      .execute();
  }

  async delete(id: string){
    await this.repo.delete({id});
  }

  async getOne(scheduling: Scheduling){
    const item = await this.repo.findOneBy(scheduling);

    return item;
  }

  async getAll(){
    const schedulings = await this.repo.find();
  }
}
