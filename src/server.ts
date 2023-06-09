//yarn dev
//git push -u origin main
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3333;

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      //se for uma instancia de um error
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error.",
    });
  }
);

app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
);
