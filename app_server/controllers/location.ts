import { Request, Response } from "express";

const homeList = (req: Request, res: Response): void => {
  res.render("locations-list", {
    title: "Home",
  });
};

/*const homeList = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Home",
  });
};*/

const locationInfo = (req: Request, res: Response): void => {
  res.render("locations-info", {
    title: "Location Info",
  });
};

/*const locationInfo = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Location Info",
  });
};*/

const addReview = (req: Request, res: Response): void => {
  res.render("index", {
    title: "Add Review",
  });
};

export { homeList, locationInfo, addReview };
