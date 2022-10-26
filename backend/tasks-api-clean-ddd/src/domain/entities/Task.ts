import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    done: boolean
}