import "reflect-metadata";
import express from "express";
import AppDataSource from "./database/dataSource";
import { routes } from "./routes";

const app = express();
const PORT = process.env.TYPEORM_PORT;

app.use(express.json());
app.use(routes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));
});
