import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany} from "typeorm";
import {Users} from "./users";
import {Posts} from "./posts";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'int'})
    public userId: number;
    @ManyToOne(type => Users,(user)=>user.comments)
    user : Users
    @ManyToMany(type => Posts,(posts)=>posts.comments)
    posts :Posts[]
    @Column({type: 'varchar'})
    public comment: string;


}