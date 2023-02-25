import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({type:'int'})
    public id : number
    @Column({type: "varchar", default : ''})
    public fullName : string
    @Column({type: "varchar", unique:true})
    public userName : string
    @Column({type: "varchar", default : ''})
    public address : string
    @Column({type: "varchar", default : ''})
    public phoneNumber : string
    @Column({type: "varchar", default : ''})
    public email : string
    @Column({type: "varchar", default : ''})
    public password : string
}
