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

    async function getUser(user) {
      const clientUser = await clientService.getOne(user);
      const providerUser = await providerService.getOne(user);

      if (clientUser) {
        return clientUser;
      } else {
        return providerUser;
      }
    }

    const user = await getUser(requester);

    bcrypt.compare(requester.password, user.password, (err, result) => {
      if (err) {
        return response.status(401).send({ message: "Falha na autenticação." });
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

      response.status(401).send({ message: "Falha na autenticação" });
    });
  }

}
