import { MigrationInterface, QueryRunner } from "typeorm"

export class addImageReferencesFieldsProduct1661647377307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE product ADD COLUMN photoName VARCHAR, ADD COLUMN photoKey VARCHAR, ADD COLUMN photoUrl VARCHAR`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
