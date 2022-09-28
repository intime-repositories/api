import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./Address";
import { Category } from "./Category";

@Entity("provider")
export class Provider {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  fullname: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true, unique: true })
  cpf: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(() => Address)
  address: Address;
  
  @ManyToOne(() => Category)
  category: Category;
}
