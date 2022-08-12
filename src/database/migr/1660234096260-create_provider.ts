import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createProvider1660234096260 implements MigrationInterface {

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
                  name: "birthDate",
                  type: "date",
                  isNullable: true,
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
