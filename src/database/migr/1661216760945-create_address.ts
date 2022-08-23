import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAddress1661216760945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "address",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "street",
                  type: "varchar",
                },
                {
                  name: "number",
                  type: "varchar",
                },
                {
                  name: "district",
                  type: "varchar",
                },
                {
                  name: "city",
                  type: "varchar",
                },
                {
                  name: "state",
                  type: "varchar",
                },
                {
                  name: "complement",
                  type: "varchar",
                },
                {
                  name: "zipCode",
                  type: "varchar",
                },
                {
                  name: "providerId",
                  type: "uuid",
                  isNullable: true
                },
                {
                  name: "clientId",
                  type: "uuid",
                  isNullable: true
                },
              ],
              foreignKeys: [
                {
                  name: "fkProvider",
                  columnNames: ["providerId"],
                  referencedTableName: "provider",
                  referencedColumnNames: ["id"],
                },
                {
                  name: "fkClient",
                  columnNames: ["clientId"],
                  referencedTableName: "client",
                  referencedColumnNames: ["id"],
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
