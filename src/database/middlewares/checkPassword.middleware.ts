import { Request, Response, NextFunction } from "express";

export default function checkPasswords(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password, repassword } = req.body;

  if (password !== repassword) {
    return res.status(401).json({
      success: false,
      message: "As senhas não conferem!",
    });
  }

  next();
}
