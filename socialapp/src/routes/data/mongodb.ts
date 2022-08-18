import { Db, MongoClient } from 'mongodb';

class MongoDatabase{

    private client: MongoClient
    private database?: Db

    constructor(){
        const uri = 'mongodb://localhost:27017'
        this.client = new MongoClient(uri)
    }

    public getInstante(): Db{
        if (!this.database){
            this.database = this.client.db('socialapp')
        }
        return this.database
    }

}

const db = new MongoDatabase().getInstante()

export { db };

