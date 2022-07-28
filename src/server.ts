import express from "express";
import "reflect-metadata";
import AppDataSource from "./database/dataSource";

const app = express();
const PORT = process.env.TYPEORM_PORT;

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => 
        console.log(`Server is running on port: ${PORT}.`));
})