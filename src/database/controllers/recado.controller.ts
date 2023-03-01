import { Request, Response } from "express";
import { RecadoRepository } from "../repositories/recado.repository";

export class RecadoController {
  async create(req: Request, res: Response) {
    const { titulo, descricao, userId } = req.body;

    const repository = new RecadoRepository();

    const note = await repository.createRecado(titulo, descricao, userId);

    return res.status(200).json({
      success: true,
      data: note,
    });
  }

  async getUserRecados(req: Request, res: Response) {
    const userId = req.query.userId?.toString();

    const repository = new RecadoRepository();

    const notes = await repository.getAllNotes(userId!);

    return res.status(200).json({
      success: true,
      data: notes,
    });
  }

  async updateRecado(req: Request, res: Response) {
    const idRecado = req.params.idRecado?.toString();
    const { titulo, descricao } = req.body;

    const repository = new RecadoRepository();

    const note = await repository.updateRecado(idRecado, titulo, descricao);

    res.status(200).json({
      success: true,
      data: note,
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
