import { Express } from "express";
import { RecadoController } from "../database/controllers/recado.controller";
import { UserController } from "../database/controllers/user.controller";
import checkEmailExist from "../database/middlewares/checkEmailExist.middleware";
import checkInputs from "../database/middlewares/checkInputs.middleware";
import checkPasswords from "../database/middlewares/checkPassword.middleware";

export default (server: Express) => {
  const userController = new UserController();
  // sign up
  server.post(
    "/users",
    checkEmailExist,
    checkPasswords,
    checkInputs,
    userController.create
  );
  // login
  server.post("/users/login", userController.login);

  const recadoController = new RecadoController();
  // post recado
  server.post("/users/recados", recadoController.create);
  // pegar recado
  server.get("/users/recados", recadoController.getUserRecados);
  // editar recado
  server.put("/users/recados/idRecado", recadoController.updateRecado);
  // deletar recado
  server.delete("/users/recados/idRecado", recadoController.deleteRecado);
};
