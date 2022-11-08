import { inject, injectable } from "tsyringe";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { INJECTS } from "../../infrastructure/ioc-container";

interface UserListQueryRequestModel{
    user: User
}

interface UserListQueryResponseModel{
    users: User[]
}

@injectable()
export class UserListQuery{

    constructor(
        @inject(INJECTS.USER_REPO)
        private userRepository: UserRepository){}


    public async execute(request: UserListQueryRequestModel): Promise<UserListQueryResponseModel>{

        const users = await this.userRepository.getAll()

        return { users }
    }
}