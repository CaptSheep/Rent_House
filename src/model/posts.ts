import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import {Users} from "./users";
import {Comment} from "./comments";
import {Categories} from "./categories";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar',default : ""})
    @ManyToOne(type => Users,(user)=>user.posts)
    user : Users
    @ManyToMany (() =>Comment,(comments)=>comments.posts)
    comments : Comment
    @ManyToOne(()=>Categories,(category)=>category.posts)
    categories : Categories
    public name: string;
    @Column({type: 'int'})
    public price: number;
    @Column({type: 'varchar',default : ""})
    public address: string;
    @Column({type: 'longtext'})
    public description: string;
    @Column({type: 'int'})
    public categoryId: number;
    @Column({type: 'int'})
    public bedroom: number;
    @Column({type: 'int'})
    public bathroom: number;
    @Column({type: 'varchar', default: 'Available'})
    public status: string;
    @Column({type: 'int'})
    public userId: number;
    @Column({type: 'varchar', })
    public avatar: string;
    @Column({type: 'int', default: 0})
    public star: number;

}