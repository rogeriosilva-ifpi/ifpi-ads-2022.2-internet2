import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameAttrAtUserEntity1666897233176 implements MigrationInterface {
    name = 'AddNameAttrAtUserEntity1666897233176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
