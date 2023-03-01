"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadoRepository = void 0;
const recados_entity_1 = require("../entities/recados.entity");
const pg_helper_1 = require("../pg-helper");
class RecadoRepository {
    createRecado(recadoTitulo, recadoDescricao, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const newRecado = manager.create(recados_entity_1.RecadoEntity, {
                recadoTitulo,
                recadoDescricao,
                userId,
            });
            return yield manager.save(newRecado);
        });
    }
    getAllNotes(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            return yield manager.find(recados_entity_1.RecadoEntity, { where: { userId } });
        });
    }
    updateRecado(idRecado, recadoTitulo, recadoDescricao) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const recado = yield manager.findOne(recados_entity_1.RecadoEntity, { where: { idRecado } });
            if (!recado) {
                return undefined;
            }
            recado.recadoTitulo = recadoTitulo;
            recado.recadoDescricao = recadoDescricao;
            return yield manager.save(recado);
        });
    }
    deleteRecado(idRecado) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            yield manager.delete(recados_entity_1.RecadoEntity, {
                idRecado,
            });
        });
    }
}
exports.RecadoRepository = RecadoRepository;
