import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Provider } from "./Provider";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: "provider_id" })
  provider: Provider;

  @Column()
  price: number;

  @Column()
  duration: number;
}
