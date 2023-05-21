import { Router, Request, Response, request } from "express";

const router = Router();

router.get("/server", (request: Request, response: Response) => {
  return response.json({ message: "servidor on-line 🚀!!!" });
});

router.get("/teste", (request: Request, response: Response) => {
  throw new Error("Erro ao fazer a requisição");
});

export { router };
