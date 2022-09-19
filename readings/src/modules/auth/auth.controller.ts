import { Request, Response } from "express";
import { db } from "../infra/data/mongo.database";
import { HashProvider } from "../infra/security/hash";
import { User } from "./user.model";

export class AuthController{
    private users

    constructor() {
        this.users = db.collection<User>('users');
    }

    signup = async (req: Request, res: Response) => {

        const {name, login, phone, password} = req.body

        const user = {name, 
            login, phone, 
            password: await HashProvider.hash(password), 
            active: false, active_phone: false
        }

        const foundUser = await this.users.findOne<User>({ login })

        if (foundUser){
            return res.status(400).json({error: 'Email duplicado!'})
        }

        const result = await this.users.insertOne(user);

        return res.json(result)
    }

}