import { Maybe } from "../../../common/type_utils";
import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export class TypeORMUserRepository implements UserRepository{
    save(obj: User): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Maybe<User> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<User[]> {
        return User.find();
    }
    delete(obj: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}