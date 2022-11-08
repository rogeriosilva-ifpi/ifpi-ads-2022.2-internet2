import { Maybe } from "../../common/type_utils"

// DDD Repository Pattern
export interface CrudRepository<T>{
    save(obj: T): Promise<T>
    getById(id: number):Maybe<T>
    getAll(): Promise<T[]>
    delete(obj: T): Promise<void>
}