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
                  name: "phone",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "birthDate",
                  type: "date",
                  isNullable: true,
                },
                {
                  name: "photo",
                  type: "varchar",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
