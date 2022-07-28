import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createClient1659032803023 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "fullname",
            type: "varchar",
          },
          {
            name: "address_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_address",
            columnNames: ["address_id"],
            referencedTableName: "address",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
