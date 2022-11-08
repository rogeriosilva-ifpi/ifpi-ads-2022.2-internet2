import { container } from "tsyringe";
import { TypeORMUserRepository } from "../../persistence/typeorm/repositories/TypeORMUserRepository";
import { BCryptProvider } from "../providers/CriptoProvider/implementations/bcrypt";

export enum INJECTS {
    USER_REPO = 'USER_REPOSITORY',
    CRIPTO_PROVIDER = 'CriptoProvider'
}

container.registerSingleton(
    INJECTS.USER_REPO, TypeORMUserRepository)

container.registerSingleton(
    INJECTS.CRIPTO_PROVIDER, BCryptProvider)