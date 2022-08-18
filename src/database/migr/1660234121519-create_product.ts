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
                  name: "providerId",
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
                {
                  name: "cover",
                  type: "varchar",
                }
              ],
              foreignKeys: [
                {
                  name: "fkProvider",
                  columnNames: ["providerId"],
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
