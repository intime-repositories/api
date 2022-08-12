import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createClient1660234061457 implements MigrationInterface {

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
                  isNullable: true,
                },
                {
                  name: "password",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "fullname",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "address_id",
                  type: "uuid",
                  isNullable: true,
                },
                {
                  name: "phone",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "birth_date",
                  type: "date",
                  isNullable: true
                }
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
