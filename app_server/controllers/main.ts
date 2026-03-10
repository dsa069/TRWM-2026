import { NextFunction, Request, Response } from "express";

const index = (req: Request, res: Response, next: NextFunction): void => {
  res.render("index", { title: "Express" });
};

export { index };
