import { inject, injectable } from "tsyringe";
import { AlreadyUsedUsernameException } from "../../common/exceptions/AlreadyUsedUsernameException";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { INJECTS } from "../../infrastructure/ioc-container";
import { CriptoProvider } from "../../infrastructure/providers/CriptoProvider/models";

interface SignupRequestModel{
    name: string
    username: string
    password: string
}

// type SignupRequestModel = Omit<User, 'id'>

/*
interface SignupResponseModel{
    user: User
}*/

@injectable()
export class SignupCommand{

    constructor(
        @inject(INJECTS.USER_REPO)
        private userRepository: UserRepository,
        @inject(INJECTS.CRIPTO_PROVIDER)
        private criptoProvider: CriptoProvider
        ){}

    async execute(request: SignupRequestModel): Promise<User>{

        throw new Error("Erro Fake!");
        

        // failfast
        if (await this.userRepository.exists(request.username)){
            // throw Error('Já existe um usuário com este username')
            // throw new HTTPException(400, 'Já existe um usuário com este username')
            // throw new BadRequestException('Já existe um usuário com este username')
            throw new AlreadyUsedUsernameException()
        }

        const user_ = new User()
        Object.assign(user_, request)
        user_.password = this.criptoProvider.hash(request.password)

        return this.userRepository.save(user_);
    }

}