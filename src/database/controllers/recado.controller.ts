import { Request, Response } from "express";
import { RecadoRepository } from "../repositories/recado.repository";

export class RecadoController {
  async create(req: Request, res: Response) {
    const { titulo, descricao, userId } = req.body;

    const repository = new RecadoRepository();

    const recado = await repository.createRecado(titulo, descricao, userId);

    return res.status(200).json({
      success: true,
      data: recado,
    });
  }

  async getUserRecados(req: Request, res: Response) {
    const userId = req.query.userId?.toString();

    const repository = new RecadoRepository();

    const recados = await repository.getAllRecados(userId!);

    return res.status(200).json({
      success: true,
      data: recados,
    });
  }

  async updateRecado(req: Request, res: Response) {
    const idRecado = req.params.idRecado?.toString();
    const { titulo, descricao } = req.body;

    const repository = new RecadoRepository();

    const recado = await repository.updateRecado(idRecado, titulo, descricao);

    res.status(200).json({
      success: true,
      data: recado,
    });
  }

  async deleteRecado(req: Request, res: Response) {
    const idRecado = req.params.idRecado?.toString();

    const repository = new RecadoRepository();

    await repository.deleteRecado(idRecado);

    res.status(200).json({
      success: true,
      message: "Recado deletado com sucesso!",
    });
  }
}
