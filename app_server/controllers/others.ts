import { Request, Response } from "express";

const about = (req: Request, res: Response): void => {
  res.render("index", {
    title: "About",
  });
};

export { about };
