import { Request, Response } from "express";
import { ClientService } from "../services/ClientServices";
import { ProviderService } from "../services/ProviderServices";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export class LoginController {
  async login(request: Request, response: Response) {
    const requester = request.body;
    const clientService = new ClientService();
    const providerService = new ProviderService();

    async function getUser(email) {
      const clientUser = await clientService.getOneByEmail(email);
      if (clientUser) return clientUser;

      const providerUser = await providerService.getOneByEmail(email);
      if (providerUser) return providerUser;
      
    }
    const user = await getUser(requester.email);

    bcrypt.compare(requester.password, user.password, (err, result) => {
      if (err) {
        return response.status(401).send({ message: "Not Authorized" });
      }
      if (result) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            fullName: user.fullname,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "3d"
          }
          );
        return response
          .status(200)
          .send({ message: "Autenticado com sucesso", token: token });
      }

      response.status(401).send({ message: "Authetication Error" });
    });
  }

}
