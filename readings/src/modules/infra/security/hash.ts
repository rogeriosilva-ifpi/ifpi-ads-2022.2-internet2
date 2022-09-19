import { compare, hash } from 'bcryptjs';

export class HashProvider{

    public static async hash(message: string){
        return await hash(message, 10);
    }

    public static async compare(message: string, hashed: string){
        return await compare(message, hashed);
    }
}