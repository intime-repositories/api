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

  async checkScheduling(providerId, startDate, endDate) {
    const repo = new SchedulingRepository();

    const schedulings = await repo.getConflictingSchedulings(providerId, startDate, endDate);

    if (schedulings?.length === 0)
      return true

    return false
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

  async getAll(user) {
    const repo = new SchedulingRepository();
    const item = await repo.getAll(user);

    return item;
  }
}
