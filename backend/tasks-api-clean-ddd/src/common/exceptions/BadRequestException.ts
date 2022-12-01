import { HTTPException } from "./HTTPException";

export class BadRequestException extends HTTPException{

    constructor(public readonly menssage: string){
        super(400, menssage)
    }
}