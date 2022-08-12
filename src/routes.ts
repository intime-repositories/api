import { Router } from "express";
import { AddressController } from "./controllers/AddressController";
import { ClientController } from "./controllers/ClientController";
import { ProductController } from "./controllers/ProductController";
import { ProviderController } from "./controllers/ProviderController";
import { SchedulingController } from "./controllers/SchedulingController";

const routes = Router();

// Address routes
routes.post("/address", new AddressController().create);
routes.get("/address", new AddressController().getAll);
routes.get("/address/:id", new AddressController().getOne);
routes.put("/address/:id", new AddressController().update);
routes.delete("/address/:id", new AddressController().delete);

// Client routes
// cadastro
routes.post("/client/signup", new ClientController().create)
// login
// routes.post("/client/login", new ClientController().login)
routes.get("/client", new ClientController().getAll);
routes.get("/client/:id", new ClientController().getOne);
routes.put("/client/:id", new ClientController().update);
routes.delete("/client/:id", new ClientController().delete);

// Provider routes
// cadastro
routes.post("/provider/signup", new ProviderController().create);
// login
// routes.post("/provider/login", new ProviderController().login)
routes.get("/provider", new ProviderController().getAll);
routes.get("/provider/:id", new ProviderController().getOne);
routes.put("/provider/:id", new ProviderController().update);
routes.delete("/provider/:id", new ProviderController().delete);

// Scheduling routes
routes.post("/scheduling", new SchedulingController().create);
routes.get("/scheduling", new SchedulingController().getAll);
routes.get("/scheduling/:id", new SchedulingController().getOne);
routes.put("/scheduling/:id", new SchedulingController().update);
routes.delete("/scheduling/:id", new SchedulingController().delete);

// Products routes
routes.post("/product", new ProductController().create);
routes.get("/product", new ProductController().getAll);
routes.get("/product/:id", new ProductController().getOne);
routes.put("/product/:id", new ProductController().update);
routes.delete("/product/:id", new ProductController().delete);

export { routes };
