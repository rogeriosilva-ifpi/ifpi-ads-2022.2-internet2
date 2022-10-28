import { AppDataSource } from "../../../data-source";

function upTypeORM(){
     AppDataSource.initialize().catch(error => {
        console.error(`Error on startup TypeORM --> ${error}`)
    })
}

upTypeORM()
