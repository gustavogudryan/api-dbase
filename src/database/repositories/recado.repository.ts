import { ILike } from "typeorm";
import { RecadoEntity } from "../entities/recados.entity";
import { pgHelper } from "../pg-helper";

export class RecadoRepository {
  async createRecado(
    recadoTitulo: string,
    recadoDescricao: string,
    userId: string
  ): Promise<RecadoEntity> {
    const manager = pgHelper.client.manager;

    const newRecado = manager.create(RecadoEntity, {
      recadoTitulo,
      recadoDescricao,
      userId,
    });

    return await manager.save(newRecado);
  }

  async getAllRecados(userId: string): Promise<RecadoEntity[]> {
    const manager = pgHelper.client.manager;
    return await manager.find(RecadoEntity, { where: { userId } });
  }

  async updateRecado(
    idRecado: string,
    recadoTitulo: string,
    recadoDescricao: string
  ): Promise<RecadoEntity | undefined> {
    const manager = pgHelper.client.manager;
    const recado = await manager.findOne(RecadoEntity, { where: { idRecado } });

    if (!recado) {
      return undefined;
    }

    recado.recadoTitulo = recadoTitulo;
    recado.recadoDescricao = recadoDescricao;

    return await manager.save(recado);
  }

  async deleteRecado(idRecado: string): Promise<void> {
    const manager = pgHelper.client.manager;

    await manager.delete(RecadoEntity, {
      idRecado,
    });
  }
}
