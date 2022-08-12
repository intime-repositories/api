import { MigrationInterface, QueryRunner } from "typeorm"

export class alterTables31660238888273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE client ALTER COLUMN fullname DROP NOT NULL`)
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
