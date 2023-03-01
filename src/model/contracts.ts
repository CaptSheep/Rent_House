import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}