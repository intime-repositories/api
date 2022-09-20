import { Request, Response } from "express";
import { ClientService } from "../services/ClientServices";
import { ProviderService } from "../services/ProviderServices";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginController {
  async login(request: Request, response: Response) {
    try {
      const requester = request.body;
      const clientService = new ClientService();
      const providerService = new ProviderService();

      async function getUser(email: string) {
        const clientUser = await clientService.getOneByEmail(email);
        if (clientUser) return { ...clientUser, role: "client" };

        const providerUser = await providerService.getOneByEmail(email);
        if (providerUser) return { ...providerUser, role: "provider" };
      }
      const user = await getUser(requester.email);

      bcrypt.compare(requester.password, user.password, (err, result) => {
        if (err) response.status(401).send({ message: "Unauthorized" });

        if (result) {
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              fullName: user.fullname,
              role: user.role,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "3d",
            }
          );
          return response
            .status(200)
            .send({ message: "Successfully logged", token: token });
        }

        response.status(401).send({ message: "Incorrect Password" });
      });
    } catch (error) {
      return response.status(403).send({ message: error.message });
    }
  }
}
