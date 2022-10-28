import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTaskAndUserEntities1666896938361 implements MigrationInterface {
    name = 'AddTaskAndUserEntities1666896938361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_profile_enum" AS ENUM('USER', 'MANAGER')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "profile" "public"."user_profile_enum" NOT NULL DEFAULT 'USER', CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_profile_enum"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
