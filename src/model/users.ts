import {Entity,PrimaryGeneratedColumn,Column, OneToMany} from "typeorm";
import {Comment} from "./comments";
import {Posts} from "./posts";
import {Contracts} from "./contracts";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({type:'int'})
    public id : number
    @OneToMany(type => Comment,(comment)=>comment.user)
    comments
    @OneToMany(type => Posts,(post)=>post.user)
    posts
    @OneToMany(type => Contracts,(contract)=>contract.user)
    contracts
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
