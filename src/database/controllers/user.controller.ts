import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const repository = new UserRepository();

    const user = await repository.createUser(username, email, password);

    return res.status(200).json({
      success: true,
      data: user,
    });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const repository = new UserRepository();
    const user = await repository.checkLogin(email, password);

    if (!user) {
      return res.status(404).json({ error: "Email ou senha incorreta!" });
    } else {
      return res.status(201).json({
        success: true,
        data: user,
      });
    }
  }
}
