import { Scheduling } from "../database/entities/Scheduling";
import { SchedulingRepository } from "../repositories/scheduling.repository";

export class SchedulingService {
  async create(scheduling: Scheduling): Promise<Scheduling | Error> {
    const repo = new SchedulingRepository();
    const newProvider = await repo.create(scheduling);

    return newProvider;
  }

  async update(id: string, scheduling: Scheduling) {
    const repo = new SchedulingRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Scheduling does not exists!");
    }

    await repo.update(id, scheduling);

    return { id, scheduling };
  }

  async delete(id: string) {
    const repo = new SchedulingRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Scheduling does not exists!");
    }

    await repo.delete(id);
  }

  async getOne(id: string) {
    const repo = new SchedulingRepository();
    const item = await repo.getOne(id);

    if (!item) {
      throw new Error("Scheduling does not exists!");
    }

    return item;
  }

  async getAll() {
    const repo = new SchedulingRepository();
    const item = await repo.getAll();

    return item;
  }
}
