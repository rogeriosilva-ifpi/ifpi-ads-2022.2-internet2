import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";

interface UserListQueryRequestModel{
    user: User
}

interface UserListQueryResponseModel{
    users: User[]
}


export class UserListQuery{

    constructor(private userRepository: UserRepository){}


    public async execute(request: UserListQueryRequestModel): Promise<UserListQueryResponseModel>{

        const users = await this.userRepository.getAll()

        return { users }
    }
}