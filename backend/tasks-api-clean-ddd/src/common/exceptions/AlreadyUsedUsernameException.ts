import { BadRequestException } from "./BadRequestException";

export class AlreadyUsedUsernameException extends BadRequestException{

    constructor(){
        super('Username já utilizado!. Selecione outro!')
    }

}