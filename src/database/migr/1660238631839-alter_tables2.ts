import { MigrationInterface, QueryRunner } from "typeorm"

export class alterTables21660238631839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE provider ADD COLUMN birthDate DATE`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
