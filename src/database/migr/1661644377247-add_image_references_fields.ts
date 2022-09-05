import { MigrationInterface, QueryRunner } from "typeorm"

export class addImageReferencesFields1661644377247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE provider ADD COLUMN photoName VARCHAR, ADD COLUMN photoKey VARCHAR, ADD COLUMN photoUrl VARCHAR`)
        await queryRunner.query(`ALTER TABLE client ADD COLUMN photoName VARCHAR, ADD COLUMN photoKey VARCHAR, ADD COLUMN photoUrl VARCHAR`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
