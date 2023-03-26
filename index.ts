import express from 'express';
import {AppDataSource} from "./src/data-source";
import {router} from "./src/router/router";
const cookieParser = require("cookie-parser");
import cors from 'cors';
const app = express();
AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!')
});
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('', router);
app.listen(8080,'localhost', () => {
    console.log('Server is running at port : 8080')
});