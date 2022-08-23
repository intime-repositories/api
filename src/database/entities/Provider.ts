import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./Address";

@Entity("provider")
export class Provider {
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
  phone: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column()
  photo: string;
}
