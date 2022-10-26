import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTaskEntity1666624883097 implements MigrationInterface {
    name = 'AddTaskEntity1666624883097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
