import { Maybe } from "../../../common/type_utils";
import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export class TypeORMUserRepository implements UserRepository{

    async exists(username: string): Promise<boolean> {
        const user = await User.findOneBy({username}) 
        return user ? true : false
    }

    async save(obj: User): Promise<User> {
        return await obj.save();
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