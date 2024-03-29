import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createScheduling1661311749100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "scheduling",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "payment",
                  type: "varchar",
                },
                {
                  name: "clientId",
                  type: "uuid",
                },
                {
                  name: "productId",
                  type: "uuid",
                },
                {
                  name: "startDate",
                  type: "timestamp"
                },
                {
                  name: "endDate",
                  type: "timestamp"
                }
              ],
              foreignKeys: [
                {
                  name: "fkClient",
                  columnNames: ["clientId"],
                  referencedTableName: "client",
                  referencedColumnNames: ["id"],
                },
                {
                  name: "fkProduct",
                  columnNames: ["productId"],
                  referencedTableName: "product",
                  referencedColumnNames: ["id"],
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
