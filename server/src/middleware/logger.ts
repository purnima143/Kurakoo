import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`Endpoint which has been hit: ${req.url}`);
    // console.log(req.url);

    next();
};

export default logger;
