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
exports.RecadoController = void 0;
const recado_repository_1 = require("../repositories/recado.repository");
class RecadoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, descricao, userId } = req.body;
            const repository = new recado_repository_1.RecadoRepository();
            const note = yield repository.createRecado(titulo, descricao, userId);
            return res.status(200).json({
                success: true,
                data: note,
            });
        });
    }
    getUserRecados(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (_a = req.query.userId) === null || _a === void 0 ? void 0 : _a.toString();
            const repository = new recado_repository_1.RecadoRepository();
            const notes = yield repository.getAllNotes(userId);
            return res.status(200).json({
                success: true,
                data: notes,
            });
        });
    }
    updateRecado(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const idRecado = (_a = req.params.idRecado) === null || _a === void 0 ? void 0 : _a.toString();
            const { titulo, descricao } = req.body;
            const repository = new recado_repository_1.RecadoRepository();
            const note = yield repository.updateRecado(idRecado, titulo, descricao);
            res.status(200).json({
                success: true,
                data: note,
            });
        });
    }
    deleteRecado(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const idRecado = (_a = req.params.idRecado) === null || _a === void 0 ? void 0 : _a.toString();
            const repository = new recado_repository_1.RecadoRepository();
            yield repository.deleteRecado(idRecado);
            res.status(200).json({
                success: true,
                message: "Recado deletado com sucesso!",
            });
        });
    }
}
exports.RecadoController = RecadoController;
