import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createScheduling1660234207472 implements MigrationInterface {

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
                  name: "client_id",
                  type: "uuid",
                },
                {
                  name: "product_id",
                  type: "uuid",
                },
                {
                  name: "duration",
                  type: "numeric",
                },
              ],
              foreignKeys: [
                {
                  name: "fk_client",
                  columnNames: ["client_id"],
                  referencedTableName: "client",
                  referencedColumnNames: ["id"],
                },
                {
                  name: "fk_product",
                  columnNames: ["product_id"],
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
