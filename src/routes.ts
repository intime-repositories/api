import { Router } from "express";
import { AddressController } from "./controllers/AddressController";
import { ClientController } from "./controllers/ClientController";
import { LoginController } from "./controllers/LoginController";
import { ProductController } from "./controllers/ProductController";
import { ProviderController } from "./controllers/ProviderController";
import { SchedulingController } from "./controllers/SchedulingController";
import { CategoryController } from "./controllers/CategoryController";
import { Upload } from "./middlewares/s3";
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
const category = new CategoryController();

// Login route
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
routes.get("/client/:id", auth, client.getOne);
routes.put("/client/:id", auth, client.update);
routes.delete("/client/:id", auth, client.delete);

// Provider routes
routes.post("/provider/signup", provider.create);
routes.get("/provider", auth, provider.getAll);
routes.get("/provider/:id", auth, provider.getOne);
routes.put("/provider/:id", auth, provider.update);
routes.delete("/provider/:id", auth, provider.delete);

// Scheduling routes
routes.post("/scheduling", auth, scheduling.create);
routes.get("/scheduling", auth, scheduling.getAll);
routes.get("/scheduling/:id", auth, scheduling.getOne);
routes.put("/scheduling/:id", auth, scheduling.update);
routes.delete("/scheduling/:id", auth, scheduling.delete);
routes.post("/scheduling/check", scheduling.checkScheduling);

// Products routes
routes.post("/product", auth, product.create);
routes.get("/product", auth, product.getAll);
routes.get("/product/:id", auth, product.getOne);
routes.put("/product/:id", auth, product.update);
routes.delete("/product/:id", auth, product.delete);

// Category routes
routes.post("/category", auth, category.create);
routes.get("/category", category.getAll);
routes.get("/category/:id", auth, category.getOne);
routes.put("/category/:id", auth, category.update);
routes.delete("/category/:id", auth, category.delete);

// Image upload
routes.post(
  "/upload",
  // auth,
  multer(multerConfig).single("file"),
  upload.pictureLocation
);

export { routes };
