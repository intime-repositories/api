import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Provider } from "./Provider";


@Entity("scheduling")
export class Scheduling {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column()
  payment: string;

  @ManyToOne(() => Client)
  @JoinColumn({name: "client_id"})
  client: Client;

  @ManyToOne(() => Provider)
  @JoinColumn({name: "provider_id"})
  provider: Provider;

  @Column()
  duration: number;


}