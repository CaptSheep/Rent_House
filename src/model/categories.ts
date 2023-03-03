import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Posts} from "./posts";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public name: string;
    @OneToMany(type => Posts,(posts)=>posts.categories)
    posts : Posts
}