import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createProduct1660234121519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "product",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "description",
                  type: "varchar",
                },
                {
                  name: "provider_id",
                  type: "uuid",
                },
                {
                  name: "price",
                  type: "numeric",
                },
                {
                  name: "duration",
                  type: "numeric",
                },
              ],
              foreignKeys: [
                {
                  name: "fk_provider",
                  columnNames: ["provider_id"],
                  referencedTableName: "provider",
                  referencedColumnNames: ["id"],
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
