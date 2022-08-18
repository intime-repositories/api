import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAddress1660233995740 implements MigrationInterface {

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
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
