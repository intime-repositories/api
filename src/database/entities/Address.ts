import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Provider } from "./Provider";

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
  zipCode: string;

  @Column({ nullable: true })
  providerId: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: "providerId" })
  provider: Provider;
}
