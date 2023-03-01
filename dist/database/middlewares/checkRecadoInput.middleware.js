"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRecadoInput(req, res, next) {
    const { titulo, descricao } = req.body;
    if (!titulo || !descricao) {
        return res.status(400).json({
            success: false,
            message: "Sem informação",
        });
    }
    next();
}
exports.default = checkRecadoInput;
