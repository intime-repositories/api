import { MoreThanOrEqual, Repository } from "typeorm";
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

  async getConflictingSchedulings(providerId: string, startDate, endDate) {
    return await this.repo
      .createQueryBuilder("scheduling")
      .innerJoinAndSelect("provider", "p", "p.id = :providerId", { providerId: providerId })
      .where("(:startDate <= scheduling.endDate and :startDate >= scheduling.startDate) or (:startDate <= scheduling.startDate and :endDate > scheduling.startDate)", { startDate, endDate })
      .getMany()
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
    const now = new Date();

    if (user.role === 'client')
      where = { client: { id: user.id } }
    else
      where = { product: { provider: { id: user.id } } }

    const schedulings = await this.repo.find({
      relations: ["product", "client", "product.provider", "product.provider.category"],
      where: { ...where, endDate: MoreThanOrEqual(now) }
    });

    return schedulings
  }
}
