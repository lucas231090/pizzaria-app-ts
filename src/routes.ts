import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
("./controllers/CreateUserController");
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

//--rotas do servidor --
router.get("/server", (request: Request, response: Response) => {
  console.log("Rota server OK!");
  return response.json({ message: "servidor on-line 🚀!!!" });
});

router.get("/teste", (request: Request, response: Response) => {
  throw new Error("Erro ao fazer a requisição");
});

export { router };
