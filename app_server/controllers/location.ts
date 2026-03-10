import { Request, Response } from "express";

const homeList = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Home",
  });
};

const locationInfo = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Location Info",
  });
};

const addReview = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Add Review",
  });
};

export { homeList, locationInfo, addReview };
