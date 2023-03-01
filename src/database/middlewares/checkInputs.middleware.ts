import { Request, Response, NextFunction } from "express";

export default function checkInputs(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password, repassword } = req.body;

  if (!name || !email || !password || !repassword) {
    return res.status(400).json({
      success: false,
      message: "Required fields not filled",
    });
  }

  next();
}
