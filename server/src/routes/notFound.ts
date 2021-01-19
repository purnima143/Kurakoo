import express, { Request, Response, Router } from "express";

import { notFoundData } from "../types/interfaces";

const router: Router = express.Router();

const dataToSend: notFoundData = {
  message: "Error 404 not found",
};

router.get("/", (req: Request, res: Response) => {
  res.send(dataToSend);
});

export default router;
