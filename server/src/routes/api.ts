import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, Router } from "express";

import { apiData } from "../types/interfaces";

const router: Router = express.Router();

const dataToSend: apiData = {
  name: <string>process.env.API_SECRET,
  age: 25,
  pass: false,
};

router.get("/", (req: Request, res: Response) => {
  res.send(dataToSend);
});

export default router;
