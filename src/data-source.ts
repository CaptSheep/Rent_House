
import {DataSource} from "typeorm";
import "reflect-metadata";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1MasterChef*",
    database: "Rent_House",
    synchronize: false,
    entities: ["dist/src/model/*.js"]
})