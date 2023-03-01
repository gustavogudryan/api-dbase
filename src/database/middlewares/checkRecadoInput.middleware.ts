import { Request, Response, NextFunction } from "express";

export default function checkRecadoInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { titulo, descricao } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({
      success: false,
      message: "Sem informação",
    });
  }

  next();
}
