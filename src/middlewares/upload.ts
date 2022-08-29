import { Client } from "../database/entities/Client";
import { ClientRepository } from "../repositories/client.repository";
import { ProductRepository } from "../repositories/product.repository";
import { ProviderRepository } from "../repositories/provider.repository";
import { ClientService } from "../services/ClientServices";
import { ProductService } from "../services/ProductServices";
import { ProviderService } from "../services/ProviderServices";

export class Upload {
  async profilePic(req, res) {
    const file = req.file;
    const { id } = req.params;
    const clientRepo = new ClientRepository();
    const providerRepo = new ProviderRepository();
    console.log(file)

    async function getUser(user) {
      const clientUser = await clientRepo.getOne(user);
      const providerUser = await providerRepo.getOne(user);

      if (clientUser) {
        return clientUser;
      } else {
        return providerUser;
      }
    }

    const user = await getUser(id);

    if (user instanceof Client) {
      user.photoKey = file.filename;
      user.photoName = file.originalname;
      user.photoUrl = file.destination;
      clientRepo.save(user);
    } else {
      user.photoKey = file.filename;
      user.photoName = file.originalname;
      user.photoUrl = file.location;
      providerRepo.save(user);
    }


    res.end();
  }

  async productPic(req, res) {
    const { originalname, filename, location } = req.file;
    const { id } = req.params;
    const productRepo = new ProductRepository();

    const product = await productRepo.getOne(id);

    product.photoKey = filename;
    product.photoName = originalname;
    product.photoUrl = location;

    await productRepo.save(product);

    res.end();
  }
}
