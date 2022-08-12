import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./Address";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  fullname: string;

  @Column({ nullable: true })
  address_id: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  birth_date: string;
}
