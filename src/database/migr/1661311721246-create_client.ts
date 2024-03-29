import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createClient1661311721246 implements MigrationInterface {

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
                  isUnique: true
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
                  name: "cpf",
                  type: "varchar",
                  isNullable: true,
                  isUnique: true
                },
                {
                  name: "phone",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "birthDate",
                  type: "date",
                  isNullable: true
                },
                {
                  name: "photo",
                  type: "varchar",
                },
                {
                  name: "addressId",
                  type: "uuid",
                  isNullable: true
                }
              ],
              foreignKeys: [
                {
                  name: "fkAddress",
                  columnNames: ["addressId"],
                  referencedTableName: "address",
                  referencedColumnNames: ["id"],
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
