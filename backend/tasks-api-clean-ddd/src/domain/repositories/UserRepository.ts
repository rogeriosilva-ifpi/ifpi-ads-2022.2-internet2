import { User } from "../entities/User";
import { CrudRepository } from "./CrudRepository";


export interface UserRepository extends CrudRepository<User>{
    exists(username: string): Promise<boolean>
}