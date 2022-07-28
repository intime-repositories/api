import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Address } from "./Address";

@Entity("provider")
export class Provider {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  address_id: string;

  @ManyToOne(() => Address)
  @JoinColumn({name: "address_id"})
  address: Address;

  @Column()
  phone: string;

  @Column()
  birthDate: Date;
}