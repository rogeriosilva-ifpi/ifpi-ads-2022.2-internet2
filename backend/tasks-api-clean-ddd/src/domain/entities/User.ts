import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserProfile{
    USER = 'USER', MANAGER = 'MANAGER'
}

@Entity({orderBy: {'username': 'ASC'}})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?: number

    @Column({nullable: false, length: 200})
    name: string

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column({
        type:'enum',
        enum: UserProfile,
        default: UserProfile.USER
    })
    profile: UserProfile
}