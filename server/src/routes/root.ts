import express, { Request, Response, Router } from "express";

import { apiData } from "../types/interfaces";
import responseHandler from "../helpers/responseHandler";

const dataToSend: apiData = {
  name: "John Doe",
  age: 13,
  pass: true,
};

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.json(responseHandler<apiData>(
    true,
    200,
    'Data retrieved successfully',
    dataToSend
  ));
});

export default router;
