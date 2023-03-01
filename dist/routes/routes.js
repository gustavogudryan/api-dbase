"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recado_controller_1 = require("../database/controllers/recado.controller");
const user_controller_1 = require("../database/controllers/user.controller");
const checkEmailExist_middleware_1 = __importDefault(require("../database/middlewares/checkEmailExist.middleware"));
const checkInputs_middleware_1 = __importDefault(require("../database/middlewares/checkInputs.middleware"));
const checkPassword_middleware_1 = __importDefault(require("../database/middlewares/checkPassword.middleware"));
exports.default = (server) => {
    const userController = new user_controller_1.UserController();
    // sign up
    server.post("/users", checkEmailExist_middleware_1.default, checkPassword_middleware_1.default, checkInputs_middleware_1.default, userController.create);
    // login
    server.post("/users/login", userController.login);
    const recadoController = new recado_controller_1.RecadoController();
    // post recado
    server.post("/users/recados", recadoController.create);
    // pegar recado
    server.get("/users/recados", recadoController.getUserRecados);
    // editar recado
    server.put("/users/recados/idRecado", recadoController.updateRecado);
    // deletar recado
    server.delete("/users/recados/idRecado", recadoController.deleteRecado);
};
