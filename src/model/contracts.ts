import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./users";

@Entity()
export class Contracts {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'int'})
    public userId: number;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'int'})
    public totalPrice: number;
    @Column({type: 'varchar', default : new Date().getHours()})
    public timeStart: string;
    @Column({type: 'varchar',default : new Date().getHours()})
    public timeEnd: string;
    @Column ({type : 'varchar', default : 'Available'})
    public status : string;
    @ManyToOne(type => Users,(user)=>user.contracts)
    user : Users
}