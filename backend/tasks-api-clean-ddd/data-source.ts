import { DataSource } from "typeorm";
import { Task } from "./src/domain/entities/Task";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tasks",
    synchronize: false,
    logging: true,
    entities: [Task],
    // entities: ['src/**/entities/*{.js, .ts}'],
    migrations: ['src/**/migrations/*{.ts,.js}'],
    subscribers: [],
})