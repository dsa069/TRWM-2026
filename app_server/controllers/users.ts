import { NextFunction, Request, Response } from "express";

const users = (req: Request, res: Response, next: NextFunction): void => {
  res.send("respond with a resource");
};

export { users };
