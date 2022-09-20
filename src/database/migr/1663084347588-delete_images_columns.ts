import { MigrationInterface, QueryRunner } from "typeorm"

export class deleteImagesColumns1663084347588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE client DROP COLUMN "photoKey", DROP COLUMN "photoName"`)
        await queryRunner.query(`ALTER TABLE provider DROP COLUMN "photoKey", DROP COLUMN "photoName"`)
        await queryRunner.query(`ALTER TABLE product DROP COLUMN "photoKey", DROP COLUMN "photoName"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
