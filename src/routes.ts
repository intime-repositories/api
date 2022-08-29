import { Router } from "express";
import { AddressController } from "./controllers/AddressController";
import { ClientController } from "./controllers/ClientController";
import { LoginController } from "./controllers/LoginController";
import { ProductController } from "./controllers/ProductController";
import { ProviderController } from "./controllers/ProviderController";
import { SchedulingController } from "./controllers/SchedulingController";
import { Upload } from "./middlewares/upload";
import multer from "multer";

const multerConfig = require("./config/multer");
const auth = require("./middlewares/auth");
const routes = Router();
const upload = new Upload();
const address = new AddressController();
const client = new ClientController();
const provider = new ProviderController();
const scheduling = new SchedulingController();
const product = new ProductController();

routes.post("/login", new LoginController().login);

// Address routes
routes.post("/address", auth, address.create);
routes.get("/address", address.getAll);
routes.get("/address/:id", address.getOne);
routes.put("/address/:id", address.update);
routes.delete("/address/:id", auth, address.delete);

// Client routes
routes.post("/client/signup", client.create);
routes.get("/client", client.getAll);
routes.get("/client/:id", client.getOne);
routes.put(
  "/client/:id",
  multer(multerConfig).single("file"),
  upload.profilePic,
  client.update
);
routes.delete("/client/:id", client.delete);

// Provider routes
routes.post("/provider/signup", provider.create);
routes.get("/provider", provider.getAll);
routes.get("/provider/:id", provider.getOne);
routes.put(
  "/provider/:id",
  multer(multerConfig).single("file"),
  upload.profilePic,
  provider.update
);
routes.delete("/provider/:id", provider.delete);

// Scheduling routes
routes.post("/scheduling", scheduling.create);
routes.get("/scheduling", scheduling.getAll);
routes.get("/scheduling/:id", scheduling.getOne);
routes.put("/scheduling/:id", scheduling.update);
routes.delete("/scheduling/:id", scheduling.delete);

// Products routes
routes.post("/product", product.create);
routes.get("/product", product.getAll);
routes.get("/product/:id", product.getOne);
routes.put(
  "/product/:id",
  multer(multerConfig).single("file"),
  upload.productPic,
  product.update
);
routes.delete("/product/:id", product.delete);

export { routes };
