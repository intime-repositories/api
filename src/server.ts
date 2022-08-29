import * as dotenv from 'dotenv';
import cors from "cors";
import "reflect-metadata";
import express from "express";
import AppDataSource from "./database/dataSource";
import { routes } from "./routes";

dotenv.config();
const app = express();
const PORT = process.env.TYPEORM_PORT;

app.use(
  express.json(),
  cors({
    origin: "*",
  }),
  express.urlencoded({ extended: true }),
  routes
);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));
});
