import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/user.repository";

const repository = new UserRepository();

async function checkEmailExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const exist = await repository.checkEmail(email);
  if (exist) {
    return res.status(409).json({ error: "Email já registrado" });
  }

  next();
}

export default checkEmailExist;
