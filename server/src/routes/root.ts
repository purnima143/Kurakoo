import express, { Request, Response, Router } from "express";

import { apiData } from "../types/interfaces";

const dataToSend: apiData = {
  name: "John Doe",
  age: 13,
  pass: true,
};

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(dataToSend);
});

export default router;
