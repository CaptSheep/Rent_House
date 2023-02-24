import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar',default : ""})
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