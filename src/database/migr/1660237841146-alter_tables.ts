import { query } from "express"
import { MigrationInterface, QueryRunner } from "typeorm"

export class alterTables1660237841146 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN email DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN password DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN fullname DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN address_id DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE client ADD COLUMN phone VARCHAR`)
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN phone DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE provider ALTER COLUMN email DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE provider ALTER COLUMN password DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE provider ALTER COLUMN fullname DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE provider ALTER COLUMN address_id DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE provider ALTER COLUMN phone DROP NOT NULL`)
        await queryRunner.query(`ALTER TABLE client ADD COLUMN birth_date DATE`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
