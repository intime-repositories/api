import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  complement: string;

  @Column()
  zip_code: string;
}
