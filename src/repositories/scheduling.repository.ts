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
        product: scheduling.product,
      })
      .where({ id })
      .execute();
  }

  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async getOne(id: string) {
    const item = await this.repo.findOne({
      where: { id },
      relations: ["product", "client"],
    });

    return item;
  }

  async getAll(user) {
    let where;

    if (user.role === 'client')
      where = { client: { id: user.id } }
    else
      where = { product: { provider: { id: user.id } } }

    const schedulings = await this.repo.find({
      relations: ["product", "client"],
      where
    });

    return schedulings
  }
}
