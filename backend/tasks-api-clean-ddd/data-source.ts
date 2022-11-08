import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { Task } from "./src/domain/entities/Task";
import { User } from "./src/domain/entities/User";

dotenv.config()

console.log(process.env.DATABASE_PASSWORD)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5430,
    username: "docker",
    password: process.env.DATABASE_PASSWORD,
    database: "tasks",
    synchronize: false,
    logging: true,
    entities: [Task, User],
    // entities: ['dist/**/entities/*{.js, .ts}'],
    migrations: ['src/**/migrations/*{.ts,.js}'],
    subscribers: [],
})