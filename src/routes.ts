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
routes.get("/address", auth, address.getAll);
routes.get("/address/:id", auth, address.getOne);
routes.put("/address/:id", auth, address.update);
routes.delete("/address/:id", auth, address.delete);

// Client routes
routes.post("/client/signup", client.create);
routes.get("/client", auth, client.getAll);
routes.get("/client/:client", auth, client.getOne);
routes.put(
  "/client/:id", auth,
  // multer(multerConfig).single("file"),
  // upload.profilePic,
  client.update
);
routes.delete("/client/:id", auth,  client.delete);

// Provider routes
routes.post("/provider/signup", provider.create);
routes.get("/provider", auth, provider.getAll);
routes.get("/provider/:id", auth, provider.getOne);
routes.put(
  "/provider/:id",
  auth,
  multer(multerConfig).single("file"),
  upload.profilePic,
  provider.update
);
routes.delete("/provider/:id", auth, provider.delete);

// Scheduling routes
routes.post("/scheduling", auth, scheduling.create);
routes.get("/scheduling", auth, scheduling.getAll);
routes.get("/scheduling/:id", auth, scheduling.getOne);
routes.put("/scheduling/:id", auth, scheduling.update);
routes.delete("/scheduling/:id", auth, scheduling.delete);

// Products routes
routes.post("/product", auth, product.create);
routes.get("/product", auth, product.getAll);
routes.get("/product/:id", auth, product.getOne);
routes.put(
  "/product/:id",
  auth,
  multer(multerConfig).single("file"),
  upload.productPic,
  product.update
);
routes.delete("/product/:id", auth, product.delete);

export { routes };
