import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createProvider1659033149541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "provider",
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
                {
                    name: "phone",
                    type: "varchar"
                },
                {
                    name: "birthDate",
                    type: "timestamptz"
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
