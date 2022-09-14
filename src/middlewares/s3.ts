import { Client } from "../database/entities/Client";
import { ClientRepository } from "../repositories/client.repository";
import { ProductRepository } from "../repositories/product.repository";
import { ProviderRepository } from "../repositories/provider.repository";
import { ClientService } from "../services/ClientServices";
import { ProductService } from "../services/ProductServices";
import { ProviderService } from "../services/ProviderServices";

export class Upload {

  async pictureLocation(req, res) {
    return res.json(req.file.location)
  }
}


