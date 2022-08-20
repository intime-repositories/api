import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Product } from "./Product";


@Entity("scheduling")
export class Scheduling {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column()
  payment: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Client)
  @JoinColumn({name: "clientId"})
  client: Client;

  @ManyToOne(() => Product)
  @JoinColumn({name: "productId"})
  product: Product;

}